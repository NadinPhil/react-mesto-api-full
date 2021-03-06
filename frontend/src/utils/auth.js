export const BASE_URL = 'https://mestoBD.nomoredomains.work'; 

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {     
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => checkResponse(response))
  .then((res) => res) 
  
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {                        
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => checkResponse(response)) 
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response) => checkResponse(response))
  .then(data => data)
}

const checkResponse = (res) => {
  if (res.ok) {
      return res.json();
  }
return Promise.reject('Сервер не доступен')
}