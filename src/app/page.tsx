import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />

      </div>
      
      <div>
        <h1>Hi, i'm Samuel!</h1>
        <h2>Software Engineer</h2>
      </div>

      <div>
        <h3>Experience</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span> EN - Fluent</span>
            <span> PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <span></span>
        </div>
      </div>

    </main>
  );
}
