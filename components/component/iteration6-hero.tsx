/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zSh8J10hc2k
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Iteration6Hero() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container mx-auto grid max-w-6xl px-4 gap-6 md:px-6 lg:gap-10"> 
        <div className="flex flex-col items-center justify-center space-y-4 text-center"> 
          <div className="space-y-2">
            <div className="space-y-1">
              <span className="inline-block text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Meet the Designer
              </span>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Abigail Thompson</h1> 
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400"> 
                Crafting delightful experiences through thoughtful design and innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm gap-1 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}