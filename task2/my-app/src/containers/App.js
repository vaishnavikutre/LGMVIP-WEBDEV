import React, {Component}  from 'react';
import Heading from '../components/Heading';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Navbar from '../components/Navigation/Navigation';
import Loader from './loader';
import './styles.css';
class App extends Component{

    constructor(){
        super()
        //defining the states
        this.state={
            item: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }


    onButtonSubmit = () => {
        //changes the state of the button is clicked
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            //fetches the api which is provided in letsgrowmore
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({item: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }

    //function used to change the searchfield
    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){


        const list = this.state.item.filter(item=>{
            return item.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })


        if(this.state.item.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='center'>Click on user details Button
                </h1>
               
              </>
            );

        }


        else if(this.state.item.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='center'>Loading...</h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }


        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div>
                      <Heading/>
                      <Scroll>
                        <CardList item={list}/>
                      </Scroll>

                  </div>
                 </>
              );
        }

    }

}

export default App;
