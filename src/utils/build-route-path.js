// /user/:id

export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routeParametersRegex,
    "(?<$1>[a-z0-9-_]+)"
  );

  const pathReges = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathReges;
}
