"use client"
import { motion } from "framer-motion";
import WaitListForm from "../WaitlistForm/WaitlistForm";

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-bold leading-tight text-gray-700">
          <q>Qrio</q><br />
          <span className="text-orange-400">Smart Links & QR Codes for</span> <br/>
          <span>Modern Sharing.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          A modern link management tool built for marketers, creators and businesses. Join the waitlist to get early access.
        </motion.p>

        {/* Waitlist form */}
        <WaitListForm />

        <div className="mt-4 text-lg text-gray-700"><q> Don’t copy long links. Qrio it. </q></div>
      </section>

      {/* Feature preview */}
      {/* <section className="max-w-6xl mx-auto px-6 mt-24 grid md:grid-cols-3 gap-6">
        <Feature title="Shorten Links" desc="Create branded and trackable short links that convert better." />
        <Feature title="Custom QR Builder" desc="Design and download beautiful QR codes for marketing campaigns." />
        <Feature title="Real-Time Analytics" desc="Monitor engagement, trafffic sources and geographic insights." />
      </section> */}

      {/* Stats bar */}
      {/* <section className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <Stat number="12k+" label="Active Users" />
        <Stat number="4.8M" label="Links Created" />
        <Stat number="320k" label="QR Downloads" />
        <Stat number="99.9%" label="Uptime" />
      </section> */}

      {/* Footer */}
      <footer className="fixed w-full bottom-0 py-5 text-center text-sm">© {new Date().getFullYear()} Qrio. All rights reserved.</footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border bg-gray-50 hover:shadow-sm transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

// function Stat({ number, label }: { number: string; label: string }) {
//   return (
//     <div>
//       <div className="text-3xl font-bold text-indigo-600">{number}</div>
//       <div className="text-xs text-slate-500 mt-1">{label}</div>
//     </div>
//   );
// }