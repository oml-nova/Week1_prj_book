/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class BookStructure {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsDate()
  @Type(() => Date)
  publishedDate: Date;

  @IsString()
  genre: string;

  @IsBoolean()
  isAvailable: boolean;
}
