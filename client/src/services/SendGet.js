export const SendGet = async (idContainer) => {
  const isToken = localStorage.getItem('token');
  const UserId = localStorage.getItem('UserId');
  console.log(idContainer);

  const getData = await fetch(
    `http://localhost:5000/api/users/${UserId}/Container/${idContainer}`,
    {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${isToken}`,
        Accept: 'application/json',
      }),
    }
  )
    .then(async (resp) => await resp.json())
    .catch((error) => console.log(error));

  return getData;
};
