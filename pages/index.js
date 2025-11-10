import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
//npm run dev for this
export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('toggleTheme');

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      root.classList.add('dark');
      toggleBtn.textContent = 'Switch to Light Theme';
    }

    toggleBtn.addEventListener('click', () => {
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
    });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen flex items-start justify-center px-6 py-12">
      <Head>
        <title>Patrick Kwon | Portfolio</title>
      </Head>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">What's up guys!</h1>
          <p>
            I'm an incoming SWE at BlackRock, currently interning at FHL Vive Center for Enhanced Reality.
            I'm also a machine learning researcher at Lawrence Berkeley National Lab (LBNL)!
            I previously worked at Dorsal.fyi (Summer 2025) & Geopogo (Winter-Summer 2025) working on full-stack development & software engineering.
            I am studying Data Science, Computer Science & Cognitive Science at UC Berkeley.
            On campus, I am in NeuroTech, was an orientation leader (2024) & am a Blue RA (2025). 
            Based in San Jose, CA.
          </p>


          <h2 className="text-xl font-semibold">You might know me from...</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Incoming at <a href="https://www.blackrock.com/us/financial-professionals/investments/products/managed-accounts" className="text-blue-600 hover:underline">BlackRock (Summer 2026)</a>
            </li>
            <li>
              Interning at <a href="https://tai.berkeley.edu/" className="text-blue-600 hover:underline">FHL Vive Center for Enhanced Reality (TAI)</a>
            </li>
            <li>
              Researching at <a href="https://qiangrouppage.lbl.gov/people" className="text-blue-600 hover:underline">Lawrence Berkeley National Laboratory</a>
            </li>
            <li>
              Interned at <a href="https://www.dorsal.fyi/" className="text-blue-600 hover:underline">Dorsal.fyi</a>
            </li>
            <li>
              Interned at <a href="https://geopogo.com" className="text-blue-600 hover:underline">Geopogo</a>
            </li>
            <li>
              Software Dev @ <a href="https://neurotech.studentorg.berkeley.edu/" className="text-blue-600 hover:underline">Neurotech @Berkeley</a>
            </li>
          </ul>
          <h2 className="text-xl font-semibold">Projects I've worked on (more to come)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              DIY Dining: <a href="https://github.com/tinmly/CS198-Project-3/blob/main/README.md" className="text-blue-600 hover:underline">Link Here</a>
            </li>
          </ul>

          <button id="toggleTheme" className="mt-6 text-blue-600 underline">
            Switch to Dark Theme
          </button>
          <h1>Made with HTML, CSS & JS (Next.js), hosted on Vercel. Used ChatGPT for installing packages </h1>
          <h1>By the way the cat in the picture is not me nor my actual cat, I catsitted him & I just really like him</h1>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src="/totoro.jpg" width={128} height={128} className="rounded-full" alt="Your profile picture" />
          <h2 className="text-xl font-bold">Patrick Kwon</h2>
          <div className="text-blue-600 space-y-1">
            <a href="https://www.linkedin.com/in/patrick-kwon-/" className="block hover:underline">LinkedIn</a>
            <a href="https://github.com/AugmentedMelon" className="block hover:underline">GitHub</a>
            <p className="text-gray-700 dark:text-gray-300">Contact: kwnpatrick@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

