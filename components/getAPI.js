export const getAPI =  async function (url, params, onSuccess, onFailure) {
  
  fetch(url,params)
  .then((response) => response.json())
  .then((responseJson) => {
      onSuccess(responseJson)
  })

  .catch((error) => {
      onFailure(error)
      console.error(error);
  });
 
}