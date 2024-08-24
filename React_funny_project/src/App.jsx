import React, { useState } from 'react';

const App = () => {
  let [showImage, setImage] = useState(true);
  let [input, setInputBox] = useState("");
  let [fontSize, setFontSize] = useState(30);
  let [showColor, setColor] = useState('blue');
  let [data, setData] = useState([]);
  let [value, setValue] = useState("");

  function setButton() {
    if (value.length === 0) {
      alert("Enter even a single number");
    } else {
      setData([...data, value]);
      setValue(""); // Clear the input after adding the item
    }
  }

  return (
    <div style={{ backgroundColor: '#ddd', minHeight: '300vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '50%', padding: 45, backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3>Flower kingdom</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, placeat?</p>
        </div>
        <div>
          <h3>Show and hide app</h3>
          {showImage && <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="" width="100%" />}
          <button onClick={() => setImage(!showImage)} style={{ background: 'dodgerblue', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px' }}>
            {showImage ? 'Hide' : 'Show'}
          </button>
        </div>
        <div>
          <h3>Input checking</h3>
          <input type="text" placeholder='Enter text' style={{ padding: '10px', border: '1px solid #ccc' }} onChange={(event) => setInputBox(event.target.value)} />
          <h4>{input}</h4>
        </div>
        <div>
          <h3>Font size checking</h3>
          <p style={{ fontSize: fontSize }}>Coding is fun</p>
          <input type="range" min="30" max="150" onChange={(e) => setFontSize(Number(e.target.value))} />
        </div>
        <div>
          <h4>Color Checking</h4>
          <input type="text" value={showColor} onChange={(e) => setColor(e.target.value)} />
          <div style={{ height: 100, width: 100, background: showColor, marginTop: 20 }}>
          </div>
        </div>
        <div>
          <h4>Dynamic list using array & object</h4>
          <div>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter product name' style={{ border: 'none', padding: 10, width: 150 }} value={value} />
            <button onClick={setButton} style={{ borderRadius: 5, marginLeft: 5, border: 'none', background: 'crimson', color: 'white', padding: 10, width: 90 }}>Add</button>
          </div>
        </div>
        <div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
