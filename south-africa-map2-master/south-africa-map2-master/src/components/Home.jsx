import React from 'react';
import SCNetTreeLogo from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/SCNetTreeLogo.png'; // Adjust the path based on your folder structure
import closedLogo from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/twitter.png'; // Adjust the path to closed.png
import socialLogo from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/social.png'; // Adjust the path to social.png
import instagramLogo from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/instagram.png'; // Adjust the path to instagram.png
//text to speech
const Home = () => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClick = (text) => {
    speak(text);
  };

  const handleClosedClick = () => {
    window.open('https://x.com/SCNet_ZA', '_blank'); // actual link
  };

  const handleSocialClick = () => {
    window.open('https://www.facebook.com/SupplyChainNetwork', '_blank'); //  actual link
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/scnet_za/', '_blank'); // actual link
  };
// texts and links 
  return (
    <div style={{ textAlign: 'center' }}>
      <section className="hero-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <div style={{ maxWidth: '60%', textAlign: 'center' }}>
          <h1 style={{ color: 'red', cursor: 'pointer',fontFamily:'monospace' }} onClick={() => handleClick('Welcome to SCNet')}>Welcome to SCNet</h1>
          <p style={{ color: 'black', margin: '0 auto', maxWidth: '700px', cursor: 'pointer', fontSize: '1.3rem',fontFamily:'monospace' }} onClick={() => handleClick('SCNet is a South African company founded in 2010. We are dedicated to bridging the gap between small, medium, and micro-sized enterprises (SMMEs) and larger corporations within the supply chain. We operate a national online platform that functions as a trade directory and supplier database.')}>
            SCNet is a South African company founded in 2010. We are dedicated to bridging the gap between
            small, medium, and micro-sized enterprises (SMMEs) and larger corporations within the supply chain.
            We operate a national online platform that functions as a trade directory and supplier database.
          </p>
          <h2 style={{ color: 'red', cursor: 'pointer', marginTop:'150px',fontFamily:'monospace' }} onClick={() => handleClick('Follow Us!')}>Follow Us!</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={closedLogo} alt="Closed Logo" style={{ width: '50px', height: '50px', cursor: 'pointer', marginRight: '10px' }} onClick={handleClosedClick} />
            <img src={socialLogo} alt="Social Logo" style={{ width: '50px', height: '50px', cursor: 'pointer', marginRight: '10px' }} onClick={handleSocialClick} />
            <img src={instagramLogo} alt="Instagram Logo" style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={handleInstagramClick} />
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src={SCNetTreeLogo} alt="SCNet Logo" style={{ maxWidth: '70%', height: 'auto', marginLeft: '20px' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
