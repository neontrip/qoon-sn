import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "./../../redux/profileReducer";
import Profile from "./Profile";
// import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // debugger; // eslint-disable-line
    let userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  withUrlDataContainerComponent
);

ProfileContainer.propTypes = {
  setUserProfile: PropTypes.func,
  match: PropTypes.object,
  params: PropTypes.object,
  userId: PropTypes.string,
  profile: PropTypes.object,
  getUserProfile: PropTypes.func,
  isAuth: PropTypes.bool,
};
