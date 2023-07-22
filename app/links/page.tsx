import Image from "next/image";
import avatar from "app/avatar.jpg";

// Dummy links data
const links = [
  {
    title: "GitHub",
    url: "https://github.com/elie-h",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/ehamouche",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/thehamouche",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/elie.hamouche",
  },
];

export default function LinksPage() {
  return (
    <section className="px-4 sm:px-0 text-center">
      <div>
        <Image
          src={avatar}
          alt="Avatar"
          className="mx-auto rounded-full object-cover"
          width={100}
          height={50}
        />
      </div>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Elie Hamouche
      </h1>

      <div className="flex flex-col items-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block mb-4 p-4 rounded-lg text-center w-full sm:w-1/2 shadow-lg bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
}
