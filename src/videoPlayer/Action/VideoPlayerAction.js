export const GET_MODULE_LIST_REQUEST = "GET_MODULE_LIST_REQUEST";
export const GET_MODULE_LIST_SUCCESS = "GET_MODULE_LIST_SUCCESS";
export const GET_MODULE_LIST_FAILURE = "GET_MODULE_LIST_FAILURE";

export const GET_MODULE_DETAILS_REQUEST = "GET_MODULE_DETAILS_REQUEST";
export const GET_MODULE_DETAILS_SUCCESS = "GET_MODULE_DETAILS_SUCCESS";
export const GET_MODULE_DETAILS_FAILURE = "GET_MODULE_DETAILS_FAILURE";

export const GET_EXPERT_DETAILS_REQUEST = "GET_EXPERT_DETAILS_REQUEST";
export const GET_EXPERT_DETAILS_SUCCESS = "GET_EXPERT_DETAILS_SUCCESS";
export const GET_EXPERT_DETAILS_FAILURE = "GET_EXPERT_DETAILS_FAILURE";

export function getModuleList() {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f"
  };

  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_MODULE_LIST_REQUEST });
      const result = await api.get("?courseSlug=thyroid-in-pregnancy", header);
      const response = await result.json();

      return dispatch({
        type: GET_MODULE_LIST_SUCCESS,
        moduleList: response.courseDetails
      });
    } catch (e) {
      dispatch({ type: GET_MODULE_LIST_FAILURE, moduleListError: e });
    }
  };
}
export function getModuleDetails(moduleId) {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f"
  };

  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_MODULE_DETAILS_REQUEST });
      const result = await api.get(
        `?courseSlug=thyroid-in-pregnancy&moduleId=${moduleId}`,
        header
      );
      const response = await result.json();

      return dispatch({
        type: GET_MODULE_DETAILS_SUCCESS,
        moduleDetails: response.lessonDetails
      });
    } catch (e) {
      dispatch({ type: GET_MODULE_DETAILS_FAILURE, moduleDetailsError: e });
    }
  };
}
export function getExpertDetails() {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f"
  };

  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_EXPERT_DETAILS_REQUEST });
      const result = await api.get(`thyroid-in-pregnancy/experts`, header);
      const response = await result.json();

      return dispatch({
        type: GET_EXPERT_DETAILS_SUCCESS,
        expertDetails: response.expertDetails
      });
    } catch (e) {
      dispatch({ type: GET_EXPERT_DETAILS_FAILURE, expertDetailsError: e });
    }
  };
}
