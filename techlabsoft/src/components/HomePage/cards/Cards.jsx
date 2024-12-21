import React from 'react';
// import './Cards.css'; // You might not need a separate CSS file for Tailwind CSS

const Cards = () => {
  const cardData = [
    { title: "TECHLAB SOFT", description: "Some quick example text to build on the card title and make up the bulk of the card's content.",button:"Learn more" },
    { title: "TECHLAB IT INFRA SOLUTION", description: "Some quick example text to build on the card title and make up the bulk of the card's content." ,button:"Learn more"},
    { title: "TECHLAB POWER AUTOMATIONS SOLUTION", description: "Some quick example text to build on the card title and make up the bulk of the card's content.",button:"Learn more" },
  ];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between p-4"> 
      {cardData.map((card, index) => (
        <div 
          key={index}
          className="container relative mx-auto box-border h-60 w-100 p-4 border-solid border-2 border-pink-200  bg-white-60 rounded-lg shadow-md p-6 transform hover:scale-105 transition ease-in-out duration-300"
        >
          <h2 className="mx-auto text-center py-16 text-xl font-bold mb-2">{card.title}</h2>
          {/* <p className="text-gray-600">{card.description}</p> */}
          <button className=' absolute right-0 bottom-4 px-14  text-blue-60 rounded-lg hover:scale-105 hover:text-pink-500 transition ease-in-out duration-300'>{card.button}<span aria-hidden="true">→</span></button>
          
      </div>
      ))}
    </div>
  );
};

export default Cards;
