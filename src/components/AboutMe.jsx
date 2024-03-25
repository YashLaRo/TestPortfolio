// import React from "react";

// export function AboutMe() {
//     return (
//         <div id='aboutme'>
//             <h2 className='text-center mt-4'>About Me</h2>
//             <div className="container">

//             <div className="row">
//                 <div className="col-6">
//                     <section className='py-12 mt-10 mx-14 px-6'>
//                         <h3 className='text-center' style={{ borderBottom: '0.5px solid cyan ', width: '650px', margin: 'auto' }}>Education</h3>
//                         <div className=' relative before:absolute before:top-0 before:left-4 before:bottom-0 before:w-1 before:bg-cyan-300 mx-14 mt-5'>
//                             <div className='container mx-12'>
//                                 <div className='ml-10'>
//                                     <p className='absolute -left-2'>Sept23-Feb24</p>
//                                     <h5>DAC</h5>
//                                     <p>CDAC Mumbai </p>
//                                     <p><br></br></p>
//                                 </div>  
//                                 <div className='ml-10 '>
//                                     <p className='absolute -left-8 '>2019-23</p>
//                                     <h5>B.E.</h5>
//                                     <p>Finolex Academy of Management And Technology,Ratnagiri</p>
//                                     <p><br></br></p>
//                                 </div>
//                                 <div className='ml-10'>
//                                     <p className='absolute -left-8 '>2017-19</p>
//                                     <h5>HSC</h5>
//                                     <p>P.Sawant Dnyandeep,Jr.College,Oros </p>
//                                     <p><br></br></p>
//                                 </div>
//                                 <div className='ml-10'>
//                                     <p className='absolute -left-8 '>2017</p>
//                                     <h5>SSC</h5>
//                                     <p>K.M.S.P English Medium School,Kudal</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//                 <div className="col-6">
//                     <section className='py-12 mt-10 mx-14 pb-2'>
//                         <h3 className='text-center ' style={{ borderBottom: '0.5px solid cyan ', width: '350px', margin: 'auto' }}>Hobbies</h3>

//                         <li className='text-start mt-3 '>Volleyball</li>
//                         <li className='text-start'>Football</li>
//                         <li className='text-start'>Swimming</li>


//                         <h3 className='text-center mt-5 pt-5 pb-2' style={{ borderBottom: '0.5px solid cyan ', width: '350px', margin: 'auto' }}>Skills</h3>
//                         <li className='text-start mt-3 '>Team Player</li>
//                         <li className='text-start'>Focused</li>
//                         <li className='text-start'>Quick Learner</li>
//                     </section>
//                 </div>

//             </div>
//             </div>
//         </div>
//     );
// }.



import React from "react";

export function AboutMe() {
    return (
        <div id='aboutme'>
            <h2 className='text-center mt-4'>About Me</h2>
            <div className="container">
                {/* <div className="row">
                    <div className="col-6"> */}
                        <section className='py-12 mt-10 mx-14 px-6'>
                                <h3 className='text-center' style={{ borderBottom: '0.5px solid cyan', width: '650px', margin: 'auto' }}>Education</h3>
                            <div className=' mx-3 '>
                                <div className='absolute before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-orange-300 mx-14 mt-5 '>
                                    <div className='ml-10 relative'>
                                        <p className='absolute left-8'>Sept23-Feb24</p>
                                        <h5>DAC</h5>
                                        <p>CDAC Mumbai</p>
                                        <p><br /></p>
                                    </div>
                                    <div className='ml-10'>
                                        <p className='absolute -left-8'>2019-23</p>
                                        <h5>B.E.</h5>
                                        <p>Finolex Academy of Management And Technology, Ratnagiri</p>
                                        <p><br /></p>
                                    </div>
                                    <div className='ml-10'>
                                        <p className='absolute -left-8'>2017-19</p>
                                        <h5>HSC</h5>
                                        <p>P.Sawant Dnyandeep, Jr.College, Oros</p>
                                        <p><br /></p>
                                    </div>
                                    <div className='ml-10'>
                                        <p className='absolute -left-8'>2017</p>
                                        <h5>SSC</h5>
                                        <p>K.M.S.P English Medium School, Kudal</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <div className="col-6">
                        <section className='py-12 mt-10 mx-14 pb-2'>
                            <h3 className='text-center' style={{ borderBottom: '0.5px solid cyan', width: '350px', margin: 'auto' }}>Hobbies</h3>
                            <ul className="list-unstyled">
                                <li className='text-start mt-3'>Volleyball</li>
                                <li className='text-start'>Football</li>
                                <li className='text-start'>Swimming</li>
                            </ul>

                            <h3 className='text-center mt-5 pt-5 pb-2' style={{ borderBottom: '0.5px solid cyan', width: '350px', margin: 'auto' }}>Skills</h3>
                            <ul className="list-unstyled">
                                <li className='text-start mt-3'>Team Player</li>
                                <li className='text-start'>Focused</li>
                                <li className='text-start'>Quick Learner</li>
                            </ul>
                        </section>
                    </div> */}
                </div>
        //     </div>
        // </div>
    );
}
