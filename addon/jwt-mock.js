const user = {
  email: 'user@email.com',
};

export default function jwtMock(emailValue = 'user@email.com', passwordValue = 'secret', data = user) {
  return (db, request) => {
    const { username, password } = JSON.parse(request.requestBody);
    const userJson = JSON.stringify(user);

    if (username === emailValue && password === passwordValue) {
      return {
        token: `jwt.${btoa(userJson)}.nope`,
        token_type: 'jwt',
      };
    }

    const body = { errors: 'Email or password is invalid' };
    return new Mirage.Response(401, {}, body);
  }
}
