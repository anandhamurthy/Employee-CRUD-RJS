import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EmployeeSingleView() {
	const [employee, setEmployee] = useState({});

	const params = useParams();

	useEffect(() => {
		var empdb = JSON.parse(localStorage.getItem("employeeDB")).find(
			(ele) => {
				return ele.id == params.id;
			}
		);
		return setEmployee(empdb);
	}, []);

	return (
		<div class="p-5 container-fluid">
			<div class="d-flex justify-content-start align-items-center">
				<i class="fas fa-school" />
				<h3 class="m-2 text-dark">View Employee</h3>
			</div>

			<div class="row align-items-center">
				<div class="p-2 d-md-block col-lg-6 mx-auto">
					<div class="shadow border-0 card p-4">
						<div class="card-body">
							<h4 class="text-dark mb-3">
								View Employee Details
							</h4>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-book-open" />
								</span>
								<p class="shadow rounded-right border-0 form-control">
									{employee.username}
								</p>
							</div>
							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-book-open" />
								</span>
								<p class="shadow rounded-right border-0 form-control">
									{employee.name}
								</p>
							</div>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="far fa-clock" />
								</span>
								<p class="shadow rounded-right border-0 form-control">
									{employee.age}
								</p>
							</div>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="fas fa-chalkboard-teacher" />
								</span>
								<p class="shadow rounded-right border-0 form-control">
									{employee.phonenumber}
								</p>
							</div>

							<div class="input-group mb-3">
								<span
									class="shadow rounded-left border-0 input-group-text bg-white"
									id="basic-addon1"
								>
									<i class="far fa-clock" />
								</span>
								<p class="shadow rounded-right border-0 form-control">
									{employee.emailid}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeSingleView;
