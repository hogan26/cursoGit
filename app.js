//al escribir el comando git version me entrega la version instalada de git
//el comando git init crea el repositorio usando la carpeta del proyecto, este paso se hace solo una vez
//cuando el nombre de los archivos aparece en verde, significa que no tienen seguimiento, otra forma de 
//verificar esto es con el comando git status -s
//si quiero realizar seguimiento a un archivo de mi proyecto lo agrego con el comando git add "nombre del archivo"
//si queremos guardar una copia o una fotografia de ese archivo usamos en comando git commit -m (para añadir un
//mensaje) "mensaje"
//para agregar todos los archivos al area temporal usamos el comando git add .
//cada vez que yo haga un cambio debo mandarlo al area temporal antes de hacer un commit
//para listar todos los commit que se han realizado yo los puedo hacer con el comando git log --oneline
//los commit tiene un identificador y los comentarios que se van agregando
//para volver a un commit anterior en caso de querer revertir algun cambio, se usa el comando git reset --hard identificador_del_commit




//luego de crear el repositorio en github usamos los comandos que nos salen ahi
//el primero es para indicar que estaremos trabajando de forma remota
//git remote add origin https://github.com/hogan26/cursoGit.git
//lo cual crea un identificador del proyecto que estamos realizando con git en la url especificada, este pasos e hace solo una vez
//luego de realizar todos los commit correspondientes usaremos el comando git push -u origin master
//para poder subir todos los archivos a github

