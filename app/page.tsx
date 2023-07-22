import Image from "next/image";
import avatar from "app/avatar.jpg";

export default function Page() {
  return (
    <div className="px-4 sm:px-0">
      <section className="flex mb-8">
        <div className="flex-1 mr-4">
          <h1 className="font-bold md:text-2xl sm:text-xl mb-2 tracking-tighter">
            Hi, I'm Elie 👋
          </h1>
          <p className="prose prose-neutral dark:prose-invert md:text-lg sm:text-base mb-4">
            I'm a software engineer based in London, UK. I'm currently the CTO
            of
            <a href="https://tickitto.com/"> Tickitto</a>, where I lead the
            engineering team and work to shape the future of ticketing.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src={avatar}
            alt="Elie's Avatar"
            width={150}
            height={150}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      <section className="prose prose-neutral dark:prose-invert md:text-lg sm:text-base mb-8">
        <p>
          While my primary focus is Backend Development and Data Engineering, I
          enjoy diversifying my skills with some Frontend work from time to
          time.
        </p>
      </section>

      <section className="prose prose-neutral dark:prose-invert md:text-lg sm:text-base mb-8">
        <p>Here are some topics I'm particularly interested in:</p>
        <ul>
          <li>Distributed Systems</li>
          <li>Data Engineering</li>
          <li>Software Architecture</li>
          <li>High Performance Computing</li>
          <li>Privacy & Security</li>
          <li>The Future of the Web</li>
        </ul>
      </section>

      <section className="prose prose-neutral dark:prose-invert md:text-lg sm:text-base mb-8">
        <p>
          Want to know more about me and my work? Check out my
          <a href="/blogs"> blog posts</a> and <a href="/projects">projects</a>.
          You can also connect with me on{" "}
          <a href="https://twitter.com/thehamouche">Twitter</a>.
        </p>
      </section>
    </div>
  );
}
