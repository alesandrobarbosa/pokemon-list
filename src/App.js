import React, { Component } from 'react';

import './App.css';

import { api } from './api/pokemonApi';

import LazyLoad from 'react-lazyload';
import axios from 'axios';

import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import ModalDetails from './components/modal/Modal';
import PageLoader from './components/pageLoader/PageLoader';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pokemonData: '',
      baseImage: 'https://pokeres.bastionbot.org/images/pokemon/',
      idImage: '',
      modalStatus: false,
      pokemonDetailsToModal: '',
      showModal: '',
      pokemonName: ''
    }
  }

  componentDidMount() {
    this.getPokemonApi();
  }

  getPokemonApi() {
    axios.get(api)
      .then(res => {
        this.setState({ data: res.data.results });
      })
  }


  render() {

    if (this.state.data.length === 0) {
      return <PageLoader />
    }

    return (
      <>
        <div className="ui column row header-content">
          <Header />
        </div>
        <div className="ui stackable five column grid very padded main-content">
          {
            this.state.data.map((item, idx) => {

              //Retirando id da url da requisicao sem precisar fazer outra e perder desempenho
              const idImage = item.url.substring(34).replace('/', '');

              return (
                <LazyLoad
                  height={200}
                  key={idx}
                  placeholder={<Spinner />}
                  debounce={false}
                  throttle={200} 
                >
                  <div className="column">
                    <div className="ui fluid card container-hover">
                      <a role="button" href="#openModal" className="ui medium image" onClick={() => this.setState({ pokemonDetailsToModal: idImage, modalStatus: true, pokemonName: item.name })}>
                        <img src={`${this.state.baseImage}${idImage}.png`} key={idImage} alt={idImage} />
                        <div className="middle">
                          <span className="text-hover">See more</span>
                        </div>
                      </a>
                      <div className="content">
                        <div className="header-name" key={idx}>
                          <h1>{item.name}</h1>
                        </div>
                        <div className="description">
                          Click and check more details =)
                        </div>
                      </div>
                    </div>
                  </div>
                </LazyLoad>
              );
            })
          }
        </div>

        <ModalDetails
          pokemonDetailsToModal={this.state.pokemonDetailsToModal}
          modalStatus={this.state.modalStatus}
          pokemonName={this.state.pokemonName}
        />
      </>
    )

  }
}


export default App;
