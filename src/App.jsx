import {  Suspense,useEffect,useState } from 'react';
import NavBar from './Component/NavBar';
import SectionOne from './Component/SectionOne';
import SectionTwo from './Component/SectionTwo';
import SectionThree from './Component/SectionThree';
import "./Component/Drink.css";
import Lottie from 'react-lottie';
import lottieAnimation from './Component/Loader/Loader.json';
const Loader = () => (
  <div style={loaderStyle}>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: lottieAnimation,
      }}
      height={300}
      width={300}
    />
  </div>
);

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ffffff', // Adjust the background color as needed
};
function App() {
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a delay for loading

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {loading ? (
      <Loader />
    ) : (
        <Suspense fallback={<Loader />}>
    <div id="main">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
    </Suspense>
    )}
    </>
  );
}

export default App;
