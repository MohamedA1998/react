import { useState } from "react";

export default function StateLogin() {
    // const [emailInput, setEmailInput] = useState('');
    // const [passwordInput, setPasswordInput] = useState('');
    // const handelEmailInput = (event) => setEmailInput(event.target.value);
    // const handelPasswordInput = (event) => setPasswordInput(event.target.value);

    const [inputValue, setInputValue] = useState({ email: "", password: "" });

    const handelInputChange = (input, value) => {
        setInputValue(prevValues => ({
            ...prevValues, 
            [input]: value
        }));
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (<>
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

            <form className="space-y-4" onSubmit={handelSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" onChange={(event) => handelInputChange('email', event.target.value)} value={inputValue.email}
                    name="email" placeholder="your@email.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" onChange={(event) => handelInputChange('password', event.target.value)} value={inputValue.password}
                    name="password" placeholder="••••••••" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>

                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                    Sign In
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account? 
                <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
            </div>
        </div>
    </>)
}