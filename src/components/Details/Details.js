import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const  {friendId} = useParams();
    // const  params = useParams();

const [friend, setFriend] = useState({})


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
    .then(res=> res.json())
    .then(data=> setFriend(data))
},[])

    return (
        <div>
            <h1>Details of friends: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
        </div>
    );
};

export default Details;