import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";

const promise = loadStripe(
	"pk_test_51IgInZKI5tpripqvUIjaWNrTtJPsB62N9tsOFiCMIx1DooovShvkT2HqO6tvbPzWF1kT4xxensN32lY8TZ16HXeW00JVID6q5V"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		// will only run once when the component loads...
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS", authUser);

			if (authUser) {
				//The user just logged in or user was logged in...
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//The user is logged out...
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
