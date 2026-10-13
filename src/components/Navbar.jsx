import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ opacity: 0, y: -22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-[#fbfbf7]/90 px-4 py-3 shadow-lg shadow-black/[0.04] backdrop-blur-xl sm:px-6">
        <a href="#home" className="group flex items-center gap-3" aria-label="Yalda Habibi home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#17231f] text-sm font-bold text-[#d8ff72] transition-transform duration-300 group-hover:rotate-12">YH</span>
          <span className="font-semibold tracking-tight">Yalda Habibi<span className="text-[#79913e]">.</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} className="text-sm text-[#59635e] transition-colors hover:text-[#17231f]" href={href}>{label}</a>)}
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[#d8ff72] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9f45b]">
            Explore work <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -8 }} transition={{ duration: 0.22 }} className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-black/5 bg-[#fbfbf7] p-4 shadow-xl md:hidden">
          {links.map(([label, href], index) => <motion.a initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }} onClick={() => setOpen(false)} key={label} href={href} className="block rounded-xl px-3 py-3 text-sm transition-colors hover:bg-black/5">{label}</motion.a>)}
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  );
}
