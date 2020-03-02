import ajax from '../services'

export const login = function(param) {
  return ajax.post('login', param)
}
