import { API_BASE_URL } from "../../containers/Api"; 
import axios from "axios";

export const fetchTechniques = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tecnico/tecnicos`);
    return response.data; // Retorna los datos recibidos desde la API
  } catch (error) {
    console.error('Error al obtener los datos del stock tecnicos:', error);
    throw error; // Propaga el error para ser manejado en un nivel superior
  }
};

