import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start">
          <div className="col-sm-8">
            <div className="card-body">
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text small">{user.email}</p>
              <p className="card-text small">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;