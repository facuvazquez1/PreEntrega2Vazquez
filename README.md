# Cotizador de Seguros en JavaScript

Este proyecto es un cotizador de seguros de autos que permite calcular el precio final de diferentes tipos de seguros según la edad del usuario y la cantidad asegurada. El usuario ingresa los datos a través de `prompt` y recibe el resultado mediante `alert`.

## Estructura del Proyecto

### Objetos
- **seguroBasico**: Objeto que representa el seguro básico. Contiene el nombre, el precio base y un método para calcular el precio final.
- **seguroCompleto**: Objeto que representa el seguro completo. Similar al seguro básico, pero con diferentes precios y recargos.

### Array
- **seguros**: Un array que almacena ambos seguros (`seguroBasico` y `seguroCompleto`) para seleccionarlos fácilmente.

### Funciones
- **cotizarSeguro()**: Función principal que:
  1. Solicita al usuario que seleccione un tipo de seguro, ingrese su edad y la cantidad asegurada.
  2. Valida los datos ingresados.
  3. Calcula el precio final usando el método del seguro seleccionado.
  4. Muestra el precio final al usuario mediante un `alert`.

## Uso

1. Ejecuta el script `cotizarSeguro()` en un navegador.
2. Ingresa los valores solicitados en los `prompt`.
3. Recibe el resultado del cálculo en una alerta (`alert`).

## Ejemplo

Si el usuario selecciona el seguro básico, tiene 23 años y asegura una cantidad de $100,000, el sistema calculará el precio final y lo mostrará en un `alert`.

```javascript
// Llamada de ejemplo
cotizarSeguro();
