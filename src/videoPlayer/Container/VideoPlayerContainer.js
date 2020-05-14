import { connect } from "react-redux";

import {
  getModuleList,
  getModuleDetails,
  getExpertDetails
} from "../Action/VideoPlayerAction";
import VideoPlayerComponent from "../Component/VideoPlayerComponent";

const mapStateToProps = state => {
  return {
    moduleList: state.VideoPlayerReducer.getModuleList,
    moduleDetails: state.VideoPlayerReducer.getModuleDetails,
    moduleDetailsLoading: state.VideoPlayerReducer.getModuleDetailsLoading,
    expertDetails: state.VideoPlayerReducer.getExpertDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getModuleList: () => {
      return dispatch(getModuleList());
    },
    getModuleDetails: id => {
      return dispatch(getModuleDetails(id));
    },
    getExpertDetails: () => {
      return dispatch(getExpertDetails());
    }
  };
};

const VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayerComponent);

export default VideoPlayerContainer;
