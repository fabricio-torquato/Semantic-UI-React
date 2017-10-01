import React from 'react';
import { Menu, Segment,Image,Input,Button,Icon } from 'semantic-ui-react'
import Center from '../components/Center';
import logo from "../imagem/facens_logo.png";
import "./Header.css";

export default ()=>{
  return(
      <div className="Header">
      <Center>
          <Image src={logo} size='small'/>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
          />
          <Button color='facebook'>
        <Icon name='facebook' /> Facebook
      </Button>
        <Button color='twitter'>
          <Icon name='twitter' /> Twitter
        </Button>
        <Button color='google plus'>
          <Icon name='google plus' /> Google Plus
        </Button>
        <Button color='vk'>
          <Icon name='vk' /> VK
        </Button>
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
        <Button color='instagram'>
          <Icon name='instagram' /> Instagram
        </Button>
        <Button color='youtube'>
          <Icon name='youtube' /> YouTube
        </Button>
        </Center>
         <Segment inverted>
            <Menu inverted secondary>
              <Menu.Item>A Facens</Menu.Item>
              <Menu.Item>Cursos</Menu.Item>
              <Menu.Item>Formas de Entrada</Menu.Item>
              <Menu.Item>Financiamentos</Menu.Item>
              <Menu.Item>Inivações</Menu.Item>
              <Menu.Item>Serviçõs</Menu.Item>
              <Menu.Item>TV Facens</Menu.Item>
              <Menu.Item>Acesso Facens</Menu.Item>
              <Menu.Item>Notícias</Menu.Item>
              <Menu.Item>Contato</Menu.Item>
            </Menu>
        </Segment>
      </div>
  )
}
