// src/hooks/useAdvice.js
import { useState, useEffect } from 'react';
import { fetchAdvice } from '../services/advice';

const useAdvice = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getAdvice = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await fetchAdvice();
      setAdvice(data.advice);
      setAdviceId(data.id);
    } catch (error) {
      setError('Oops! Something went wrong. Please try again later.');
      console.error('Failed to fetch advice', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { advice, adviceId, isLoading, error, getAdvice };
};

export default useAdvice;
