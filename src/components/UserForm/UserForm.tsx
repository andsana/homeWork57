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

  const [isActive, setIsActive] = useState<boolean>(false);

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const checkBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setIsActive(value);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...user,
      isActive: isActive,
      id: Math.random().toString(),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new person</h4>
      <div className="d-flex align-items-center">
        <div className="form-group mb-3 me-5">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={changeUser}
            required
          />
        </div>
        <div className="form-group form-check">
          <label htmlFor="isActive">Active</label>
          <input
            type="checkbox"
            name="send_newsletter"
            id="isActive"
            checked={isActive}
            onChange={checkBoxChange}
            className="form-check-input"
          />
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="role">Select a role:</label>
        <select
          id="role"
          className="form-control"
          value={user.role}
          onChange={changeUser}
          name="role"
          required
        >
          <option value="" disabled>Select a role</option>
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
