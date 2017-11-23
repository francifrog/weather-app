import React, { Component } from 'react';


class Searchbar extends Component {
    render(){
        return(
            <div className="container">
                <fieldset>
                <form  onSubmit= {this.props.submitCity}>
                    <input type="text" 
                        name="city" 
                        placeholder="Enter a city" 
                        value={this.props.city} 
                        onChange = {this.props.handleInput} required/>
                    <button type="submit">Search</button>
                </form>
                </fieldset>
            </div> 
        )
    }

}

export default Searchbar;