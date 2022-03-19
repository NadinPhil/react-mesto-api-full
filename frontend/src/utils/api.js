class Api {
constructor({url, headers}){
    this._url = url;
    this._headers = headers;
}

_checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
  return Promise.reject('Сервер не доступен')
}

//получение списка карточек в виде массива
getAllCards(token){
return fetch ( `${this._url}/cards`, {
    method: "GET",
    //headers:  this._headers,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
})
.then(this._checkResponse)
}

//получение данных пользователя
getUserInfo(token){
    return fetch ( `${this._url}/users/me`, {
        method: "GET",
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    })
    .then(this._checkResponse)
    }

//лайк карточки
setCardLike(cardId, token){
    return fetch ( `${this._url}/cards/likes/${cardId}`, {
        method: "PUT",
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    })
    .then(this._checkResponse)
     
    }

//удаление лайка карточки 
removeCardLike(cardId, token){
    return fetch ( `${this._url}/cards/likes/${cardId}`, {
        method: "DELETE",
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    })
    .then(this._checkResponse)
     
    }
   
changeLikeCardStatus(isLiked, cardId, token){
    return fetch ( `${this._url}/cards/likes/${cardId}`, {
        method: `${isLiked ? "DELETE" : "PUT"}`,
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    })
    .then(this._checkResponse)
     
    }   
    
//добавление карточки
addCard(data, token){
    return fetch( `${this._url}/cards`, {
        method: "POST",
       // headers:  this._headers,
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
        body: JSON.stringify({
            name: data.name,
            link: data.link
        }),
    })
    .then(this._checkResponse)
     
    }

//редактирования профиля
editUserInfo(user, token){
    return fetch( `${this._url}/users/me`, {
        method: 'PATCH',
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        body: JSON.stringify({
            name: user.name,
            about: user.about
        })
      })
      .then(this._checkResponse)
    }

//удаление карточки 
removeCard(cardId, token){
    return fetch ( `${this._url}/cards/${cardId}`, {
        method: "DELETE",
        //headers:  this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
    })
    .then(this._checkResponse)
    }

//изменение аватара 
editUserAvatar(user, token){
    return fetch( `${this._url}/users/me/avatar`, {
        method: 'PATCH',
        //headers: this._headers,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        body: JSON.stringify({
            avatar: user.avatar
        })
      })
      .then(this._checkResponse)
    }

}

const api = new Api({
    url: 'https://mestoBD.nomoredomains.work',
    headers: {
        //authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "content-type": "application/json"
      }
});

export default api; 