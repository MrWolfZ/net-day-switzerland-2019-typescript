interface Action {
  type: string;
}

class MyAction {
  type: string;
}

function handleAction(action: Action) {
  console.log(`handling action: ${action}`);
}

handleAction(new MyAction());





















let a1 = { a: 'a1' };
let a2 = { a: 'a2' };
let a3 = { a: 'a3', b: 'b' };
let b = { b: 'b' };

a1 = a2;
a1 = a3;
a1 = b;
















// Practical use: Mocking
interface Book {
  id: string;
  title: string;
}

class BookRepository {
  getBookById(id: string): Book {
    // go to the database to fetch data
  }
}

class BookService {
  constructor(private repo: BookRepository) { }

  getBookTitleByBookId(id: string): string {
    return this.repo.getBookById(id).title;
  }
}

const bookService = new BookService();
bookService.getBookTitleByBookId('testId') === 'testTitle'
