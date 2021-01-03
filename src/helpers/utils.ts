/**
 * Build url with params
 */
export const buildUrlWithParams = (
  url: string,
  params: any,
  removeEncode?: boolean
) => {
  let ret = '';
  url += '?';
  for (const d in params) {
    if (params[d] || params[d] === 0) {
      if (removeEncode) {
        ret += `${d}=${params[d]}&`;
      } else {
        ret += `${encodeURIComponent(d)}=${encodeURIComponent(params[d])}&`;
      }
    }
  }

  ret = ret.replace(/&$/, '');

  return url + ret;
};
