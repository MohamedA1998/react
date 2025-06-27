export default function Signup(){

    const handelSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries())
        console.log(data);
        event.target.reset();
    }

    return (<>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <form onSubmit={handelSubmit}>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                        <input type="text" placeholder="Jane" name="fname" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name"/>
                        <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                        <input type="text" placeholder="Doe" name="lname" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name"/>
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">Password</label>
                        <input type="password" name="password" placeholder="*********" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password"/>
                        <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">City</label>
                        <input type="text" name="city" placeholder="Albuquerque" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city"/>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">State</label>
                        <div className="relative">
                            <select name="state" className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                                <option value="New Mexico" >New Mexico</option>
                                <option value="Missouri" >Missouri</option>
                                <option value="Texas">Texas</option>
                            </select>
                            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">Zip</label>
                        <input type="text" name="zip" placeholder="90210" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip"/>
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-2 mt-6">
                    <div className="flex items-center justify-between px-3 space-x-4">
                        <label className="flex">TELL ME BY</label>
                        <label className="flex items-center">
                            <input type="checkbox" name="tellMe" value="google" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-600">GOOGLE</span>
                        </label>

                        <label className="flex items-center">
                            <input type="checkbox" name="tellMe" value="myFriend" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-600">BY MY FREIND</span>
                        </label>

                        <label className="flex items-center">
                            <input type="checkbox" name="tellMe" value="other" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-600">OTHER</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button id="button" type="reset" class="w-full px-6 py-3 mt-8 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
                        Reset
                    </button>
                    <button id="button" type="submit" class="w-full px-6 py-3 mt-8 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-purple-600 hover:bg-purple-500 hover:shadow-lg focus:outline-none">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </>)
}