import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

const UserContainer = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return userData.loading ? (
    <div>Loading...</div>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
