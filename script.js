const ACCESS_TOKEN =
  "ya29.a0AWY7CkkSQlhD9aCpbaxPAAnBfs7boBteRtvJxj5MjgjU-uM5lXHAsD68ewHP71kjssE7mYzyocz6u7SdVZn3rI6kaYsQOOsxDzHNkT45EVlvqmy35T1ywur1YXayPOFu_FKhgyv-0igYF5j5_tAzyRtjBej6ccqtaCgYKAU0SARESFQG1tDrpGHTJJAnrUQhOicpb2ePSuA0167";
 
const SHEET_ID = '1VsAQzhdAXUwXV3nndCStHn-F-9RtdTQCUCU1QxsJpvI';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrarGasto() {

  //Obtenemos los datos del formulario
  const medioPago = document.getElementById('medio-pago').value;
  const concepto = document.getElementById('concepto').value;
  const fecha = document.getElementById('fecha').value;
  const monto = document.getElementById('monto').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [medioPago, concepto, fecha, monto];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "hojaGastos";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaGastos:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('concepto').value = "";
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('monto').value = "";
};