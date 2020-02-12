// import React from 'react';
// import axios from 'axios';
// import UserCard from './UserCard';

// class Followers extends React.Component{
//     state = {
//         followers: []
//     };

//     componentDidMount() {
//         axios
//         .get('https://api.github.com/users/svyatokshin/followers')
//         .then(res => {
//             this.setState({
//                 followers: res.data
//             });
//             console.log('Followers then response', res)
//         })
//         .catch(err => console.log(err));
//     }
// }