import { API_BASE_URL } from "../../containers/Api"; 
import axios from "axios";

export const fetchTechniques = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocktechnique/get-stock`);
    return response.data; // Retorna los datos recibidos desde la API
  } catch (error) {
    console.error('Error al obtener los datos del stock tecnicos:', error);
    throw error; // Propaga el error para ser manejado en un nivel superior
  }
};
  
  export const deleteTechnique = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/stocktechnique/delete-stocktechnique/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Error al eliminar técnica');
      }
    } catch (error) {
      console.error('Error al eliminar técnica:', error);
      throw error; // Propaga el error para ser manejado en un nivel superior
    }
  };
  
  export const updateTechnique = async (id, nombreMaterial, cantidad, fechaModificacion) => {
    // Verifica que todos los parámetros tengan valores definidos
    if (!id || !nombreMaterial || !cantidad || !fechaModificacion) {
      console.error('Valores no definidos para la actualización de técnica');
      return; // O manejar el error de alguna otra forma según tu aplicación
    }
  
    try {
      const response = await fetch(`${API_BASE_URL}/stocktechnique/update-stocktechnique/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, nombreMaterial, cantidad, fechaModificacion })
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar técnica');
      }
      window.location.reload(); // Recarga la página después de actualizar
      return response;
    } catch (error) {
      console.error('Error al actualizar la técnica:', error);
      throw error; // Propaga el error para ser manejado en un nivel superior
    }
  };
  