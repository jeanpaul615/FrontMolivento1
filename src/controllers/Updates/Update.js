import axios from 'axios';
import { API_BASE_URL } from "../../containers/Api"; 
import qs from 'qs';
//Funcion que actualiza el stock del sistema
export const updateStockSistema = async (formData) => {
  try {
    const requestData = qs.stringify(formData);
    const response = await axios.put(`${API_BASE_URL}/stock/update-stocksistema`, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    window.location.reload();
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating stocksistema:", error);
    throw error;
  }
};

//Funcion que actualiza el stock de tecnico
export const updateStockTechnique = async (formData) => {
  try {
    const requestData = qs.stringify(formData);
    const response = await axios.put(`${API_BASE_URL}/stocktechnique/update-stocktechnique`, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    window.location.reload();
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating stocktechnique:", error);
    throw error;
  }
};

//Funcion encargada de consumir la api que actualiza a los tecnicos registrados
export const updateTecnico = async (formData) => {
  try {
    const requestData = qs.stringify(formData);
    const response = await axios.put(`${API_BASE_URL}/tecnico/update-tecnico`, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    window.location.reload();
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating tecnico:", error);
    throw error;
  }
};