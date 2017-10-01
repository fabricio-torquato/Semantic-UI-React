import React from 'react';
import {Divider,Grid,Image,Button} from "semantic-ui-react";
import Carousel from '../components/Carousel';
import VerticalMenu from "../components/VerticalMenu";
import Center from '../components/Center';
import home_smartfacens from "../imagem/home_smartfacens.png";
import newsletter from "../imagem/icon-newsletter.png";
import imgItem1 from "../imagem/img1.jpg";

const options=["Graduação","Pós-Graduação","Extensão","Pré-Vestibular","TOEFL"];
const firstCourse=["Engenharia Civil","Engenharia da Computação","Engenharia Elétrica","Engenharia Mecânica","Engenharia de Alimentos"];
const secondCourse=["Engenharia Mecatrônica","Engenharia de Produção","Engenharia Quimica","Tecnologia em Jogos Digitais","Engenharia Agronômica"];

export default ()=>{
  return(
    <div>
      <Divider/>
      <Center>
        <Carousel list={[imgItem1,imgItem1,imgItem1]}/>
      </Center>

      <Divider/>

        <Center>
        <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <VerticalMenu title="Nossos Cursos" list={options}/>
          </Grid.Column>
          <Grid.Column>
            <VerticalMenu list={firstCourse}/>
          </Grid.Column>
          <Grid.Column>
            <VerticalMenu list={secondCourse}/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        </Center>

      <Divider/>

      <Center>
      <Grid columns={3} relaxed>
      <Grid.Row>
        <Grid.Column>
          <Image src={home_smartfacens} />
        </Grid.Column>
        <Grid.Column>
          <p>um campus integrado pensando no futuro</p>
          <p>Conheça o SmartCampus Facens</p>
        </Grid.Column>
        <Grid.Column>
          <Button>saiba mais sobre</Button>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </Center>

      <Image src={newsletter} />

      <Center>
        <Carousel list={[imgItem1,imgItem1,imgItem1]}/>
      </Center>

    </div>
  )
}
