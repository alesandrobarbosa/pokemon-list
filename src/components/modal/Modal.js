import React from 'react';
import axios from 'axios';
import { apiDetailed } from '../../api/pokemonApi';

import './Modal.css';

class ModalDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRender: false,
            data: [],
            abilities: [],
            forms: []
        }
    }

    getPokemonDetails() {
        axios.get(apiDetailed + this.props.pokemonDetailsToModal)
            .then(res => {
                this.setState({
                    abilities: res.data.abilities,
                    forms: res.data.forms
                })
            })
    }


    componentDidUpdate(prevProps) {
        if (this.props.pokemonDetailsToModal !== prevProps.pokemonDetailsToModal) {
            this.getPokemonDetails();
        }
    }

    render() {

        return (

            <div id="openModal" className="modal">
                <div className="modal-dialog">
                    <a href="#close" title="Close" className="modal-close">X</a>
                    <h3>Details about {this.props.pokemonName}:</h3>
                    <h4>Abilities:</h4>
                    <ul>
                        {
                            this.state.abilities.map((item, idx) => {
                                return (
                                    <li key={idx}>{item.ability.name}</li>
                                )
                            })
                        }
                    </ul>
                    <h4>Forms:</h4>
                    <ul>
                        {
                            this.state.forms.map((item, idx) => {
                                return (
                                    <li key={idx}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )

    }
}


export default ModalDetails;