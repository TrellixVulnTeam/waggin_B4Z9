import Dog from "./Dog";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../stylesheets/layouts/DogList.scss";
import logo from "../images/logo-w.png";
import logowide from "../images/logo.png";

const DogList = (props) => {
  const handleClickPrev = () => {
    setIndex(index - 1);
  };
  const handleClickSig = () => {
    setIndex(index + 1);
  };

  const [index, setIndex] = useState(0);
  console.log(props.dogs.length, index);

  if (props.dogs.length === 0) {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img className="header__logo" src={logo} alt="logo waggin" />
          </div>
          <div className="header__others">
            <Link className="link__search" to="/">
              <i class="header__dogList--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i class="header__dogList--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <div className="container-ps">
          <img src={logowide} alt="logo" className="container-ps__logo" />
          <p className="container-ps__p1">
            Lo sentimos, actualmente no tenemos perros con las características
            seleccionadas.
          </p>
          <p className="container-ps__p2">
            Estamos trabajando para poder mostrar perros de todas las razas y
            comunidades posibles.
          </p>
          <Link className="link__search" to="/">
            <button className="container-ps__search">
              <p>
                Cambiar la búsqueda
                <i class="container-ps__search--icon fas fa-search"></i>
              </p>
            </button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img className="header__logo" src={logo} alt="logo waggin" />
          </div>
          <div className="header__others">
            <Link className="link__search" to="/">
              <i class="header__dogList--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i class="header__dogList--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <main className="dogContainer">
          <li key={props.dogs.id} className="dogList">
            <Dog dogs={props.dogs[index]} />
          </li>
        </main>
        <div className="buttons">
          <div className="prevButton">
            {index > 0 ? (
              <button className="buttons__prev" onClick={handleClickPrev}>
                <i class="fas fa-arrow-left" alt="go left"></i>
              </button>
            ) : (
              <button className="buttons__prev--empty">
                <i class="fas fa-arrow-left" alt="cant go left"></i>
              </button>
            )}
          </div>
          <div className="mainButtons">
            {index + 1 < props.dogs.length ? (
              <button className="buttons__no" onClick={handleClickSig}>
                <i class="buttons__no--cross fas fa-times"></i>
              </button>
            ) : (
              <Link className="link__search" to="/None">
                <button className="buttons__no">
                  <i class="buttons__no--cross fas fa-times"></i>
                </button>
              </Link>
            )}

            {index + 1 < props.dogs.length ? (
              <button className="buttons__fav" onClick={handleClickSig}>
                <i class="buttons__fav--bone fas fa-bone"></i>
              </button>
            ) : (
              <Link className="link__search" to="/None">
                <button className="buttons__no">
                  <i class="buttons__fav--bone fas fa-bone"></i>
                </button>
              </Link>
            )}
          </div>
        </div>
      </>
    );
  }
};
export default DogList;
