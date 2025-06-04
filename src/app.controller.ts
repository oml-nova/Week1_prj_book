import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BookStructure } from './books.dto';

@Controller()
export class AppController_base {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/books')
export class AppController_ops {
  constructor(private readonly appService: AppService) {}
  //create
  @Post('/create')
  Cont_create(@Body() book: BookStructure): string {
    return this.appService.ser_create(book);
  }
  //read
  @Get('/search')
  Cont_search(): BookStructure[] {
    return this.appService.ser_search();
  }
  //update
  @Put('/update')
  Cont_update(@Body() book: BookStructure): string {
    return this.appService.ser_update(book);
  }
  //delete
  @Delete('/delete/:id')
  Cont_delete(@Param('id', ParseIntPipe) id: number): string {
    return this.appService.ser_delete(id);
  }
}

@Controller('books/filter')
export class AppController_filter {
  constructor(private readonly appService: AppService) {}
  //filter by availablity
  @Get('/available')
  Cont_filter_availablity(): BookStructure[] {
    return this.appService.ser__filter_availablity();
  }
  //filter by genre
  @Get('/genre/:_genre')
  Cont_filter_genre(@Param('_genre') _genre: string): BookStructure[] {
    return this.appService.ser_filter_genre(_genre);
  }
}

@Controller('books/sort')
export class AppController_sort {
  constructor(private readonly appService: AppService) {}

  @Get('/title')
  Cont_sort_title(): BookStructure[] {
    return this.appService.ser_sort_title();
  }

  @Get('/author')
  Cont_sort_author(): BookStructure[] {
    return this.appService.ser_sort_author();
  }

  @Get('/date')
  Cont_sort_date(): BookStructure[] {
    return this.appService.ser_sort_date();
  }
}
