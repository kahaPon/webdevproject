import React, { Component } from 'react'
import "../Admin.css";
import swal from 'sweetalert'
import home from './home.png'
import Options from '../Options';

class AddRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: "",
            home: false
        }
    }
    onclickHandler(e) {
        if (this.state.values === "") {
            swal({
                icon: "error",
                title: "Fill the field first!"
            })
        } else {
            swal({
                title: "Enter the route",
                content: "input",
            }).then((value) => {
                if (value === null) {
                    swal({
                        icon: "error",
                        title: "Fill the field first!"
                    })
                } else {
                    this.setState({ values: value })
                    swal({
                        title: value,
                        text: "Enter the places that " + value + " passes separated by comma.",
                        content: "input"
                    }).then((passes) => {
                        let newval = passes.split(", ")
                        let list = []
                        newval.forEach(element => {
                            list.push(element)
                        });
                        swal({
                            title: this.state.values,
                            text: "" + list,
                            buttons: true
                        }).then((confirm) => {
                            if (confirm !== null) {
                                swal({
                                    icon: "success",
                                    title: "Route successfully added!"
                                })
                            }
                        })
                    })
                }
            })
        }

    }
    onclickTry(){
        this.setState({home: true})
    }
    render() {
        if(!this.state.home){
            return (
                <div>
                    <div>
                        <img src={home} alt="Smiley face"  onClick={(e) => this.onclickTry(e)}/>
                    </div>
                    <center>
                        <div className="AddRoute">
                            <h1>What place?</h1><br></br>
                            <input autoComplete="off" type="text" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({ values: e.target.value })}></input><br></br>
                            <button id="addButton" onClick={(e) => this.onclickHandler(e)}>Submit</button><br></br>
                        </div>
                    </center>
                </div>
            )
        }else{
            return(
                <Options></Options>
            )
        }
    }
}
export default AddRoute;