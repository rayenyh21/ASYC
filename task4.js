const fetchFirstData = async () => {
    await delay(1000); 
    return { data: 'First response' };
  };
  
  const fetchSecondData = async () => {
    await delay(1500); 
    return { data: 'Second response' };
  };
  
  async function concurrentRequests() {
    try {
      const [firstResponse, secondResponse] = await Promise.all([fetchFirstData(), fetchSecondData()]);
      console.log('Combined results:', firstResponse.data, secondResponse.data);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }

  concurrentRequests();