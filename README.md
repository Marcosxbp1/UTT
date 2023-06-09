<!DOCTYPE html>
<html>
  <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css">
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    html, body, h1, h2, h3, h4, h5 {font-family: "Open Sans", sans-serif}
    </style>
  </head>
<body class="w3-theme-l5">

<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme-d2 w3-left-align w3-large">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i class="fa fa-home w3-margin-right"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i class="fa fa-globe"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i class="fa fa-user"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope"></i></a>
  <div class="w3-dropdown-hover w3-hide-small">
    <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>     
    <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">
      <a href="#" class="w3-bar-item w3-button">Una nueva solicitud de amistad</a>
      <a href="#" class="w3-bar-item w3-button">Marcos Soto ha publicado algo</a>
      <a href="#" class="w3-bar-item w3-button">Lalo reacciono a tu post</a>
    </div>
  </div>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
    <img src="https://www.w3schools.com/w3images/avatar2.png" class="w3-circle" style="height:23px;width:23px" alt="Avatar">
  </a>
 </div>
</div>

<!-- Navbar on small screens -->
<div id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Videos</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Noticias</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Notificaciones</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Mi Perfil</a>
</div>

<!-- Page Container -->
<div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">    
  <!-- The Grid -->
  <div class="w3-row">
    <!-- Left Column -->
    <div class="w3-col m3">
      <!-- Profile -->
      <div class="w3-card w3-round w3-white">
        <div class="w3-container">
         <h4 class="w3-center">Mi Perfil</h4>
         <p class="w3-center"><img src="https://media.istockphoto.com/vectors/funny-comic-cartoon-brain-character-with-magnifier-vector-id1297460438?k=20&m=1297460438&s=612x612&w=0&h=44A_W1AzDsUr-MnaPF2EM9HijwTpj_kNq4vyYTgo6Ko=" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
         <hr>
         <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>Psicóloga</p>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Universidad Tecnológica de Torreón</p>
         <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> Abril 1, 1999</p>
        </div>
      </div>
      <br>
      
      <!-- Accordion -->
      <div class="w3-card w3-round">
        <div class="w3-white">
          <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Mis Grupos</button>
          <div id="Demo1" class="w3-hide w3-container">
            <p>3C Mantenimiento Área Industrial.</p>
          </div>
          <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Mis eventos</button>
          <div id="Demo2" class="w3-hide w3-container">
            <p>Nada por ahora.</p>
          </div>
          <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> Mis Fotos</button>
          <div id="Demo3" class="w3-hide w3-container">
         <div class="w3-row-padding">
         <br>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/OIP.aElqpe88qJmr3mebiYSQjwHaEK?w=274&h=180&c=7&r=0&o=5&pid=1.7" style="width:100%" class="w3-margin-bottom">
           </div>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/R.8dc68e05f43a05c17a6861c3af254d9a?rik=SqNjY5W3zJdTNg&pid=ImgRaw&r=0" style="width:100%" class="w3-margin-bottom">
           </div>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/R.65e01449dd43e98aca32e59f6bb5efd2?rik=5eOhpHl9RRb4NQ&pid=ImgRaw&r=0" style="width:100%" class="w3-margin-bottom">
           </div>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/R.3f71ca1d73196bf399a9d2f7ba4b364f?rik=n1EGtIMRM%2fU49g&pid=ImgRaw&r=0" style="width:100%" class="w3-margin-bottom">
           </div>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/R.38bd541994274aa20299eb2f5df4927b?rik=jTpEh%2fv1N3EClg&pid=ImgRaw&r=0" style="width:100%" class="w3-margin-bottom">
           </div>
           <div class="w3-half">
             <img src="https://th.bing.com/th/id/R.65e01449dd43e98aca32e59f6bb5efd2?rik=5eOhpHl9RRb4NQ&pid=ImgRaw&r=0" style="width:100%" class="w3-margin-bottom">
           </div>
         </div>
          </div>
        </div>      
      </div>
      <br>
      
      <!-- Interests --> 
      <div class="w3-card w3-round w3-white w3-hide-small">
        <div class="w3-container">
          <p>Interests</p>
          <p>
            <span class="w3-tag w3-small w3-theme-d5">Psicología</span>
            <span class="w3-tag w3-small w3-theme-d4">UTT</span>
            <span class="w3-tag w3-small w3-theme-d3">SIAUTT</span>
            <span class="w3-tag w3-small w3-theme-d2">Primeros Auxilios Psicologicos</span>
            <span class="w3-tag w3-small w3-theme-d1">Amigos</span>
            <span class="w3-tag w3-small w3-theme">Juegos</span>
            <span class="w3-tag w3-small w3-theme-l1">TSU</span>
            <span class="w3-tag w3-small w3-theme-l2">Mantenimiento</span>
            <span class="w3-tag w3-small w3-theme-l3">Automotriz</span>
          </p>
        </div>
      </div>
      <br>
      
      <!-- Alert Box -->
      <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span onclick="this.parentElement.style.display='none'" class="w3-button w3-theme-l3 w3-display-topright">
          <i class="fa fa-remove"></i>
        </span>
        <p><strong>¡Hey!</strong></p>
        <p>Personas han visto tu perfil. ¿Quiénes son?</p>
      </div>
    
    <!-- End Left Column -->
    </div>
    
    <!-- Middle Column -->
    <div class="w3-col m7">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              <h6 class="w3-opacity"></h6>
              <p contenteditable="true" class="w3-border w3-padding">Y recuerda "Está bien no estar bien todo el tiempo"</p>
              <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Publicar</button> 
            </div>
          </div>
        </div>
      </div>

