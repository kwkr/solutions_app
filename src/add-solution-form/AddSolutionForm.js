import React, { Component } from 'react';
import './AddSolutionForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class AddSolutionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
      descriptionInputValue: '',
      tagsInputValue: ''
    };
  }
  render() {
    const steps = this.state.steps;
    return (
      <div>
        <TextField
          className="title"
          label="Title"
          margin="normal"
          variant="outlined"
          onChange={e => this.setState({ titleInputValue: e.target.value })}
        />
        <TextField
          className="description"
          label="Description"
          margin="normal"
          variant="outlined"
          onChange={e =>
            this.setState({ descriptionInputValue: e.target.value })
          }
        />
        <TextField
          className="tags"
          label="Tags"
          margin="normal"
          variant="outlined"
          onInput={e => this.setState({ tagsInputValue: e.target.value })}
        />
        <Button
          className="save-button"
          variant="contained"
          color="primary"
          onClick={this.handleSaveClick}
        >
          Send
          <Icon>send</Icon>
        </Button>
      </div>
    );
  }

  handleSaveClick = () => {
    const newSolution = {
      title: this.state.titleInputValue,
      description: this.state.descriptionInputValue,
      tags: this.state.tagsInputValue
    };
    this.props.saveSolution(newSolution);
  };
}

export default AddSolutionForm;
