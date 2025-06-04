import { Module } from '@nestjs/common';
import {
  AppController_base,
  AppController_filter,
  AppController_ops,
  AppController_sort,
} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController_base,
    AppController_filter,
    AppController_ops,
    AppController_sort,
  ],
  providers: [AppService],
})
export class AppModule {}
