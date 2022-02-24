import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const drumSound = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const KeyboardKey = ({ play, sound: { id, keyTrigger, url, keyCode } }) => {

  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(keyTrigger, id)
    }
  }

  useEffect( () => {
    document.addEventListener("keydown", handleKeydown)
  }, []);

  return (
    <button className="drum-pad" id={id} onClick={() => play(keyTrigger, id)}>
      <audio className = "clip" id={keyTrigger} src = {url} />
      {keyTrigger}
    </button>    
  )
}

const Keyboard = ({ play }) => {
    return drumSound.map((sound) => <KeyboardKey play={play} sound={sound} />)
}

const App = () => {
  
  const [soundName, setSoundName] = React.useState("Click or Press a Key");

  const play = (keyTrigger, id) => {
    setSoundName(id)
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play()
  }
  
  return (
    <div id = "drum-machine">
      <div id="outer-drum">
      <Keyboard play={play} />
      </div>
      <div id = "display">
        <p>{soundName}</p>
      </div> 
    </div>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