<div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/vectors/funny-comic-cartoon-brain-character-with-magnifier-vector-id1297460438?k=20&m=1297460438&s=612x612&w=0&h=44A_W1AzDsUr-MnaPF2EM9HijwTpj_kNq4vyYTgo6Ko=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">Hace un momento</span>
        <h4>Glenda Luna</h4><br>
        <hr class="w3-clear">
        <p>Asiste al grupo de acompañamiento de personas en duelo "Hoja de lirio" a cargo de la Lic.Glenda Jazmin Luna G. Pregunta por el preregristo a partir del mes de Junio. ¡No pierdas esta oportunidad!</p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 200px; height: 200px; overflow: hidden;">
  <img src="https://i.postimg.cc/prDZRyh0/Coyote.png" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>

<div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh8ZUMzPzufGPXGmV4qhKlv32n442hsOVGQ&usqp=CAU" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">Reciente</span>
        <h4>Marcos Soto</h4><br>
        <hr class="w3-clear">
        </p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 200px; height: 200px; overflow: hidden;">
  <img src="https://i.postimg.cc/2ypwsn6b/1post.png" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
            <div class="w3-half" style="width: 200px; height: 200px; overflow: hidden;">
  <img src="https://i.postimg.cc/T2mQrN7r/2post.png" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>

      <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/vectors/funny-comic-cartoon-brain-character-with-magnifier-vector-id1297460438?k=20&m=1297460438&s=612x612&w=0&h=44A_W1AzDsUr-MnaPF2EM9HijwTpj_kNq4vyYTgo6Ko=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">1 min</span>
        <h4>Glenda Luna</h4><br>
        <hr class="w3-clear">
        <p>Los primeros auxilios psicológicos son una serie de técnicas y estrategias que se utilizan para brindar apoyo emocional y psicológico inmediato a las personas que han experimentado un evento traumático, una crisis o una situación de emergencia. Estas técnicas están diseñadas para aliviar el malestar emocional, promover la estabilidad psicológica y ayudar a las personas a recuperarse de experiencias difíciles.</p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 200px; height: 200px; overflow: hidden;">
  <img src="https://saludconlupa.com/media/images/Columna_-_Esta_mal_no_sentirse_b.width-1600.format-webp.webp" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
            <div class="w3-half" style="width: 200px; height: 200px; overflow: hidden;">
  <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/317617708_222540193442051_5815578469039502831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6hPOdDJBeVEAX-z-Raj&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBXkL85qI-I58nhfk4akGaC8SdeJSO9W-wSwOtYvmO9aA&oe=646A06F8" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>
      
       <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/id/1294477039/es/vector/met%C3%A1fora-trastorno-bipolar-mente-mental-doble-cara-personalidad-dividida-trastorno-del.jpg?s=612x612&w=0&k=20&c=yQ1CycbwZ24vpYXeFkdfrtFVMwCxB3nUf5-qgv2n0JA=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">1 min</span>
        <h4>Ricardo</h4><br>
        <hr class="w3-clear">
        <p>Es importante destacar que los primeros auxilios psicológicos no reemplazan la terapia psicológica profesional, pero pueden ser un primer paso importante para ayudar a las personas a enfrentar y recuperarse de situaciones traumáticas o crisis emocionales.</p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 300px; height: 300px; overflow: hidden;">
  <img src="https://ives.edu.mx/wp-content/uploads/2021/10/psicologia_6oct.jpg" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>

