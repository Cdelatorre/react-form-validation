import React,{Component} from 'react';

export default class List extends Component {
printMenu  = () => {
 return this.props.emails.map((email,index) => 
        <li key={index}>
        {email}
        </li>
    )
  }
render(){
  return(
    <h2>{this.printMenu()}</h2>
  )
}
  
};