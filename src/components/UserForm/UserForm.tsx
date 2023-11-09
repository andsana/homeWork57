const UserForm = () => {
  return (
    <form>
      <h4>Add new person</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
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
      <div>
        <button type="submit">Send</button>
      </div>

      <div className="form-group">
        <label htmlFor="role">Select a role:</label>
        <select id="role" className="form-control">
          <option value="">Select a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
    </form>
  );
};

export default UserForm;