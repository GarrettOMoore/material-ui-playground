import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar';
import Modal from './Modal';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
	},
	container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
	},
	formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
			<div className="sign-in">
      	<TextField
      	  id="outlined-with-placeholder"
      	  label="Username"
      	  placeholder="Wasssup"
      	  className={classes.textField}
      	  margin="normal"
      	  variant="outlined"
					color="primary"
      	/>
				<TextField
      	  id="outlined-password-input"
      	  label="Password"
      	  type="password"
					placeholder="Secrets"
      	  autoComplete="current-password"
      	  margin="normal"
      	  variant="outlined"
					color="primary"
      	/>
      	<Button id="sign-in-btn" color="primary" variant="outlined" >
      	  Sign In
      	</Button>
			</div> <br />
			<FormGroup id="dm-toggle">
      	<FormControlLabel
      	  control={<Switch /*onChange={toggleChecked}*/ />}
      	  label="Dark Mode"
      	/>
			</FormGroup>
				
        <Typography variant="h5" component="h3">
          <h1>Material UI Playground</h1>
				<Avatar />
        </Typography>
        <Typography component="p">
          <Modal />
        </Typography>
      </Paper>
    </div>
  );
}