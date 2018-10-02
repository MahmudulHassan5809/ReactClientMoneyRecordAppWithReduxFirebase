import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClients extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		balance: ''
	};
	onSubmit = (e) => {
       e.preventDefault();

       const newClient = this.state;

       const { firestore } = this.props;

       //If No Balance Make 0
       if(newClient.balance === ''){
       	  newClient.balance = 0;
       }

       firestore.add(
        {
       	 collection: 'clients'
       	},
       	newClient
       )
       .then(() => this.props.history.push('/'));
	};
	onChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	render() {
    const { disableBalanceOnAdd } = this.props.settings;
		return (
			<div>
				<div className="row">
                  <div className="col-md-6">
                    <Link to="/" className="btn btn-link">
                     <i className="fas fa-arrow-circle-left"></i> Back To DashBoard
                    </Link>
                  </div>
				</div>

				<div className="card">
                   <div className="card-header">Add CLient</div>
                   <div className="card-body">
                      <form onSubmit={this.onSubmit}>
                      	<div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          minLength="2"
                          required
                          onChange={this.onChange}
                          value={this.state.firstName}
                          />
                      	</div>

                      	<div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          minLength="2"
                          required
                          onChange={this.onChange}
                          value={this.state.lastName}
                          />
                      	</div>

                      	<div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                          type="email"
                          className="form-control"
                          name="email"


                          onChange={this.onChange}
                          value={this.state.email}
                          />
                      	</div>

                      	<div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input
                          type="tell"
                          className="form-control"
                          name="phone"
                          minLength="11"

                          onChange={this.onChange}
                          value={this.state.phone}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="balance">Balance</label>
                          <input
                          type="text"
                          className="form-control"
                          name="balance"
                          disabled={disableBalanceOnAdd}
                          onChange={this.onChange}
                          value={this.state.balance}
                          />
                      	</div>

                      	<input type="submit" className="btn btn-primary btn-block" value="Submit"/>
                      </form>
                   </div>
				</div>
			</div>
		);
	}
}


AddClients.propTypes = {
	firestore: PropTypes.object.isRequired,
  settings:PropTypes.object.isRequired
}

export default compose(
   firestoreConnect(),
   connect((state , props) => ({
    settings: state.settings
   }))
  )(AddClients);
