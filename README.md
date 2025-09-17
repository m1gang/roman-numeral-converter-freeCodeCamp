# Conversor de Números Romanos - Proyecto FreeCodeCamp

## 📖 Descripción del Proyecto
Este es un proyecto de **Conversor de Números Romanos** desarrollado como parte del currículo de **FreeCodeCamp**.  
La aplicación convierte un número arábigo (decimal) en su equivalente en números romanos, respetando el rango estándar de **1 a 3999**.

---

## ⚡ Funcionalidades
- ✅ Conversión de números decimales a números romanos.  
- ✅ Validación de entrada:
  - Muestra error si el campo está vacío o no es un número válido.  
  - Muestra error si el número es menor que 1.  
  - Muestra error si el número es mayor que 3999.  
- ✅ Interfaz visual con mensajes de advertencia y resultados destacados.  
- ✅ Respuesta inmediata sin recargar la página.

---

## 🛠️ Tecnologías Utilizadas
- **HTML5** → estructura de la aplicación.  
- **CSS3** → estilos y fondos dinámicos (gradientes para errores y resultados).  
- **JavaScript (ES6+)** → lógica de validación y conversión.  

---

## 📂 Estructura del Proyecto
Roman-Numerals-Converter/
├── index.html # Página principal
├── script.js # Lógica de la conversión
├── styles.css # Estilos CSS
└── README.md # Documentación del proyecto

yaml
Copiar código

---

## 🚀 Cómo Usar
1. Abre el archivo `index.html` en tu navegador web.  
2. Ingresa un número decimal en el campo de entrada.  
3. Haz clic en **Convertir**.  
4. El sistema mostrará:
   - El número convertido en **romano** ✅  
   - O un mensaje de advertencia ⚠️ si el número no es válido.  

---

## 🧮 Algoritmo de Conversión
El conversor usa un enfoque de **restas sucesivas**:
- Se define una tabla con equivalencias (`1000 → M`, `900 → CM`, `500 → D`, etc.).  
- Se resta al número original el valor más grande posible y se agrega el símbolo romano correspondiente.  
- El proceso se repite hasta que el número llegue a 0.  

Ejemplo:  
1994
= 1000 (M) + 900 (CM) + 90 (XC) + 4 (IV)
= "MCMXCIV"

yaml
Copiar código

---

## 🎯 Requisitos de FreeCodeCamp
Este proyecto cumple con los siguientes requisitos del desafío de FreeCodeCamp:

- ✅ Convertir correctamente números del 1 al 3999.  
- ✅ Validar entradas inválidas (vacías, menores a 1 o mayores a 3999).  
- ✅ Mostrar los resultados en pantalla sin errores.  

---

## 👨‍💻 Autor
Desarrollado por **Miguel Ángel (MiGanG)** como parte del currículo de FreeCodeCamp - *JavaScript Algorithms and Data Structures Certification*. 