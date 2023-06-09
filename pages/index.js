<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Página de Comentarios y Encuesta</title>
</head>
<body>
    <h1>Comentarios y Encuesta</h1>
    
    <h2>Deja tu comentario:</h2>
    <form id="comment-form">
        <label for="name">Nombre:</label>
        <input type="text" id="name" required><br>
        <label for="comment">Comentario:</label>
        <textarea id="comment" required></textarea><br>
        <button type="submit">Enviar Comentario</button>
    </form>
    
    <h2>Encuesta:</h2>
    <form id="survey-form">
        <label for="age">Edad:</label>
        <input type="number" id="age" required><br>
        
        <label for="feedback">¿Qué te pareció esta página?</label>
        <select id="feedback" required>
            <option value="">Selecciona una opción</option>
            <option value="Excelente">Excelente</option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
        </select><br>
        
        <label for="improvements">Sugerencias de mejora:</label>
        <textarea id="improvements"></textarea><br>
        
        <button type="submit">Enviar Encuesta</button>
    </form>
    
    <h2>Comentarios existentes:</h2>
    <ul id="comment-list">
        <!-- Aquí se mostrarán los comentarios existentes -->
    </ul>
    
    <script>
        // Función para manejar el envío del comentario
        document.getElementById('comment-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe
            
            // Obtener los valores de los campos de entrada
            var name = document.getElementById('name').value;
            var comment = document.getElementById('comment').value;
            
            // Crear un nuevo elemento de lista para mostrar el comentario
            var listItem = document.createElement('li');
            listItem.textContent = 'Nombre: ' + name + ', Comentario: ' + comment;
            
            // Agregar el elemento a la lista de comentarios
            var commentList = document.getElementById('comment-list');
            commentList.appendChild(listItem);
            
            // Limpiar los campos de entrada
            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
        });
        
        // Función para manejar el envío de la encuesta
        document.getElementById('survey-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe
            
            // Obtener los valores de los campos de entrada
            var age = document.getElementById('age').value;
            var feedback = document.getElementById('feedback').value;
            var improvements = document.getElementById('improvements').value;
            
            // Mostrar los resultados de la encuesta
            alert('Edad: ' + age + '\nFeedback: ' + feedback + '\nSugerencias: ' + improvements);
            
            // Limpiar los campos de entrada
            document.getElementById('age').value = '';
            document.getElementById('feedback').value = '';
            document.getElementById('improvements').value = '';
        });
    </script>
</body>
</html>
