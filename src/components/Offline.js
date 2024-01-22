function Offline() {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                        <path fillRule="evenodd"
                                d="M2.293 7.293a1 1 0 011.414 0L10 13.586l6.293-6.293a1 1
                                0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1
                                1 0 010-1.414z"
                                clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm leading-5 text-yellow-700">
                        You are offline. Some functionality may be
                        unavailable.
                    </p>
                </div>
            </div>
        </div>


    )
}
export default Offline;