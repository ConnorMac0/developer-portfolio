import React, { useEffect, useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').
    matches) {
      setTheme('dark');
    } else{
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme == 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set isVisible to true after component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className='max-w-5xl w-11/12 mx-auto'>
        <div className={`transition-opacity delay-500 ease-in ${isVisible ? 'opacity-1' : 'opacity-0'}`}>
          <Intro />
        </div>
        <div className={`transition-opacity delay-1000 ease-in ${isVisible ? 'opacity-1' : 'opacity-0'}`}>
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
