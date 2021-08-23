import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EmployeeUpdate() {
	const [username, setUserName] = useState("");
	const [name, setName] = useState("");
	const [emailid, setEmailId] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [age, setAge] = useState("");
	const [employee, setEmployee] = useState();
	const [employees, setEmployees] = useState([]);

	const [error, setError] = useState(null);

	const params = useParams();

	useEffect(() => {
		var empdb =
			(localStorage.getItem("employeeDB") === null) | undefined
				? []
				: JSON.parse(localStorage.getItem("employeeDB"));
		return setEmployees(empdb);
	}, []);

	useEffect(() => {
		loadUser();
	}, []);

	const updateEmployee = async (event) => {
		event.preventDefault();

		if (name === "") {
			setError("Enter Name..");
			return;
		}

		if (username === "") {
			setError("Enter User Name..");
			return;
		}

		if (age === "") {
			setError("Enter Age..");
			return;
		}

		if (phonenumber === "") {
			setError("Enter Phone Number..");
			return;
		}

		if (emailid === "") {
			setError("Enter Email ID..");
			return;
		}

		const submitButton = document.querySelector(".update-employee");

		submitButton.disabled = true;

		var emp_details = {
			username: username,
			id: params.id,
			name: name,
			age: age,
			phonenumber: phonenumber,
			emailid: emailid,
		};
		for (let i = 0; i < employees.length; i++) {
			if (employees[i].id == params.id) {
				employees[i] = emp_details;
			}
		}
		localStorage.setItem("employeeDB", JSON.stringify(employees));

		window.location = "/";
	};

	// const getInput = (e) => {
	// 	setEmployee({ ...employee, [e.target.name]: e.target.value });
	// };

	function loadUser() {
		var empdb = JSON.parse(localStorage.getItem("employeeDB")).find(
			(ele) => {
				return ele.id == params.id;
			}
		);
		setUserName(empdb.username);
		setName(empdb.name);
		setPhoneNumber(empdb.phonenumber);
		setEmailId(empdb.emailid);
		setAge(empdb.age);
		return setEmployee(empdb);
	}

	return (
		<div class="p-5 container-fluid">
			<div class="d-flex justify-content-start align-items-center">
				<i class="fas fa-school" />
				<h3 class="m-2 text-dark">Update Employee</h3>
			</div>

			<div class="row align-items-center">
				<div class="p-2 d-md-block col-lg-6 mx-auto">
					<div class="shadow border-0 card p-4">
						<div class="card-body">
							<h4 class="text-dark mb-3">
								Update Employee Details
							</h4>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-book-open" />
								</span>
								<input
									type="text"
									value={username}
									class="shadow rounded-right border-0 form-control"
									placeholder="Employee User Name"
									onChange={(e) =>
										setUserName(e.target.value)
									}
								/>
							</div>
							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-book-open" />
								</span>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
									class="shadow rounded-right border-0 form-control"
									placeholder="Employee Name"
								/>
							</div>
							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-chalkboard-teacher" />
								</span>
								<input
									type="text"
									value={phonenumber}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
									class="shadow rounded-right border-0 form-control"
									placeholder="Employee Phone Number"
								/>
							</div>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="far fa-clock" />
								</span>
								<input
									type="text"
									value={age}
									onChange={(e) => setAge(e.target.value)}
									class="shadow rounded-right border-0 form-control"
									placeholder="Age"
								/>
							</div>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="far fa-clock" />
								</span>
								<input
									type="text"
									value={emailid}
									onChange={(e) => setEmailId(e.target.value)}
									class="shadow rounded-right border-0 form-control"
									placeholder="Email ID"
								/>
							</div>
							{error}
							<div class="row">
								<div class="col-6">
									<button
										type="button"
										onClick={updateEmployee}
										class="update-employee shadow border-0 rounded-0 btn btn-primary px-4"
									>
										Update Employee
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeUpdate;
