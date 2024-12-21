'use client'
import React from 'react'
import Cards from './cards/Cards';


const HomePage = () => {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-20">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              TechLabSoft
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TechLabSoft is a comprehensive platform designed to empower businesses with cutting-edge software solutions and premium IT services. Our mission is to drive digital transformation and accelerate growth for our clients by providing tailor-made solutions that align with their unique needs and objectives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      <Cards/>
      </div>
    </div>
  );
};

export default HomePage;
