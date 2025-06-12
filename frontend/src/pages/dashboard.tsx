import { Link } from "react-router-dom"
import { DashAppbar } from "../components/Appbar"


// export default function Dashboard(){

//     return (
//         <div>
//             <div>
//                 <DashAppbar></DashAppbar>
//             </div>
//         </div>
//     )
// }

import { PenSquare, Users, Zap } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <DashAppbar></DashAppbar>
      <header className="px-4 lg:px-6 h-14 flex items-center">
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Share Your Stories with the World
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Create, publish, and connect through your unique perspective. Start your blogging journey today.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <PenSquare className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Easy Writing</h2>
                <p className="text-center text-gray-500">Intuitive editor for seamless content creation</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Grow Your Audience</h2>
                <p className="text-center text-gray-500">Connect with readers and build your community</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Zap className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Powerful Analytics</h2>
                <p className="text-center text-gray-500">Gain insights into your blog's performance</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Blog Today</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Join thousands of writers and thinkers. Share your voice with the world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 BlogApp. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to={""}>
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to={""}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}