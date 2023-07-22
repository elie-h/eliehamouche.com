import Link from "next/link";

// Dummy project data
const projects = [
  {
    title: "Hyper Proxy",
    description:
      "A secure, performant, and observable HTTPs proxy server, designed for configurability and high performance.",
    url: "https://github.com/elie-h/hyper-proxy",
    technologies: ["Golang", "Sqlite"],
  },
  {
    title: "Third Realm",
    description: "Blockchain token gated communities",
    url: "https://github.com/elie-h/thirdrealm",
    technologies: ["Remix", "Nodejs", "PostgreSQL", "TypeScript"],
  },
  {
    title: "eliehamouche.com",
    description: "Personal website with a blog, projects page and links",
    url: "https://github.com/elie-h/eliehamouche.com",
    technologies: ["Nextjs", "Tailwindcss", "TypeScript"],
  },
];

export default function Page() {
  return (
    <section className="px-4 sm:px-0">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">projects</h1>

      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4">
          <h2 className="font-semibold text-xl mb-2">
            <a href={project.url} className="text-blue-500 hover:underline">
              {project.title}
            </a>
          </h2>{" "}
          <p className="mb-4">{project.description}</p>
          <div className="mt-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
