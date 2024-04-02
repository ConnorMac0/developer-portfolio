import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center 
        flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1
            md:mb-3 font-bold">Connor</h1>
            <p className="text-base md:text-xl mb-3 
            font-medium">Software Engineer & Computer Enthusiast</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm a University of Oregon graduate with a degree in Computer Science with a concentration in Machine Learning and Artificial Intelligence and a minor in Mathematics. 
            <br/>With a deep passion for software development, I love to challenge myself and put my skills to the test, thriving off of creativity and problem-solving. With skills ranging from full-stack engineering to 
            AI development I am eager to use everything I have learned to make great contributions in the tech industry and change the world.</p>
        </div>
    )
}

export default Intro;