<div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/vectors/funny-comic-cartoon-brain-character-with-magnifier-vector-id1297460438?k=20&m=1297460438&s=612x612&w=0&h=44A_W1AzDsUr-MnaPF2EM9HijwTpj_kNq4vyYTgo6Ko=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">10 min</span>
        <h4>Glenda Luna</h4><br>
        <hr class="w3-clear">
        <p>Algunos números de teléfono de ayuda psicológica en México:</p>
<ul>
  <li>Línea de Seguridad telefónica: 55 5533-5533. Se brindan primeros auxilios psicológicos las 24 horas todos los días.</li>
  <li>Número telefónico: 55 3601 7599 y 800 288 66 88. Es un servicio de atención psicológica que ofrece la SEP.</li>
</ul>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 300px; height: 300px; overflow: hidden;">
  <img src="https://ayuda-psicologica-en-linea.com/wp-content/uploads/2022/07/psicologos-24-horas-gratis.png" alt="Northern Lights" style="width: 100%; height: auto;" class="w3-margin-bottom">
</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>

      <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/vectors/funny-comic-cartoon-brain-character-with-magnifier-vector-id1297460438?k=20&m=1297460438&s=612x612&w=0&h=44A_W1AzDsUr-MnaPF2EM9HijwTpj_kNq4vyYTgo6Ko=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">12 min</span>
        <h4>Glenda Luna</h4><br>
        <hr class="w3-clear">
        <p>¿Qué es el duelo?</p>
        <div class="w3-container w3-card w3-white w3-round w3-margin" style="width: 300px; height: 300px; overflow: hidden;">
  <img src="https://media.istockphoto.com/id/1388100332/es/vector/trabajo-en-equipo-del-m%C3%A9dico-ensamblando-un-rompecabezas-de-cerebro-con-coraz%C3%B3n-concepto.jpg?s=612x612&w=0&k=20&c=hbQ4OctaX_svNbt7o282aip0UGMoleWZpH4RzJO---A=" alt="Imagen" style="width: 100%; height: 100%; object-fit: cover;" class="w3-margin-bottom">
</div>
        <p>El duelo es una respuesta natural y emocional que experimentamos cuando enfrentamos la pérdida de alguien o algo significativo en nuestras vidas. Por lo general, se asocia con la muerte de un ser querido, pero también puede ocurrir en situaciones de separación, divorcio, pérdida de empleo, cambios de vida significativos o la pérdida de una mascota.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>      
 
	<div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://media.istockphoto.com/id/1294477039/es/vector/met%C3%A1fora-trastorno-bipolar-mente-mental-doble-cara-personalidad-dividida-trastorno-del.jpg?s=612x612&w=0&k=20&c=yQ1CycbwZ24vpYXeFkdfrtFVMwCxB3nUf5-qgv2n0JA=" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">19 min</span>
        <h4>Ricardo</h4><br>
        <hr class="w3-clear">
        <p>El duelo puede manifestarse de diferentes maneras y varía en intensidad y duración para cada individuo. Algunos de los síntomas comunes del duelo incluyen tristeza profunda, shock, negación, culpa, ira, ansiedad, dificultad para concentrarse, problemas de sueño, pérdida de apetito y cambios de humor.</p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half" style="width: 300px; height: 300px; overflow: hidden;">
  	<img src="https://vidauniversitaria.uanl.mx/wp-content/uploads/2021/01/duelo-covid-19-1.jpg" style="width: 100%; height: auto;" class="w3-margin-bottom">
	</div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comentar</button> 
      </div>
    <!-- End Middle Column -->
    </div>
    
    <!-- Right Column -->
    <div class="w3-col m2">
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Eventos Proximos:</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBJdLUfR1AKIi3MQ3obwWf-6ZTj6lThvrlg&usqp=CAU" alt="Forest" style="width:100%;">
          <p><strong>Cita</strong></p>
          <p>Viernes 15:30</p>
          <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br>
      
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Solicitud de amistad</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh8ZUMzPzufGPXGmV4qhKlv32n442hsOVGQ&usqp=CAU" alt="Avatar" style="width:50%"><br>
          <span>Marcos Soto</span>
          <div class="w3-row w3-opacity">
            <div class="w3-half">
              <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
            </div>
            <div class="w3-half">
              <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
            </div>
          </div>
        </div>
      </div>
      <br>
      
      <div class="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
      <br>
      
      <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i class="fa fa-bug w3-xxlarge"></i></p>
      </div>
      
    <!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  
<!-- End Page Container -->
</div>
<br>

<!-- Footer -->
<footer class="w3-container w3-theme-d3 w3-padding-16">
  <h5>Monitores de la salud mental, Universidad Tecnológica de Torreón 2023</h5>
</Monitores-de-la-salud-mental>
 
<script>
// Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>

</body>
</html> 