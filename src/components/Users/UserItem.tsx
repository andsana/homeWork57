import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="rounded-start">
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text small">Active: {user.isActive ? 'Yes' : 'No'}</p>
          <p className="card-text small">Email: {user.email}</p>
          <p className="card-text small">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;