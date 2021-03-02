import { ErrorHandler, NgModule } from '@angular/core';

class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log('-----------error-----------');
    console.error(error);
    console.log('-----------stack-----------');
    console.log("*" + error.stack + "*");
    console.log('---------------------------');
  }
}

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
})
export class MyModule {}
