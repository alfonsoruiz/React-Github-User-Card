import React from 'react';

import Follower from './Follower';

const Followers = props => {
  return (
    <div className="followers">
      <h3 className="followers">Friends</h3>
      {props.followers.map(follower => (
        <Follower
          key={follower.id}
          userName={follower.login}
          userUrl={follower.html_url}
        />
      ))}
    </div>
  );
};

export default Followers;
