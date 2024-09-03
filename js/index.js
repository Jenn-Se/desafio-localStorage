
        document.getElementById('datosEnviados').addEventListener('submit', function(e) {
            e.preventDefault();
            const inputText = document.getElementById('inputText').value;
            
            const datos = {
                dato1: inputText,
                };
            
            localStorage.setItem('formularioDatos', JSON.stringify(datos));
            
            alert('Datos guardados. Puede verlos en data.html');
            window.location.href = 'data.html';
        });
