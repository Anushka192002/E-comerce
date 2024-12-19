import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Products from './components/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Popup from './components/Popup';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
 React.useEffect(()=>{
AOS.init({
  offset:100,
  duration:800,
  easing:"ease-in-sine",
  delay:100,
});
 AOS.refresh();
},[]);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App
