"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { subscribe } from "@/app/actions/subscribe";

export default function WaitListForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");
    const res = await subscribe(email);
    setStatus(res.message);
    setEmail("");
  };

  return (
    <div>
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-10 max-w-xl mx-auto flex gap-3 align-center max-sm:flex-col"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="flex-1 px-4 py-3 rounded-lg border min-h-10"
        required
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 rounded-lg bg-orange-400 text-white font-medium cursor-pointer"
      >
        Join Waitlist
      </button>
    </motion.form>
    {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
}
