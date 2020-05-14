import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as api from "./utils/apiMethod";
import VideoPlayerReducer from "./videoPlayer/Reducer/VideoPlayerReducer";
export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({ VideoPlayerReducer }),
    initialState,
    applyMiddleware(thunk.withExtraArgument({ api }))
  );
}
