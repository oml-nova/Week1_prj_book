import { Injectable } from '@nestjs/common';
import { BookStructure } from './books.dto';
import {
  BookExistsException,
  BookNotAvail,
  BookNotExistsException,
} from './custom exception/book.exception';

@Injectable()
export class AppService {
  public book_m: BookStructure[] = [
    Object.assign(new BookStructure(), {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: '1960-07-11T00:00:00Z',
      genre: 'Fiction',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      publishedDate: '1949-06-08T00:00:00Z',
      genre: 'Dystopian',
      isAvailable: false,
    }),
    Object.assign(new BookStructure(), {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: '1925-04-10T00:00:00Z',
      genre: 'Classic',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      publishedDate: '1951-07-16T00:00:00Z',
      genre: 'Literary Fiction',
      isAvailable: false,
    }),
    Object.assign(new BookStructure(), {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: '1813-01-28T00:00:00Z',
      genre: 'Romance',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 6,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      publishedDate: '1937-09-21T00:00:00Z',
      genre: 'Fantasy',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 7,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      publishedDate: '1851-10-18T00:00:00Z',
      genre: 'Adventure',
      isAvailable: false,
    }),
    Object.assign(new BookStructure(), {
      id: 8,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      publishedDate: '1869-01-01T00:00:00Z',
      genre: 'Historical Fiction',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 9,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      publishedDate: '1988-04-15T00:00:00Z',
      genre: 'Philosophical Fiction',
      isAvailable: true,
    }),
    Object.assign(new BookStructure(), {
      id: 10,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      publishedDate: '1932-08-31T00:00:00Z',
      genre: 'Science Fiction',
      isAvailable: false,
    }),
  ];

  getHello(): string {
    return 'Book Management Backend';
  }
  ///create a entry
  ser_create(book: BookStructure): string {
    const exists = this.book_m.find((b) => b.title === book.title);
    if (exists) {
      throw new BookExistsException('title', book.title);
    } else {
      this.book_m.push(book);
      return `Book created successfully : Book Id = ${book.id}`;
    }
  }

  //retrive all entries
  ser_search(): BookStructure[] {
    if (this.book_m.length != 0) {
      return this.book_m;
    } else {
      throw new BookNotAvail();
    }
  }
  //update the logs , refrencing the id
  ser_update(book: BookStructure): string {
    const exists = this.book_m.find(
      (BookStructure) => BookStructure.id == book.id,
    );
    if (!exists) {
      throw new BookNotExistsException('Id', book.id);
    } else {
      const place = this.book_m.findIndex(
        (BookStructure) => BookStructure.id == book.id,
      );
      this.book_m[place] = book;
      return `Book with id ${book.id} Updated successfully`;
    }
  }
  //delete entry
  ser_delete(bookid: number): string {
    const exists = this.book_m.find(
      (BookStructure) => BookStructure.id == bookid,
    );
    if (!exists) {
      throw new BookNotExistsException('Id', bookid);
    } else {
      this.book_m = this.book_m.filter(
        (BookStructure) => BookStructure.id != bookid,
      );
      return `Book with id ${bookid} Deleted successfully`;
    }
  }
  //filter by avaliblity
  ser__filter_availablity(): BookStructure[] {
    const exists = this.book_m.filter(
      (BookStructure) => BookStructure.isAvailable == true,
    );
    if (exists.length != 0) {
      return exists;
    } else {
      throw new BookNotAvail();
    }
  }
  // filter by genre // can add the type case check
  ser_filter_genre(_genre: string): BookStructure[] {
    const exists = this.book_m.filter(
      (BookStructure) => BookStructure.genre == _genre,
    );
    if (exists.length != 0) {
      return exists;
    } else {
      throw new BookNotAvail();
    }
  }

  ////// sort by date
  ser_sort_date(): BookStructure[] {
    const exists = this.book_m.toSorted((a, b) => {
      return (
        new Date(a.publishedDate).getTime() -
        new Date(b.publishedDate).getTime()
      );
    });
    if (exists.length != 0) {
      return exists;
    } else {
      throw new BookNotAvail();
    }
  }
  /////sort by title
  ser_sort_title(): BookStructure[] {
    const exists = this.book_m.toSorted((a, b) => {
      return a.title.localeCompare(b.title);
    });
    if (exists.length != 0) {
      return exists;
    } else {
      throw new BookNotAvail();
    }
  }
  ///sort by author
  ser_sort_author(): BookStructure[] {
    const exists = this.book_m.toSorted((a, b) => {
      return a.author.localeCompare(b.author);
    });
    if (exists.length != 0) {
      return exists;
    } else {
      throw new BookNotAvail();
    }
  }
}
