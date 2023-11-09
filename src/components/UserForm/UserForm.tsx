import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...user,
      id: Math.random().toString(),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new person</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
      </div>

      <div>
        <label htmlFor="send_newsletter">Send me newsletter</label>
        <input
          type="checkbox"
          name="send_newsletter"
          id="send_newsletter"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Select a role:</label>
        <select
          id="role"
          className="form-control"
          value={user.role}
          onChange={changeUser}
          name="role"
        >
          <option value="">Select a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default UserForm;
