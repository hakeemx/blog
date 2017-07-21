import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions'

class PostsNew extends Component {	
	renderField(field){
		const className= `form-label ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
		return(
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.touched ? field.meta.error:''}
			</div>
		)
	};

	onSubmit(values){	
		//Use callback function Navigate to home screen after post has been created
		this.props.createPost(values, ()=>{
			this.props.history.push('/')
		})
	}

    render() {
    	const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            	<Field 
            		name="title"
            		label="Title for Post"
            		component={this.renderField}
            	/>
            	<Field
					name="categories"
					label="Categories"
					component={this.renderField}
            	/>
            	<Field
					label="Post Content"
					name="content"
					component={this.renderField}
            	/>

            	<button className="btn btn-primary" type="submit">Submit</button>
            	<Link to="/" className="btn btn-danger" type="submit">Cancel</Link>
            </form>
        );
    }
}

//Called by redux-form whenever a user submits a form
function validate(values){

	const errors = {};

	//Validate the inputs from the 'values'
	if (!values.title) {
		errors.title = "Enter a title";
	}
	if (!values.categories) {
		errors.categories = "Enter some categories";
	}
	if (!values.content) {
		errors.content = "Enter some content please";
	}
	//If errors is empty, the form is fine to submit
	//If error has any properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate:validate,
	form: 'PostsNewForm'
})(
	connect(null, {createPost})(PostsNew)
);
