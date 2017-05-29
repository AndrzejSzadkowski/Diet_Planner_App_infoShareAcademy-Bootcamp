import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import './style.css'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

const tooltip = (
  <Tooltip id="tooltip"><strong>Kliknij tutaj</strong> aby dodać produkt.</Tooltip>
);

const Meal = (props) => (

  <LinkContainer to="foods">
    <div>
      <div>
        <p className="mealNameStyle">{props.mealName}</p>
      </div>
      <OverlayTrigger placement="top" overlay={tooltip}>
        <div className="mealStyle">

          <div>
            <img src={require('./ico/add.png')} alt="" className="imgStyle"/>
            <ul>
              {
                props.products.map(
                  (product, index) => <li key={index}>{product.name}</li>
                )
              }
            </ul>
          </div>
        </div>
      </OverlayTrigger>

    </div>
  </LinkContainer>
)

export default Meal