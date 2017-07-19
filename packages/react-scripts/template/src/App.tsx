import * as React from 'react';
import * as css from './App.scss';
import * as logo from './logo.svg';

class App extends React.Component<{}, {}> {
	render() {
		return (
			<div className={css.App}>
				<div className={css.App_header}>
					<img src={logo}
					     className={css.App_logo}
					     alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className={css.App_intro}>
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
