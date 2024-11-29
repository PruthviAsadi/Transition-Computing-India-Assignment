import axios from 'axios';

export const fetchChecklist = async () => {
  try {
    const response = await axios.get('https://transition-computing-india-backend.onrender.com/checklist');
    return response.data;
  } catch (error) {
    console.error('Error fetching checklist:', error);
    throw error;
  }
};
