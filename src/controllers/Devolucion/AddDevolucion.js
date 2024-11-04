import axios from "axios";
import { API_BASE_URL } from "../../containers/Api"; 

export const AddDevolucion = async (Nombre_material, Cantidad, Estado) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/devolucion/add-devolucion`, {
      Nombre_material,
      Cantidad,
      Estado
    });
    const responsestocksistema = axios.post(`${API_BASE_URL}/stock/update-stockbydevolucion`,{
        Nombre_material,
        Cantidad,
        Estado
    });

    console.log(response.data, responsestocksistema.data);
    return response.data;
  } catch (error) {
    console.error('Error al agregar la devolución:', error);
    throw error;
  }
};
