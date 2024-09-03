         window.addEventListener('load', function() {
            const datosGuardados = localStorage.getItem('formularioDatos');
            
            if (datosGuardados) {
                const datos = JSON.parse(datosGuardados);
                const dataElement = document.getElementById('data');
                
                dataElement.innerHTML = `<p><strong>dato1:</strong> ${datos.dato1}</p> `;
            } else {
                document.getElementById('data').innerHTML = '<p>No hay datos guardados.</p>';
            }
        });
    