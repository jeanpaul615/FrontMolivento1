import { API_BASE_URL } from "../../containers/Api"; 
import axios from "axios";

export const fetchFactura = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/facturas/get-factura`);
    return response.data; // Retorna los datos recibidos desde la API
  } catch (error) {
    console.error('Error al obtener los datos del stock tecnicos:', error);
    throw error; // Propaga el error para ser manejado en un nivel superior
  }
};

export const AddFactura = async (Codigo_factura,Proveedor_factura,Observacion_factura,Valor_factura, Fecha_factura) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/facturas/add-factura`, {
    Codigo_factura,
    Proveedor_factura,
    Observacion_factura,
     Valor_factura,
      Fecha_factura
    });

    console.log(response.data);
    window.location.reload();
    return response.data;
  } catch (error) {
    console.error('Error al agregar la devolución:', error);
    throw error;
  }
};
