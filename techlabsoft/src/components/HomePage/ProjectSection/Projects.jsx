import React from 'react';
import home1 from '../../../assets/homepage/home1.jpg';
import home2 from '../../../assets/homepage/home2.png';
import home3 from '../../../assets/homepage/home3.jpg';
import home4 from '../../../assets/homepage/home4.jpg';
import home5 from '../../../assets/homepage/home5.jpg';
import home6 from '../../../assets/homepage/home6.jpg';
import home7 from '../../../assets/homepage/home7.jpg';
import home8 from '../../../assets/homepage/home8.jpg';
import home9 from '../../../assets/homepage/home9.jpg';

const Projects = () => {
    const projects = [
        {
            image: home1,
            title: 'Edusys College ERP',
            description: 'EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.',
            imagePosition: 'left', // or 'right' for image on the right
        },
        {
            image: home2,
            title: 'Clinical ERP Soft',
            description: 'The registration and Appointment scheduling module is an efficient patient management system that eases capturing of pertinent information of the patients. The patient administration functionalities of the hospital can be automated to provide proficient patient care. The scheduling of patient and physician appointments can be done from this module. The details about schedule of a physician, slots available in his schedule, scheduled slots, blocked slots, tracking of patients and their visits, scheduling appointments for unregistered patients and emergency patients can be viewed effortlessly. Scheduling, rescheduling and manipulating of appointments can be done easily from our patient registration module. Managing of patient records can also be handled effortlessly.',
            imagePosition: 'right', // or 'right' for image on the right
        },
        {
            image: home3,
            title: 'AlignBook Trading ERP',
            description: 'EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.',
            imagePosition: 'left', // or 'right' for image on the right
        },
        {
            image: home4,
            title: 'E-Commerce and Mobile Apps',
            description: 'The registration and Appointment scheduling module is an efficient patient management system that eases capturing of pertinent information of the patients. The patient administration functionalities of the hospital can be automated to provide proficient patient care. The scheduling of patient and physician appointments can be done from this module. The details about schedule of a physician, slots available in his schedule, scheduled slots, blocked slots, tracking of patients and their visits, scheduling appointments for unregistered patients and emergency patients can be viewed effortlessly. Scheduling, rescheduling and manipulating of appointments can be done easily from our patient registration module. Managing of patient records can also be handled effortlessly.',
            imagePosition: 'right', // or 'right' for image on the right
        },
        {
            image: home5,
            title: 'Home/Building Automations',
            description: 'EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.',
            imagePosition: 'left', // or 'right' for image on the right
        },
        {
            image: home6,
            title: 'Hotel ERP Soft',
            description: 'The registration and Appointment scheduling module is an efficient patient management system that eases capturing of pertinent information of the patients. The patient administration functionalities of the hospital can be automated to provide proficient patient care. The scheduling of patient and physician appointments can be done from this module. The details about schedule of a physician, slots available in his schedule, scheduled slots, blocked slots, tracking of patients and their visits, scheduling appointments for unregistered patients and emergency patients can be viewed effortlessly. Scheduling, rescheduling and manipulating of appointments can be done easily from our patient registration module. Managing of patient records can also be handled effortlessly.',
            imagePosition: 'right', // or 'right' for image on the right
        },
        {
            image: home7,
            title: 'Complete IT Infrastructure Solutions',
            description: 'EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.',
            imagePosition: 'left', // or 'right' for image on the right
        },
        {
            image: home8,
            title: 'iQuantum Project Managment ERP',
            description: 'The registration and Appointment scheduling module is an efficient patient management system that eases capturing of pertinent information of the patients. The patient administration functionalities of the hospital can be automated to provide proficient patient care. The scheduling of patient and physician appointments can be done from this module. The details about schedule of a physician, slots available in his schedule, scheduled slots, blocked slots, tracking of patients and their visits, scheduling appointments for unregistered patients and emergency patients can be viewed effortlessly. Scheduling, rescheduling and manipulating of appointments can be done easily from our patient registration module. Managing of patient records can also be handled effortlessly.',
            imagePosition: 'right', // or 'right' for image on the right
        },
        {
            image: home9,
            title: 'Billing and Inventory Soft and Payment Integration Solutions',
            description: 'EduSys is the number 1 College ERP software used in the most prestigious educational institutions in India and abroad. Edusys is used by more than a million students, 11 Universities, more than 900 colleges, 1000s of Schools, Boarding Schools, Academics, and coaching institutes to automate administrative and education responsibilities. It helps reduce operating costs by streamlining every activity together at the end of parents, teachers, staff, students, and Managements.',
            imagePosition: 'left', // or 'right' for image on the right
        }
    ];

    return (
        <div>
            <h1 className='text-5xl font-bold mx-20 my-60 capitalize'>We are specialized in !!!</h1>
            <div className='container h-14 rounded'>
                {projects.map((project, index) => (
                    <div key={index} className='grid grid-cols-2 gap-4'>
                        {project.imagePosition === 'left' && (
                            <div className='bg-no-repeat bg-left bg-fixed bg-contain bg-center h-' style={{ backgroundImage: `url(${project.image})` }}></div>
                        )}
                    <div className='container'>
                        <div className='text-4xl font-bold text-center'>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{project.title}</span>
                        </div>
                        <div>
                                <p className='text-2xl py-5 text-wrap'>{project.description}</p>
                    </div>
                        </div>
                        {project.imagePosition === 'right' && (
                            <div className='bg-no-repeat bg-right bg-fixed bg-contain bg-center h-' style={{ backgroundImage: `url(${project.image})` }}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
