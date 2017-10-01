import React from 'react';
import Carousel from "nuka-carousel";
import { Image } from "semantic-ui-react";
import imgItem1 from "../imagem/img1.jpg";
import "./carousel.css";

export default props => {
  return (
    <Carousel slidesToShow={3} cellSpacing={20} cellAlign="center" className="slider">
      {Object.values(props.list).map(imagem => <img src={imagem} className="images"/>)}
    </Carousel>
  );
}
