import { ErrorHandler, NgModule } from '@angular/core';

class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.error(error);
  }
}

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
})
export class MyModule {}
