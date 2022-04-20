module.exports = (baseUrl) => (request, response) => {
  const parsedUrl = new URL(request.url, baseUrl);
  const queryParameters = {};

  parsedUrl.searchParams.forEach((item, key) => {
    queryParameters[key] = item;
  })

  request.pathname = parsedUrl.pathname
  request.params = queryParameters
}