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
            I'm a software engineer at Dorsal.fyi & Geopogo (Summer 2025) working on full-stack development & ML.
            I’m pursuing a double major in Data Science & Cognitive Science at UC Berkeley with a minor in CS.
            Based in San Jose, CA.
          </p>


          <h2 className="text-xl font-semibold">You might know me from...</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Interning at <a href="https://geopogo.com" className="text-blue-600 hover:underline">Geopogo</a>
            </li>
            <li>
              Interning at <a href="https://www.dorsal.fyi/" className="text-blue-600 hover:underline">Dorsal.fyi</a>
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
          <h1>Made with HTML, Next.js, Tailwind CSS, and hosted on Vercel. & ChatGPT for installing packages</h1>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src="/pfp.jpg" width={128} height={128} className="rounded-full" alt="Your profile picture" />
          <h2 className="text-xl font-bold">Patrick Kwon</h2>
          <div className="text-blue-600 space-y-1">
            <a href="#" className="block hover:underline">Resume</a>
            <a href="https://github.com/AugmentedMelon" className="block hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/patrick-kwon-/" className="block hover:underline">LinkedIn</a>
            <p className="text-gray-700 dark:text-gray-300">Contact: kwnpatrick@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

