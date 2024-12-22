import React from 'react';
import home1 from '../../../assets/homepage/home1.jpg';


const Projects = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold mx-20 my-60 capitalize'>We are specialized in !!!</h1>
            <div className='container h-14 rounded'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-fixed bg-contain bg-center h-' style={{ backgroundImage: `url(${home1})` }}>

                    </div>
                    <div className='container'>
                        <div className='text-4xl font-bold text-center'>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Edusys College</span> ERP
                        </div>
                        <div>
                            <p className='text-2xl py-5 text-wrap'>EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.</p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='text-4xl font-bold text-center'>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Edusys College</span> ERP
                        </div>
                        <div>
                            <p className='text-2xl py-5 text-wrap'>EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.</p>
                        </div>
                    </div>
                    <div className='bg-fixed bg-contain bg-center h-' style={{ backgroundImage: `url(${home1})` }}>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;
