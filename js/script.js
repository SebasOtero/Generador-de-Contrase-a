// Obtener la referencia al elemento donde se mostrará la contraseña generada
const pwd = document.getElementById("pwd_txt");

// Obtener la referencia al botón que generará la contraseña
const generate = document.getElementById("generate");

// Obtener la referencia al botón que copiará la contraseña al portapapeles
const clipboard = document.getElementById("clipboard");

// Obtener la referencia al slider que determina la longitud de la contraseña
let pwd_length = document.getElementById("slider");

// Obtener la referencia al elemento que mostrará el mensaje de confirmación de copia
let copy_text = document.getElementById("copyText");

// Cadena de caracteres posibles para generar la contraseña
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz0123456789";

// Añadir un event listener al botón de generar contraseña
generate.addEventListener("click", () => {
  let password = ""; // Inicializar la variable para almacenar la contraseña generada
  let checked = document.getElementById("checkbox").checked; // Verificar si la opción de incluir caracteres especiales está seleccionada
  let final_string = string; // Iniciar la cadena final con los caracteres básicos

  // Si se seleccionó la opción de incluir caracteres especiales, añadirlos a la cadena final
  if (checked) {
    final_string += "!.$%&/+/*";
  }

  // Generar la contraseña seleccionando caracteres aleatorios de la cadena final
  for (let i = 0; i < pwd_length.value; i++) { // (Aquí había un error, `Value` debe ser `value`)
    let pwd = final_string[Math.floor(Math.random() * final_string.length)]; // Seleccionar un carácter aleatorio
    password += pwd; // Añadir el carácter a la contraseña
  }

  // Mostrar la contraseña generada en el elemento correspondiente
  pwd.innerText = password;

  // Reiniciar la cadena final para futuras generaciones de contraseñas
  final_string = string;
});

// Añadir un event listener al botón de copiar contraseña
generate.addEventListener("click", () => {
  // Copiar el texto de la contraseña generada al portapapeles
  navigator.clipboard.writeText(pwd.innerText);

  // Mostrar un mensaje de confirmación de copia
  copy_text.textContent = "¡Contraseña copiada!";
  copy_text.style.display = "block";

  // Ocultar el mensaje de confirmación después de 2 segundos
  setTimeout(() => {
    copy_text.style.display = "none";
  }, 2000);
});
