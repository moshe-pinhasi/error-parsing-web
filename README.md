# Sourcemap Lookup example from minified js files
This project shows how you can find file that had exception when your files are minified in prod (using 'sourcemap-lookup')

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `distWithSourceMaps` directory.
Note: you can run this app using `live-server`. you can readm more about this [here](https://www.npmjs.com/package/live-server)

## Lookup
Run `npm run lookup [filename]:[line]:[column]` to find the error in sourcemap

## Example:
![image info](./imgs/error.png)

```
> npm run lookup ./distWithSourceMaps/main.e904d4b5642642815c7b.js:1:239140 
```
![image info](./imgs/lookup.png)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## More libraries
https://www.npmjs.com/package/retrace
https://www.npmjs.com/package/source-map-cli

## More info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.