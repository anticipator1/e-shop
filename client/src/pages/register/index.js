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
	password: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	phoneNumber: Yup.string()
		.min(10, "Too Short!")
		.max(15, "Too Long!")
		.required("Required"),
});

export const Register = () => (
	<div className="flex w-5/6  justify-center  m-auto mt-4">
		<div className="flex flex-col w-full sm:w-3/4 md:w-3/4  lg:w-2/4 xl:w-96  justify-center ">
			<h1 className="font-bold text-xl mt-4 w-full text-center md:text-2xl ">
				Register your account
			</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					phoneNumber: "",
					email: "",
					password: "",
					role: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form className="w-full flex flex-col justify-center mx-auto mt-10">
						<div className="flex  sm:flex-row flex-col  align-center ">
							<div className="w-full sm:w-1/2">
								<label
									for="firstName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									First Name
								</label>
								<Field
									className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
									name="firstName"
								/>
								{errors.firstName && touched.firstName ? (
									<div className="text-red-500">{errors.firstName}</div>
								) : null}
							</div>
							<div className="w-full sm:w-1/2 ml-1">
								<label
									for="lastName"
									className="block text-sm font-medium leading-6 text-gray-900 "
								>
									Last Name
								</label>
								<Field
									name="lastName"
									className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
								/>
								{errors.lastName && touched.lastName ? (
									<div className="text-red-500">{errors.lastName}</div>
								) : null}
							</div>
						</div>
						<label
							for="phoneNumber"
							className="block text-sm font-medium leading-6 text-gray-900 mt-5"
						>
							Phone Number
						</label>
						<Field
							className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
							name="phoneNumber"
						/>
						{errors.phoneNumber && touched.phoneNumber ? (
							<div className="text-red-500">{errors.phoneNumber}</div>
						) : null}
						<label
							for="email"
							class="block text-sm font-medium leading-6 text-gray-900 mt-5"
						>
							Email address
						</label>
						<Field
							name="email"
							type="email"
							className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
						/>
						{errors.email && touched.email ? (
							<div className="text-red-500">{errors.email}</div>
						) : null}
						<label
							for="password"
							className="block text-sm font-medium leading-6 text-gray-900 mt-5"
						>
							Password
						</label>
						<Field
							name="password"
							type="password"
							className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
						/>
						{errors.password && touched.password ? (
							<div className="text-red-500">{errors.password}</div>
						) : null}

						<button
							type="submit"
							className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
