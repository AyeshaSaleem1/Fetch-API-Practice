import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
//import { List } from '@material-ui/core';
import List from './List'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.5),
    },
  },
  paper: {
    position: 'absolute',
   maxWidth: 1000,
    maxHeight: 500,
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const theme = createMuiTheme({
  palette: {
    disabled: green,
  },
  
});


export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    props.getReq();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    props.delete !==true ?(  <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Request Result</h2>
     

   <List test = {props.getReq} data = {props.data}/>

    </div>) : ( <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Request Result</h2>
      <p id="simple-modal-description">
                Record Deleted</p>
      </div>)
  );



    
    return (
      <div className={classes.root}>
        <Button size="large" variant="outlined" color="primary" onClick={handleOpen}>{props.buttonName}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    )
  }



