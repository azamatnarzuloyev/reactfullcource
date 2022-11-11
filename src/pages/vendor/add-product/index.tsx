import Button from "@component/buttons/Button";
import Card from "@component/Card";
import DropZone from "@component/DropZone";
import Grid from "@component/grid/Grid";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Select from "@component/Select";
import TextField from "@component/text-field/TextField";
import TextArea from "@component/textarea/TextArea";
import {Formik} from "formik";
import Link from "next/link";
import React, {useRef, useState} from "react";
import * as yup from "yup";

const AddProduct = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);

  };
  // const fileRef = useRef();
  const submitRef = useRef();

  const [files,setFiles]= useState([])
  
  const onFilesChange = (files) => {
   setFiles(files);
  
 };
  return (
    <div>
      <DashboardPageHeader
        title="Add Product"
        iconName="delivery-box"
        button={
          <Link href="/vendor/products">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Product List
            </Button>
          </Link>
        }
      />

      <Card p="30px">
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="name"
                    label="Name"
                    placeholder="Name"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name || ""}
                    errorText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Select
                    label="Caterogy"
                    placeholder="Select category"
                    options={[]}
                    value={values.tags || "US"}
                    onChange={(country) => {
                      setFieldValue("tags", country);
                    }}
                    errorText={touched.tags && errors.tags}
                  />
                </Grid>
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>

                    <DropZone
                        onChange={onFilesChange}
                    />
                    <button type="submit" ref={submitRef}  style={{visibility: 'hidden'}}>Submit</button>
                  </form>
                </Grid>

                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {files.map(item=> (
                    <img src={URL.createObjectURL(item)} style={{maxHeight:280, maxWidth: 280, marginBottom: '20px'}}/>
                ))}
                </div>
                <Grid item xs={12}>
                  <TextArea
                    name="description"
                    label="Description"
                    placeholder="Description"
                    rows={6}
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description || ""}
                    errorText={touched.description && errors.description}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="stock"
                    label="Stock"
                    placeholder="Stock"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.stock || ""}
                    errorText={touched.stock && errors.stock}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="tags"
                    label="Tags"
                    placeholder="Tags"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.tags || ""}
                    errorText={touched.tags && errors.tags}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="price"
                    label="Regular Price"
                    placeholder="Regular Price"
                    type="number"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price || ""}
                    errorText={touched.price && errors.price}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="sale_price"
                    label="Sale Price"
                    placeholder="Sale Price"
                    type="number"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.sale_price || ""}
                    errorText={touched.sale_price && errors.sale_price}
                  />
                </Grid>
              </Grid>
              <Button
                mt="25px"
                variant="contained"
                color="primary"
                type="submit"
              >
                Save product
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

const initialValues = {
  name: "",
  stock: "",
  price: "",
  sale_price: "",
  description: "",
  tags: "",
  category: "",
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  category: yup.string(),
  description: yup.string().required("required"),
  stock: yup.number().required("required"),
  price: yup.number().required("required"),
  sale_price: yup.number().required("required"),
  tags: yup.string().required("required"),
});


// export const CREATE_PRODUCT = gql`
//   mutation createProduct(
//     $name: String!,
//     $description: String!,
//     $img_url: String!,
//     $price: String!,
//     $rating: String!,
//     $category_id: Int!
//     ) {
//     createProduct(input: {
//     name: $name,
//     description: $description,
//     img_url: $img_url,
//     price: $price,
//     rating: $rating,
//     category_id: $category_id,
//     }) {
//       Product {
//         id: ID!
//         name: String!
//         description: String!
//         img_url: String!
//         price: String!
//         rating: String!
//         createdAt: Int
//         updatedAt: Int
//         user_id: ID!
//       }
//     }
//   }
// `;
AddProduct.layout = VendorDashboardLayout;

export default AddProduct;
