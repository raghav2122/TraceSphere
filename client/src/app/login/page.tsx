import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg px-4">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">
            Sign in to{" "}
            <span className="bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              TraceSphere
            </span>
          </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address / Username
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        type="email"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
                      />
                      <Label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </Label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="/password-reset"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {/* Add Google icon paths */}
                      </svg>
                    </button>
                    <button
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {/* Add GitHub icon paths */}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="m-auto mt-6 w-fit md:mt-8">
                  <span className="m-auto">
                    Don’t have an account?{" "}
                    <a
                      className="font-semibold text-indigo-600"
                      href="/register"
                    >
                      Create Account
                    </a>
                  </span>
                </div>
                <div className="mt-6 text-xs text-gray-500 opacity-75">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
                  <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
                  apply.
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
