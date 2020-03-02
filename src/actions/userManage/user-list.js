import ajax from '../services'

export const getUserList = function(param) {
  return ajax.post('uset/getlist', param)
}
