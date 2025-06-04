import { HttpException, HttpStatus } from '@nestjs/common';

export class BookExistsException extends HttpException {
  constructor(fieldname: string, fieldvalue: string) {
    super(
      `Book with ${fieldname} "${fieldvalue}" already exists`,
      HttpStatus.CONFLICT,
    );
  }
}

export class BookNotExistsException extends HttpException {
  constructor(fieldname: string, fieldvalue: number) {
    super(
      `Book with ${fieldname} "${fieldvalue}" does not exists`,
      HttpStatus.CONFLICT,
    );
  }
}

export class BookNotAvail extends HttpException {
  constructor() {
    super(`No Book Available`, HttpStatus.OK);
  }
}
