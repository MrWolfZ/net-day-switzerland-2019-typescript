// 4 - strict null checks

let x1 = 2;
x1 = null;
x1 = undefined;

let x2: number | null = 2;
x2 = null;
x2 = undefined;
x2 = undefined!;
























// Practical use: optional return values
interface Book {
  id: string;
  title: string;
  author: string;
}

const books: Book[] = []
const bookByMe = books.find(b => b.author === 'Jon')
