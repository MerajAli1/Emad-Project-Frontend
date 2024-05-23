import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import Layout from "../Layout";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminForm() {
  const navigate = useNavigate();

  // const[firstName,setFirstName]= React.useState()
  // const[lastName,setLastName]= React.useState()
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  // const[confirmPassword,setConfirmPassword]= React.useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("complete all the fields..");
    } else if (email == "emadalikhan123" && password == "12345678") {
      localStorage.setItem("uid", email);
      navigate("/adminPortal");
      console.log("Valid email and password");
    } else {
      alert("Invalid email and password..");
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h1 className="d-flex justify-content-center mb-3 fw-bold">Admin Form</h1>
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
                  label="AdminEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  label="AdminPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                xs={12}
                marginTop={1}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-dark px-5" onClick={handleSubmit}>
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
