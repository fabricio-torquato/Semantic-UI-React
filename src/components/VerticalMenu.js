import React from 'react'
import { Menu } from 'semantic-ui-react'

export default props=>{
return (
  <Menu secondary vertical>
   <Menu.Header content={props.title}/>
   {props.list.map((x,i)=><Menu.Item key={i}>{x}</Menu.Item>)}
  </Menu>
  );
}
