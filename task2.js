async function awaitCall() {
    try {
      const response = await fetch('..'); // Replace with your actual API endpoint
      const data = await response.json();
      console.log('API data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  awaitCall();