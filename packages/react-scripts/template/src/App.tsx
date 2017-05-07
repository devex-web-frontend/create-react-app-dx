import * as React from 'react';

import * as styles from './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app_header}>
          <img src={logo} className={styles.app_logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app_intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
