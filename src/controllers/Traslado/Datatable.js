import axios from "axios";
import { API_BASE_URL } from "../../containers/Api"; 
// Función encargada de traer los stocks para la datatable del dashboard
export const fetchTraslado = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/traslado/get-all`);
    return response.data; // Retorna los datos recibidos desde la API
  } catch (error) {
    console.error('Error al obtener los traslados:', error);
    throw error; // Propaga el error para ser manejado en un nivel superior
  }
};
