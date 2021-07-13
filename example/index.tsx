import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Previewer from '../dist/h5-previewer.cjs.production.min.js';

const phones = [
  {
    name: 'iPhone 6/7/8',
    width: 375,
    height: 667,
  },
  {
    name: 'iPhone X',
    width: 375,
    height: 812,
  },
  {
    name: 'HUAWEI Mate 40',
    width: 360,
    height: 792,
  },
  {
    name: 'HUAWEI nova 5i',
    width: 360,
    height: 770,
  },
  {
    name: 'Moto G4',
    width: 360,
    height: 640,
  },
];

const App = () => {
  const [{ width, height, name }, updateSize] = React.useState(phones[0]);
  const [mode, updateMode] = React.useState('normal');
  const [rotate, updateRotate] = React.useState(false);

  const handleUpdatePhone = ({ width, height, name }) => {
    updateSize({ width, height, name });
  };

  const handleUpdateMode = mode => {
    updateMode(mode);
  };

  const handleRotate = flag => {
    updateRotate(flag === 1);
  };

  return (
    <div className="root">
      <Previewer width={width} height={height} mode={mode} rotate={rotate}>
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: 0,
          }}
          src="https://www.itsnicethat.com/"
        />
      </Previewer>

      <div className="operations_box">
        <div className="phone_box">
          {phones.map(phone => (
            <button
              className={name === phone.name ? 'active' : ''}
              key={phone.name}
              onClick={() => handleUpdatePhone(phone)}
            >
              {phone.name}
            </button>
          ))}
        </div>
        <div className="divider"></div>
        <div className="phone_box">
          <button onClick={() => handleUpdateMode('normal')}>
            normal mode
          </button>
          <button onClick={() => handleUpdateMode('table')}>table mode</button>
          <button onClick={() => handleRotate(1)}>open rotate</button>
          <button onClick={() => handleRotate(0)}>close rotate</button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
