import axios from 'axios';
import qs from 'qs';
import { API_BASE_URL } from "../../containers/Api"; 

export const addTechnician = async (technicianData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/tecnico/add-tecnico`,
      qs.stringify(technicianData), // Convertir a x-www-form-urlencoded
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    window.location.reload();
    return response.data;
  } catch (error) {
    console.error('Error al agregar técnico:', error);
    throw error;
  }
};
