/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/m3AGhvkdFCi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Iteration2() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm John Doe</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I'm a passionate designer and developer who loves creating beautiful and user-friendly interfaces.
                    Welcome to my portfolio!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg_white px-4 py-2 text-sm font-medium shadow-sm transition_colors hover:bg_gray-100 hover:text_gray-900 focus_visible:outline_none focus_visible:ring-1 focus_visible:ring_gray-950 disabled:pointer_events_none disabled:opacity-50 dark:border_gray-800 dark:bg_gray-950 dark:hover:bg_gray-800 dark:hover:text_gray-50 dark:focus_visible:ring_gray-300 dark:border-gray-800"
                    href="#"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text_center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font_bold tracking_tighter md:text-4xl/tight">Featured Project</h2>
              <p className="mx-auto max_w-[600px] text_gray-500 md:text-xl/relaxed lg:text_base/relaxed xl:text-xl/relaxed dark:text_gray-400">
                This is my latest project, where I used a minimalist design to create an elegant and intuitive user
                experience. Click the link below to view the project and learn more about my work.
              </p>
            </div>
            <div className="mx-auto w-full max_w_sm space-y-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border_gray-200 bg_white px-8 text_sm font_medium shadow_sm transition_colors hover:bg_gray-100 hover:text_gray-900 focus_visible:outline_none focus_visible:ring-1 focus_visible:ring_gray-950 disabled:pointer_events_none disabled:opacity-50 dark:border_gray-800 dark:bg_gray-950 dark:hover:bg_gray-800 dark:hover:text_gray-50 dark:focus_visible:ring_gray-300 dark:border-gray-800"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text_center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font_bold tracking_tighter md:text-4xl/tight">Case Studies</h2>
              <p className="mx-auto max_w_[600px] text_gray-500 md:text-xl/relaxed lg:text_base/relaxed xl:text-xl/relaxed dark:text_gray-400">
                Check out my detailed case studies to see how I approach design, solve problems, and deliver results.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text_center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font_bold tracking_tighter md:text-4xl/tight">About Me</h2>
              <p className="mx-auto max_w_[600px] text_gray-500 md:text-xl/relaxed lg:text_base/relaxed xl:text-xl/relaxed dark:text_gray-400">
                I'm a passionate designer and developer who loves creating beautiful and user-friendly interfaces.
                Welcome to my portfolio!
              </p>
            </div>
            <div className="mx-auto w-full max_w_sm space-y-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border_gray-200 bg_white px-8 text_sm font_medium shadow_sm transition_colors hover:bg_gray-100 hover:text_gray-900 focus_visible:outline_none focus_visible:ring-1 focus_visible:ring_gray-950 disabled:pointer_events_none disabled:opacity-50 dark:border_gray-800 dark:bg_gray-950 dark:hover:bg_gray-800 dark:hover:text_gray-50 dark:focus_visible:ring_gray-300 dark:border-gray-800"
                href="#"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text_center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font_bold tracking_tighter md:text-4xl/tight">Contact Me</h2>
              <p className="mx-auto max_w_[600px] text_gray-500 md:text-xl/relaxed lg:text_base/relaxed xl:text-xl/relaxed dark:text_gray-400">
                Ready to start a project or have a question? Feel free to contact me using the form below.
              </p>
            </div>
            <div className="mx-auto w-full max_w_[400px] space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text_gray-500 dark:text_gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
