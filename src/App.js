import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import EmployeeCreate from "./components/Employee-Create/Employee-Create";
import EmployeeSingleView from "./components/Employee-Single-View/Employee-Single-View";
import EmployeeUpdate from "./components/Employee-Update/Employee-Update";
import AllEmployees from "./components/Employee-View/Employee-View";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route
						exact
						path="/update-employee/:id"
						component={EmployeeUpdate}
					/>

					<Route exact path="/" component={AllEmployees} />
					<Route exact path="/employees" component={AllEmployees} />
					<Route
						exact
						path="/create-employee"
						component={EmployeeCreate}
					/>
					<Route
						exact
						path="/view-employee/:id"
						component={EmployeeSingleView}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
