import React from 'react';

function RegistrationPage(){
    return (
        <>
            <h2>Welcome to Registration Page</h2>
            <p>Welcome to the Home Page</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                Registration 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
             </form>
        </>
    )
}

export default RegistrationPage; 
