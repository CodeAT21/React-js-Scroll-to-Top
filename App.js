import React,{useState,useEffect} from 'react';
import { FiArrowUp } from "react-icons/fi";

function App() {

  useEffect( () => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop =()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
      
    const [is_visible, set_visible] = useState(false);
    
    const toggleVisibility =()=> {
      if (window.pageYOffset > 700) {
        set_visible(true);
      
      } else {
        set_visible(false);
      }
    }
   
  return (
      <>
        <div className="Back__To__Top">
          <h1> Scroll to Top (Back To Top) </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


          {is_visible && ( <>
              <span onClick={scrollToTop} className="scrolls"> <FiArrowUp /> </span><span className="ltx-hex"><span className="ltx-hex-inner"></span></span>  
              </>
          )}
        </div>
        </>
  );
}

export default App;