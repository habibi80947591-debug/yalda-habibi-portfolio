import { motion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <motion.div key={location.pathname} className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17231f]" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:groupId/:projectIndex" element={<ProjectDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <motion.button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.94 }} className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#17231f] text-xl text-white shadow-lg">↑</motion.button>
    </motion.div>
  );
}
