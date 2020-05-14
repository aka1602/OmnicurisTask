import * as VideoPlayerAction from "../Action/VideoPlayerAction";
const VideoPlayerReducer = (
  state = {
    getModuleList: "",
    getModuleListError: "",
    getModuleListLoading: false,
    getModuleDetails: "",
    getModuleDetailsError: "",
    getModuleDetailsLoading: false,
    getExpertDetails: "",
    getExpertDetailsError: "",
    getExpertDetailsLoading: false
  },
  action
) => {
  switch (action.type) {
    case VideoPlayerAction.GET_MODULE_LIST_REQUEST:
      return Object.assign({}, state, {
        getModuleListLoading: true
      });

    case VideoPlayerAction.GET_MODULE_LIST_SUCCESS:
      return Object.assign({}, state, {
        getModuleListLoading: false,
        getModuleList: action.moduleList
      });

    case VideoPlayerAction.GET_MODULE_LIST_FAILURE:
      return Object.assign({}, state, {
        getModuleListError: action.moduleListError,
        getModuleListLoading: false
      });
    case VideoPlayerAction.GET_MODULE_DETAILS_REQUEST:
      return Object.assign({}, state, {
        getModuleDetailsLoading: true
      });

    case VideoPlayerAction.GET_MODULE_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        getModuleDetailsLoading: false,
        getModuleDetails: action.moduleDetails
      });

    case VideoPlayerAction.GET_MODULE_DETAILS_FAILURE:
      return Object.assign({}, state, {
        getModuleDetailsError: action.moduleDetailsError,
        getModuleDetailsLoading: false
      });
    case VideoPlayerAction.GET_EXPERT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        getExpertDetailsLoading: true
      });

    case VideoPlayerAction.GET_EXPERT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        getExpertDetailsLoading: false,
        getExpertDetails: action.expertDetails
      });

    case VideoPlayerAction.GET_EXPERT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        getExpertDetailsError: action.expertDetailsError,
        getExpertDetailsLoading: false
      });
    default:
      return state;
  }
};

export default VideoPlayerReducer;
