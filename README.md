# Sintaxis Informix 4GL

Esta es la extensión más completa para usar la Sintaxis de Informix 4GL en Visual Studio Code.

## Caracteristicas

El objetivo de esta extension es mejorar la agilidad del desarrollador en Informix4GL.

* Resaltado de sintaxis para Informix 4GL (Syntax highlighting)
* Snippets

Ejemplo de la Sintaxis:

![Sintaxis](https://github.com/INGCRENGIFO/VsCodeInformix4GL/blob/master/images/4gl.png?raw=true)


> Resultado Final.

## Requisitos

* Visual Studio Code 1.20 o Superior

# Snippets

Esta versión para Visual Studio Code agrega snippets para 4GL

## Uso

Escriba parte de un snippet, presione `enter`, y el snippet se desplegará.

## Informix 4GL Snippets

### SQL

| Snippet                      | Proposito                    |
|------------------------------|----------------------------|
| `select`                     | Genera la estructura para un Select |
| `select into`                | Genera la estructura para un Select guardando los resultados en variables |
| `insert`                     | Genera la estructura para un Insert |
| `update`                     | Genera la estructura para un Update |
| `delete`                     | Genera la estructura para un Delete |
| `alter`                      | Genera la estructura para un Alter |

### 4GL

| Snippet                      | Purpose                    |
|------------------------------|----------------------------|
| `encabezado`                 | Inserta un encabezado general para el modulo |
| `seccion`                    | Genera la estructura para un separador con una breve descripción |
| `if`                         | Genera la estructura para un If |
| `for`                        | Genera la estructura para un For |
| `foreach`                    | Genera la estructura para un Foreach |
| `cursor`                     | Genera la Estructura para un Cursor con un Select y su iteración con un Foreach |
| `function`                   | Genera la estructura para una Función |
| `report`                     | Genera la estructura para un Reporte |
| `call`                       | Genera la estructura para un llamado a una funcion |
| `message`                    | Genera la estructura para un mensaje |
| `case`                       | Genera la estructura para un case |
| `record`                     | Genera la estructura para un record like |
| `recordvar`                  | Genera la estructura para un record con su propia estructura |
| `error`                      | Genera un mesaje error con sleep |
| `display`                    | Genera un Display con sleep |
| `displaybyname`              | Genera un Display por un item del FORM |
| `prepared`                   | Genera un prepared statment y lo descarga al record elegido, previamente debe tener definida una variable para soportar el SQL |
| `preparedForeach`            | Genera un define un prepared statment y lo usa directamente en un foreach, previamente debe tener definida una variable para soportar el SQL |


Alternativamente, presione `Ctrl` +` Space` (Windows, Linux) o `Cmd` +` Space` (OSX) para activar los snippets desde el editor.

# Instalacion

1. Instale Visual Studio Code 1.20 o superior
1. Inicie Code
1. Desde la paleta de comandos `Ctrl`-`Shift`-`P` (Windows, Linux) o `Cmd`-`Shift`-`P` (OSX)
1. Seleccione `Install Extension`
1. Elija la extension `Informix 4GL`
1. Recargue Visual Studio Code

# Reporte de errores

Cualquier error lo puedes reportar en: https://github.com/INGCRENGIFO/VsCodeInformix4GL/issues

# Contacto

Puedes enviarme un correo a ingcrengifo@gmail.com

-----------------------------------------------------------------------------------------------------------
