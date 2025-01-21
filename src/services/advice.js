import axios from 'axios';

const url = 'https://api.adviceslip.com/advice';

export const fetchAdvice = async () => {
  try {
    const response = await axios.get(url);
    return response.data.slip;
  } catch (error) {
    console.error('Error Fetching Advice', error.message);
    throw error;
  }
};
