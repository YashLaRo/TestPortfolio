import React from "react";


export function Skills(){
    return(
        <section id='Skills' className='py-12 mt-10 mx-14 px-6 '>
          <h3 className='text-center above-border '>Technology</h3>
          <div className='container con-border flex mt-5'>
            <div>
              <h4 className="gradient-text">Frontend</h4>
              {/* <i class="bi bi-patch-check-fill"></i>
                  <i class="bi bi-patch-check"></i>  */}
                  <div style={{border:'4px solid orange ',padding:'30px',width:'280px',height:'230px'}}>

              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>ReactJs</li>
                  </div>
            </div>
            <div className='mx-14 px-4'>
              <h4>Backend</h4>
              {/* <i class="bi bi-patch-check-fill"></i>
                  <i class="bi bi-patch-check"></i> */}
              <div style={{border:'4px solid orange ',padding:'30px',width:'280px',height:'230px'}}>
              <li>JavaScript</li>
              <li>Java SpringBoot</li>
              <li>Dot Net</li>
              </div>
            </div>
            <div className='mx-14 px-4'>
              <h4>Languages</h4>
               {/* <i class="bi bi-patch-check-fill"></i>
                  <i class="bi bi-patch-check"></i> */}
                <div style={{border:'4px solid orange ',padding:'30px',width:'280px',height:'230px'}}>   
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
              </div>
            </div>

          </div>

        </section>
    );
}