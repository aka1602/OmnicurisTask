const apiPath = "https://stgapi.omnicuris.com/api/v3/courses";

export const get = (url, headers) => {
  return fetch(`${apiPath}/${url}`, {
    method: "get",
    headers
  });
};

export const post = (url, headers, body) => {
  return fetch(`${apiPath}/${url}`, {
    method: "post",
    body: JSON.stringify(body),
    headers
  });
};
