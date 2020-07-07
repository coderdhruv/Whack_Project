import React, { Component } from 'react'
import "../App.css";
// import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Grid,
    Paper,
    ButtonBase,
  } from "@material-ui/core";

export class AddItem extends Component {
    render() {
      // const classes = useStyles();
      // const handleChange = (event) => {
      //   setValue(event.target.value);
      // };
      // const [value, setValue] = React.useState("");
        return (
            <div>
            <TextField
              id="standard-multiline-flexible"
              label="Your List Please"
              // multiline
              rowsMax={4}
              // value={value}
              // onChange={handleChange}
            />
            </div>
        )
    }
}

export default AddItem
