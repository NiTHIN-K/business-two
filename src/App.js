import { useState } from 'react';
import './App.css';
import Faq from "react-faq-component";
import stepOne from './images/stepone.png';
import stepOneBuildings from './images/stepone-buildings.png';
import stepTwo from './images/steptwo.png';
import stepThree from './images/stepthree.png';
import downArrow from './images/down-arrow.png';

const data = {
  rows: [
    {
      title: "What exactly does the dashcam do?",
      content: <p>The antenna and its associated hardware will broadcast your internet (through an ethernet cable from your router/modem) connection through a 5G wireless signal that phones can connect to.
        It's essentially a wireless router, but with a 5G signal. Customers of <a rel="noopener noreferrer" href='https://www.pollenmobile.io/how-it-works'>Pollen Mobile</a> and <a rel="noopener noreferrer" href='https://hellohelium.com/'>Helium Mobile</a> will
        be able to connect to the internet through your setup.</p>,
    },
    {
      title: "How is the antenna installed?",
      content:
        <>
          <p>The antenna(s) can be installed on any existing poles or sturdy structures on the roof of your building.
            We can also install a new pole if needed. Here are examples of other installations:</p>
          <div className='examples'>
            <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/979156620372226129/WhatsApp_Image_2022-05-25_at_8.00.21_PM.jpeg'></img>
            <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/994362702485008395/IMG_2830.jpg'></img>
            <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/1006022517607116882/123_1.jpg'></img>
          </div>
        </>
    },
    {
      title: "How much does it cost to install? Does it cost me anything to run or use?",
      content: `Our service is free and will take care of installation and maintenance. Customers pay Pollen and Helium to use the internet, and you get paid for letting them use it! The only thing you provide is power and internet access.`
    },
    {
      title: "How much money can I make?",
      content: `Payment rate will be determined by factors such as location, height, and number of antennas. We will provide you with a quote based on your location and building.`,
    },
    {
      title: "How do I get paid?",
      content: `Payment will usually be an agreed upon flat amount per month, but can also be a percentage of the revenue generated by the antennas. We will work with you to determine the best payment method for you.`,
    },
    {
      title: "What if my roof/installation site doesn't have ethernet access?",
      content: `We can work with you to find a solution. We can provide another router or powerline adapter that will allow an ethernet cable on the roof.`
    },
    {
      title: "I'm interested! How do I get started?",
      content:
        <form
          action="https://formbold.com/s/3L5ko"
          method="POST"
          target="dummy">
          <label>
            Your email address:
            <input type="email" name="email" />
          </label>
          <label>
            Describe your location, driving frequency/schedule, and ask any questions you need answered:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
    }
  ]
};

const styles = {
  bgColor: 'rgba(0,0,0,0.3)',
  titleTextColor: "#afece7",
  rowTitleColor: "#afece7",
  rowContentColor: 'white',
  arrowColor: "white",
};

const config = {
  defaultActiveKey: ["6"], // Add this line
};

function App() {
  let [open, setOpen] = useState(false);
  let customClass = "";
  if (open) {
    customClass = "open";
  }
  return (
    <div className="App">
      <div className="section" id="section1">
        <h1 className='headline'>
          <span className='main-headline'>Drive often?</span> <br /> Why not get paid extra for it?? <br /> Get started in 3 steps:
        </h1>
        <div className='step-list'>
          <div className='step' id='step-one'>
            <div className='step-image'>
              <div className='step-top-gradient'></div>
              <img src={stepOneBuildings} className='step-bottom'></img>
            </div>
            <div class="step-text-parent">
              <div id="step-number-one" className='step-number'>
                🛠
              </div>
              <div class="step-text">
                <div class="step-content">We Set Up</div>
                <div class="step-content-lower">A 4K Dashcam in your car, for free!</div>
              </div>
            </div>
          </div>
          <div className='step' id='step-two'>
            <div className='step-image'>
              <img src={stepTwo} className='step-top'></img>
            </div>
            <div class="step-text-parent">
              <div id="step-number-two" className='step-number'>
                📡
              </div>
              <div class="step-text">
                <div class="step-content">Just Drive</div>
                <div class="step-content-lower">The dashcam will record road imagery. A companion phone app will upload that data to the cloud.</div>
              </div>
            </div>
          </div>
          <div className='step' id='step-three'>
            <div className='step-image'>
              <img src={stepThree} className='step-top'></img>
            </div>
            <div class="step-text-parent">
              <div id="step-number-three" className='step-number'>
                💰
              </div>
              <div class="step-text">
                <div class="step-content">Get rewards!!</div>
                <div class="step-content-lower">Get paid weekly for doing what you already do!</div>
              </div>
            </div>
          </div>

        </div>
        <div onClick={() => document.getElementById("howsItWork").scrollIntoView({ behavior: 'smooth' })} className='howsItWork' id='howsItWork'>
          <img className='down-arrow' src={downArrow}></img>
          How's it work?
        </div>
      </div>
      <div className="section" id='section2'>
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
        <iframe name="dummy" style={{ display: 'none' }}>
        </iframe>
      </div>
    </div>
  );
}

export default App;


