# Farmacia Template

Farmacia Template es un template de aplicación de e-commerce para una farmacia, desarrollada con Vue.js y desplegada utilizando Docker y Docker Compose.

## Requisitos

- Docker
- Docker Compose

## Instalación

1. Clona este repositorio:

    ```sh
    git clone https://github.com/alexiscaspell/farmacia-template.git
    cd farmacia-template
    ```

2. Construye y levanta los contenedores utilizando Docker Compose:

    ```sh
    docker-compose up --build
    ```

    Esto construirá la aplicación y la levantará en el puerto 3000.

## Uso

Una vez que los contenedores estén levantados, la aplicación estará disponible en `http://localhost:3000`.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run serve`

Levanta la aplicación en modo desarrollo.
Abre [http://localhost:8080](http://localhost:8080) para verla en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

### `npm run lint`

Corre el linter para identificar y corregir problemas de código.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
- `public/`: Contiene los archivos públicos.
- `docker-compose.yml`: Configuración de Docker Compose.
- `Dockerfile`: Archivo de configuración de Docker para la aplicación.

## Dependencias

### Producción

- `vue`: ^2.6.14
- `vue-router`: ^3.6.5
- `vuex`: ^3.6.2
- `vuex-persistedstate`: ^4.1.0
- `bootstrap`: ^4.6.1
- `bootstrap-vue`: ^2.23.1
- `core-js`: ^3.8.3

### Desarrollo

- `@babel/core`: ^7.12.16
- `@babel/eslint-parser`: ^7.12.16
- `@vue/cli-plugin-babel`: ~5.0.0
- `@vue/cli-plugin-eslint`: ~5.0.0
- `@vue/cli-service`: ~5.0.0
- `eslint`: ^7.32.0
- `eslint-plugin-vue`: ^8.0.3
- `sass`: ^1.64.2
- `sass-loader`: ^10.4.1
- `vue-template-compiler`: ^2.6.14

## Configuración de ESLint

La configuración de ESLint está definida en el archivo `.eslintrc.js`.

```json
{
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {
    "vue/multi-word-component-names": "off"
  }
}
```
