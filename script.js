const ACCESS_TOKEN =
  "ya29.a0AWY7CklC7PiUhSVCbKTq-B6VxG3IZu8g8cMGpinnMC17oVggB5IRj_TVHQ7WDrlb4ZzzfvuWSoFgnQy5tHF3sNjH2YRc-5hLh_kt6Ench1VhPaFdGnDTJygMaADbs8WfOzUR8oYefIS-b1DUliQa95IrQz_l-hkaCgYKASgSARESFQG1tDrpo2ZAPB2MUGy2uN5UaP9YkA0166";
 const SHEET_ID = '1VsAQzhdAXUwXV3nndCStHn-F-9RtdTQCUCU1QxsJpvI';

document.getElementById('fecha').valueAsDate = new Date();

function onRegistrarApli() {
  const parcela = document.getElementById('parcela').value;
  const concepto = document.getElementById('concepto').value;
  const fecha = document.getElementById('fecha').value;
  const cantidad = document.getElementById('cantidad').value;
  
  let data = {};
  let values = [];
  let fila = [parcela, concepto, fecha, cantidad];

  values.push(fila);
  
  data.range = "hojaAplicaciones";
  data.majorDimension = "ROWS";
  data.values = values;

  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaAplicaciones:append?valueInputOption=USER_ENTERED`,
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

  document.getElementById('concepto').value = "";
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('cantidad').value = "";
};
