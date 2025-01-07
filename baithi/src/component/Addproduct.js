import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { addNewProducts } from "../services/productsService";
import * as Yup from "yup";

function AddProducts() {
	const [products, setProducts] = useState({
		id: "",
		title: "",
		price: "",
		description: "",
	});
	const navigate = useNavigate();
	const hanleSubmit = async () => {
		await addNewProducts(products);
		navigate("/");
	};

	console.log(products);
	const handleValidate = Yup.object({
		id: Yup.string().required("Yêu cầu không được để trống").min(1, "Hãy điền id hợp lệ!"),

		title: Yup.string()
			.required("Tên không được để trống")
			.matches(/^[a-zA-Z0-9\s]+$/, "Tên không đúng định dạng"),

		description: Yup.string()
			.required("Mo ta không được để trống")
			.matches(/^[a-zA-Z0-9\s]+$/, "mo ta không đúng định dạng"),
		price: Yup.string()
			.required("Giá không được để trống")
			.min(0, "Phải là số nguyên dương")
			.matches(/^0[0-9]{9}$/, "giá không hợp lệ"),
	});

	return (
		<div className="container">
			<h3>Add New Product</h3>
			<Formik validationSchema={handleValidate} initialValues={products} onSubmit={hanleSubmit}>
			<Form className="mb-3">
				<div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							ID:
						</label>
						<div className="col-sm-4">
							<Field type="text" name="id" className="form-control" placeholder="ID" />
							<ErrorMessage name="id" style={{ color: "red" }} component="div" />
						</div>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">
								Tên Sản Phẩm:
							</label>
							<div className="col-sm-4">
								<Field type="text" name="title" className="form-control" placeholder="Tên Sản Phẩm" />
								<ErrorMessage name="title" style={{ color: "red" }} component="div" />
							</div>
						</div>
					</div>
					<div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Mô Tả:
							</label>
							<div className="col-sm-4">
								<Field type="text" name="description" className="form-control" placeholder="Mô Tả" />
								<ErrorMessage name="description" style={{ color: "red" }} component="div" />
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">
								Giá:
							</label>
							<div className="col-sm-4">
								<Field type="text" name="price" className="form-control" placeholder="Giá" />
								<ErrorMessage name="price" style={{ color: "red" }} component="div" />
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-secondary btn-sm mb-3 ms-2">
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
}
export default AddProducts;