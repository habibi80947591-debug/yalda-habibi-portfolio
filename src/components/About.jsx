import { Code2, Heart, Layers3 } from "lucide-react";
import { motion } from "motion/react";

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "Git & GitHub"];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-[#e7e8df] bg-white/55 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12">
        <motion.div className="relative mx-auto w-full max-w-[440px]" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-[#d5e0c7]"/>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85" alt="Creative team collaborating on a digital project" className="relative h-[350px] w-full rounded-[1.75rem] object-cover shadow-xl shadow-black/5 sm:h-[470px]"/>
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#17231f] px-5 py-4 text-white shadow-xl sm:right-7">
            <p className="text-xs text-white/60">Driven by</p><p className="mt-1 font-semibold">Creativity & learning</p>
          </div>
        </motion.div>
        <motion.div className="self-center pt-2" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-kicker"><span className="h-2 w-2 rounded-full bg-[#819a43]"/> A LITTLE ABOUT ME</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Hello, I’m <span className="text-[#758e38]">Yalda Habibi.</span></h2>
          <h3 className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#39463e] sm:text-2xl">I’m a front-end developer in progress who enjoys turning ideas and designs into clean, responsive websites.</h3>
          <p className="mt-5 max-w-2xl leading-7 text-[#68736b]">I’m continuously improving my skills through hands-on projects, practice assignments, bootcamps, and design exploration. I value accessible interfaces, organized code, and the small details that make a website feel polished.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[["Build", Code2, "Practical projects"], ["Explore", Layers3, "UI and layouts"], ["Improve", Heart, "Learning every day"]].map(([title, Icon, desc], index) => <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.09 }} whileHover={{ y: -5 }} className="rounded-2xl border border-[#e5e8df] bg-[#fafbf7] p-4 transition-colors duration-300 hover:border-[#c8d6a7] hover:shadow-lg hover:shadow-black/5"><Icon size={19} className="text-[#78913c]"/><p className="mt-4 font-semibold">{title}</p><p className="mt-1 text-xs text-[#7b857d]">{desc}</p></motion.div>)}
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#7b857d]">My current toolkit</p>
            <div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full border border-[#e1e5db] bg-white px-3 py-2 text-xs font-medium text-[#536057] transition-colors hover:border-[#c7d7a5] hover:bg-[#f1f7e5]">{skill}</span>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
