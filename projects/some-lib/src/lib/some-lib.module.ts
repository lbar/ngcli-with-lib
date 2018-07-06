import {ModuleWithProviders, NgModule} from '@angular/core';
import { SomeLibComponent } from './some-lib.component';
import {SomeLibService} from './some-lib.service';

@NgModule({
  imports: [
  ],
  declarations: [SomeLibComponent],
  exports: [SomeLibComponent]
})
export class SomeLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SomeLibModule,
      providers: [
        SomeLibService
      ]
    };
  }
}
