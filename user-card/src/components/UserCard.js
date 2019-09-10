import React from 'react';

import Followers from './Followers';

const UserCard = props => {
  return (
    <div className="user-card">
      <img src={props.avatar} alt="Alfonso Ruiz" />
      <h1>{props.name}</h1>
      <p>{props.website}</p>
      <Followers followers={props.followers} />
    </div>
  );
};

export default UserCard;
