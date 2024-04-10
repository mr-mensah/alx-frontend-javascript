function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('API not working currently'));
  });
}

export default getFullResponseFromAPI;
