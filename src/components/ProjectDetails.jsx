import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projectGroups } from "../data/projects";

export default function ProjectDetails() {
  const { groupId, projectIndex } = useParams();
  const group = projectGroups.find((item) => item.id === groupId);
  const project = group?.projects[Number(projectIndex)];

  if (!group || !project) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-3 text-[#737d75]">This project link may have changed.</p>
        <Link to="/#projects" className="mt-6 inline-flex rounded-full bg-[#17231f] px-5 py-3 text-sm font-semibold text-white">Back to projects</Link>
      </section>
    );
  }

  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#637c2e] transition hover:gap-3"><ArrowLeft size={16} /> Back to all projects</Link>
        <div className="mt-8 grid items-center gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[1.75rem] border border-[#e5e8df] bg-white shadow-xl shadow-[#263528]/10">
            <img src={project.image} alt={`${project.name} preview`} className="aspect-[16/11] w-full object-cover" />
          </motion.div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#839348]">Category {group.number} · {project.type}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-base leading-8 text-[#707b72]">{project.description}</p>
            <p className="mt-4 text-sm leading-7 text-[#899289]">This page opens instantly inside the portfolio. Use the button below to visit the live project or design in its original website.</p>
            <motion.a href={project.url} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17231f] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#17231f]/15 transition hover:bg-[#354c40]">Open live project <ArrowUpRight size={17} /><ExternalLink size={14} /></motion.a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
