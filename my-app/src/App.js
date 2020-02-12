import React from 'react';
import './App.css';
// import UserCard from './components/UserCard';
// import Followers from './components/Followers';
import axios from 'axios';

let myFollowers = [
  'gnhossain',
  'kphillips001',
  'taylorroebuck',
  'VodeniZeko',
  'Gremlin4544',
  'ranccm',
  'alexvision2',
  'tdefriess',
  'msinnema33',
  'MarioR81',
  'kaverndsp',
  'Steven-matos',
  'kp1129',
  'dmhabh1992',
  'seanaleid',
  'AmMiRo',
  'josiahbailey',
  'dakotacahill',
  'AlecDye',
  'kevin11jensen',
  'Keyeric',
  'anthonyj713',
  'ErikRodriguez-webdev',
  'Daniel-McNamara',
  'shellcupp',
  'KrystalGuzman',
  'GideonOgbuagu'
]

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.all([
      axios.get("https://api.github.com/users/svyatokshin"),
      axios.get("https://api.github.com/users/svyatokshin/followers")
    ])
      .then(axios.spread((userResponse, followerResponse) => {
        console.log('this is the follower Response: ', followerResponse.data)
          this.setState({
              user: userResponse.data,
              followers: followerResponse.data
            })
        }))
        .catch(err => console.log("This is the Error: ", err));
  }


  render() {
    console.log("app is rendering");
    return (
        <div className="App">
          <h1>Github Card</h1>
          <div className="usercard" key={this.state.user.id}>
              <img src={this.state.user.avatar_url} alt="Profile Avatar"/>
              <h2>{this.state.user.name}</h2>
              <h2>Github Username: {this.state.user.login}</h2>
              <p>Followers: {this.state.user.followers}</p>
              <p>Following: {this.state.user.following}</p>
              <p>{this.state.user.bio}</p>
          </div>

          <div>
              {this.state.followers.map(per => (
              <div className="usercard" key={per.id}>
                  <img src={per.avatar_url} alt={per.name}/>
                  <h2>{per.name}</h2>
                  <h3>{per.login}</h3>
              </div>
              ))}
          </div>
        </div>
      //     <UserCard user={this.state.user}/>
      //     {/* <Followers/> */}
      // </div>
    );
  }
}

export default App;
