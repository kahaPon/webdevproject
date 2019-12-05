import React, { Component } from 'react'
import "../Admin.css";
import swal from 'sweetalert'
import home from './home.png'
import Options from '../Options';
import axios from 'axios'

class AddRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            rout: "",
            place: "",
            routeStand: "",
            home: false,
            inserIntoCollectionRoute: []
        }
    }
    onclickHandler(e) {
        e.preventDefault();
        let list = []
        var add = {
            route: this.state.rout,
            places: this.state.place
        }
        console.log("naa ko dri!!1");
        if (this.state.city !== "" && this.state.rout !== "" && this.state.place !== "") {
            console.log("naa nsad ko diri");
            axios.post('http://localhost:3000/jeepme/createroute', add)
                .then(res => {
                    console.log("inglahos");
                    console.log(res.data)
                })
                .catch(err => {
                    return err
                })
        } else{
            console.log("not found");
        }

        this.setState({
            rout: '',
            place: ''
        });

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
                            <input autoComplete="off" placeholder="Place" type="text" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({city: e.target.value})}></input><br></br>
                            <input autoComplete="off" placeholder="Route" type="text" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({rout: e.target.value})}></input><br></br>
                            <input autoComplete="off" placeholder="Sub-Places" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({place: e.target.value})}></input><br></br>

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