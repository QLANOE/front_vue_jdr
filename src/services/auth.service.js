import axios from 'axios';

const API_URL = 'http://localhost:8080/api/acteur/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
    return axios.post(API_URL + 'logout', {
    });
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();