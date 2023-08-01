import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
});

export const Register = () => (
	<div className="flex w-5/6 justify-center  m-auto mt-4">
		<div className="flex flex-col w-2/6 justify-center ">
			<h1 className="font-bold text-2xl text-center mt-10">
				Register your account
			</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form className="w-full flex flex-col justify-center mx-auto mt-10">
						<label
							for="firstName"
							class="block text-sm font-medium leading-6 text-gray-900"
						>
							First Name
						</label>
						<Field
							className="block mt-2 mb-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
							name="firstName"
						/>
						{errors.firstName && touched.firstName ? (
							<div>{errors.firstName}</div>
						) : null}
						<label
							for="lastName"
							class="block text-sm font-medium leading-6 text-gray-900"
						>
							Last Name
						</label>
						<Field
							name="lastName"
							className="block mt-2 mb-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
						/>
						{errors.lastName && touched.lastName ? (
							<div>{errors.lastName}</div>
						) : null}
						<label
							for="email"
							class="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<Field
							name="email"
							type="email"
							className="block mt-2 mb-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
						/>
						{errors.email && touched.email ? <div>{errors.email}</div> : null}
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900"
						>
							Password
						</label>
						<Field
							name="password"
							type="password"
							className="block mt-2 mb-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}

						<button
							type="submit"
							class="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	</div>
);

export default Register;
