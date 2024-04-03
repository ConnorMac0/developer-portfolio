import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <a href={link}
            target="_blank"
            rel="noopener noreferer"
            className="border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden">
            <img src={imgUrl}
                 alt="portfolio item"
                 className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center jusify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 
                        dark:border-stone-300 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;