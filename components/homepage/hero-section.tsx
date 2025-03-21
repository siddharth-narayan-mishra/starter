"use client";
import { ArrowRight, Github, Sparkles, Star, Code, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center py-20"
        aria-label="Nextjs Starter Kit Hero"
      >
        {/* Background gradient with improved blur effect */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[350px] w-[350px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[120px]"></div>
          <div className="absolute bottom-40 right-20 -z-10 h-[250px] w-[250px] rounded-full bg-purple-400 dark:bg-purple-500 opacity-10 blur-[100px]"></div>
        </div>
        <div className="space-y-6 text-center max-w-4xl px-4">
          {/* Animated pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-fit rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1 mb-6"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
              <Sparkles className="h-4 w-4" />
              <span>The Ultimate Next.js Starter Kit</span>
            </div>
          </motion.div>
          {/* Main heading with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white animate-gradient-x pb-2"
          >
            Build Faster with <br className="hidden sm:block" />
            Next Starter
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Launch your SaaS in minutes with our production-ready Next.js starter
            kit. Everything you need, from auth to payments.
          </motion.p>
          {/* CTA Buttons with hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-4"
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12 shadow-md hover:shadow-lg transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/siddharth-narayan-mishra/starter"
              target="_blank"
              className="flex items-center gap-2 rounded-full px-6 py-2 h-12 border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span>Star on GitHub</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Open Starter?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern tech stack and best practices for developers who value simplicity and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for performance with Next.js App Router and React Server Components.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Modern Stack</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TypeScript, Tailwind CSS, and other modern tools configured out of the box.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Open source and maintained by a passionate community of developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Github Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-2xl shadow-md overflow-hidden relative"
          >
            <div className="absolute -right-20 -bottom-20 opacity-5 dark:opacity-10">
              <Github className="w-64 h-64" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Community Backed</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Join thousands of developers already building with our open source starter kit. Contribute, customize, and create amazing projects.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/dashboard">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-2">
                      View Documentation
                    </Button>
                  </Link>
                  <Link href="https://github.com/siddharth-narayan-mishra/starter" target="_blank">
                    <Button variant="outline" className="rounded-full px-6 py-2 border-2 flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      View Repository
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Stat 1 */}
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                    <Star className="h-5 w-5" />
                    <span className="text-sm font-medium">GitHub Stars</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">13.5k+</p>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">Contributors</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">250+</p>
                </div>
                
                {/* Stat 3 */}
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400">
                    <Code className="h-5 w-5" />
                    <span className="text-sm font-medium">Components</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">40+</p>
                </div>
                
                {/* Stat 4 */}
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-orange-600 dark:text-orange-400">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm font-medium">Downloads</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">50k+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}