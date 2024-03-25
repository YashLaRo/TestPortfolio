import React from "react";
import Typed from "typed.js"
import Photo_1 from '../photo_1.jpg';

export function MyInfo() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Java FullStack Developer', 'Python Developer'],
      typeSpeed: 105, loop: true, backSpeed: 20,
    })
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section>

      <div id="homeinfo" className="container px-5 py-5  mt-12   d-flex">
        <div >
          <h1>Namaste _/\_</h1>
          {/* <h4 className="mt-3 text-2xl gradient-text">frontend developer</h4> */}
          <span className="mt-3 text-2xl gradient-text " ref={el} />
          <h6 className="mt-4">Lorem ipsum dolor sit, amet consectetur <br></br>adipisicing elit.
            <br></br>Assumenda impedit earum maxime. <br></br>Culpa obcaecati mollitia modi
            exercitationem quis<br></br> blanditiis aliquid, <br></br>ipsam ducimus, nostrum optio</h6>

          {/* <Button className='mt-8 mx-10'>Resume</Button>

                <Button className='mt-8 mx-10'>Hire me</Button> */}
        </div>
        <div className='mx-auto'>
          <img id='pic' src={Photo_1} width={220} alt="img" />
        </div>
      </div>

    </section>
  );
}