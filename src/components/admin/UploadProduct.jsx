import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const UploadProduct = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product_id, setProductId] = useState("");
  const [image, setImage] = useState([]);
  const productUpload = async (event) => {
    event.preventDefault();

    const data = {
      category,
      title,
      price,
      description,
      image,
      product_id,
    };
    console.log(data, "data");
    try {
      const response = await axios.post(
        "http://localhost:8003/api/v1/Products",
        {
          category,
          title,
          price,
          description,
          image,
          product_id,
        }
      );
      console.log(response.data, "response");
    } catch (error) {
      console.log(error.message, "error");
    }
    // if (
    //   category == "" ||
    //   title == "" ||
    //   price == "" ||
    //   description == "" ||
    //   image == ""
    // ) {
    //   alert("Fill all the fields");
    // } else {
    //   let productData = {
    //     category,
    //     title,
    //     price,
    //     description,
    //     image,
    //   };
    //   console.log(productData);
    //   alert("productUpload");
    // }
  };
  console.log(image);
  return (
    <div>
      <h1 className="d-flex justify-content-center mb-3 fw-bold">
        Upload Product
      </h1>
      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "10px 5px",
          border: "1px solid black",
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="productCategory"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="productTitle"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={4}
                  placeholder="productDescription"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="productPrice"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Product Id"
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="Product Id"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                xs={12}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-dark px-5" onClick={productUpload}>
                  Upload
                </button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadProduct;
