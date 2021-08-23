import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Employee-View.css";

function AllEmployees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		var empdb =
			(localStorage.getItem("employeeDB") === null) | undefined
				? []
				: JSON.parse(localStorage.getItem("employeeDB"));
		return setEmployees(empdb);
	}, []);

	function goToView(id) {
		window.location = "/view-employee/" + id;
	}
	function Delete(id) {
		var temp_emp = employees.filter((ele) => {
			return ele.id != id;
		});
		setEmployees(temp_emp);
		localStorage.setItem("employeeDB", JSON.stringify(temp_emp));
	}
	function goToUpdate(id) {
		window.location = "/update-employee/" + id;
	}

	return (
		<div>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand mx-2" href="#">
						Employee CRUD APP
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<div className="mystyle d-flex flex-wrap justify-content-end">
							<Link to="/create-employee">
								<button className="btn btn-primary btn-sm mx-2">
									Add Employee
								</button>
							</Link>
						</div>
					</div>
				</nav>
				<div className="container">
					<div className="py-4">
						<table className="table border shadow">
							<thead className="thead-dark">
								<tr>
									<th scope="col">#ID</th>
									<th scope="col">Name</th>
									<th scope="col">Username</th>
									<th scope="col">Age</th>
									<th scope="col">Phone Number</th>
									<th scope="col">Email</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{employees.map((emp, index) => (
									<tr>
										<th scope="row">{emp.id}</th>
										<td>{emp.name}</td>
										<td>{emp.username}</td>
										<td>{emp.age}</td>
										<td>{emp.phonenumber}</td>
										<td>{emp.emailid}</td>
										<td>
											<button
												onClick={() => goToView(emp.id)}
												className="btn btn-primary btn-sm mx-2"
											>
												View
											</button>
											<button
												onClick={() =>
													goToUpdate(emp.id)
												}
												className="btn btn-primary btn-sm mx-2"
											>
												Edit
											</button>
											<button
												onClick={() => Delete(emp.id)}
												className="btn btn-primary btn-sm mx-2"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AllEmployees;
