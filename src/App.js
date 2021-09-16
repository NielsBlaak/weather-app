import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Week from './pages/Week';
import Day from './pages/Day';
import Header from './Components/Header';

function App() {

	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route path="/week">
						<Week />
					</Route>
					<Route path="/">
						<Day />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
