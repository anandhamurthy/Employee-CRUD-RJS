import React, { useState, useEffect } from "react";

function EmployeeCreate() {
	const [username, setUserName] = useState("");
	const [name, setName] = useState("");
	const [emailid, setEmailId] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [age, setAge] = useState("");
	const [employees, setEmployees] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		var empdb =
			(localStorage.getItem("employeeDB") === null) | undefined
				? []
				: JSON.parse(localStorage.getItem("employeeDB"));
		return setEmployees(empdb);
	}, []);

	const onSubmit = async (event) => {
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

		const submitButton = document.querySelector(".add-employee");

		submitButton.disabled = true;

		var employee_details = {
			name: name,
			username: username,
			phonenumber: phonenumber,
			emailid: emailid,
			age: age,
			id: Date.now(),
		};

		employees.push(employee_details);
		localStorage.setItem("employeeDB", JSON.stringify(employees));
		window.location = "/";
	};

	return (
		<div class="p-5 container-fluid">
			<div class="d-flex justify-content-start align-items-center">
				<i class="fas fa-school" />
				<h3 class="m-2 text-dark">Create Employee</h3>
			</div>

			<div class="row align-items-center">
				<div class="p-2 d-md-block col-lg-6 mx-auto">
					<div class="shadow border-0 card p-4">
						<div class="card-body">
							<h4 class="text-dark mb-3">Add Employee Details</h4>

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
									onChange={(event) =>
										setUserName(event.target.value)
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
									type="text"
									value={name}
									class="shadow rounded-right border-0 form-control"
									placeholder="Employee Name"
									onChange={(event) =>
										setName(event.target.value)
									}
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
									class="shadow rounded-right border-0 form-control"
									placeholder="Employee Phone Number"
									onChange={(event) =>
										setPhoneNumber(event.target.value)
									}
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
									class="shadow rounded-right border-0 form-control"
									placeholder="Age"
									onChange={(event) =>
										setAge(event.target.value)
									}
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
									class="shadow rounded-right border-0 form-control"
									placeholder="Email ID"
									onChange={(event) =>
										setEmailId(event.target.value)
									}
								/>
							</div>

							{error}

							<div class="row">
								<div class="col-6">
									<button
										onClick={onSubmit}
										type="button"
										class="add-employee shadow border-0 rounded-0 btn btn-primary px-4"
									>
										Add Employee
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
export default EmployeeCreate;
