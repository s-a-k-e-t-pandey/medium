

export const BlogSkeleton = () => {
    return <div>
        <div role="status" className="max-w-screen-5xl p-4 space-y-4 border border-gray-200 ">
            <div className="flex items-center justify-between flex-col">
                <div className="flex justify-center flex-col">
                    <div className="h-8 bg-gray-300 rounded-full dark:bg-gray-400 w-96 mb-2.5 animate-pulse "></div>
                    <div className="h-4 bg-gray-300 rounded-full mb-2 "></div>
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}