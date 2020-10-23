'use strict';

const collectionBook = document.querySelector('aside');
const book = document.querySelectorAll('aside div');
const bookTitle = document.querySelectorAll('[target="_blank"]');
const advertising = document.querySelector('.adv');
const collectionChapter = document.querySelectorAll('aside div ul');
const chapter = document.querySelectorAll('aside div ul li');
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

collectionBook.prepend(book[1]);
collectionBook.append(book[2]);
book[3].before(book[4]);

document.body.style.background = 'url(../image/adv.jpg) center / cover no-repeat';

bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();

collectionChapter[0].append(chapter[2]);
collectionChapter[0].append(chapter[4]);
collectionChapter[0].append(chapter[5]);
collectionChapter[0].append(chapter[7]);
collectionChapter[0].append(chapter[9]);
collectionChapter[0].append(chapter[2]);
collectionChapter[0].append(chapter[10]);

collectionChapter[5].prepend(chapter[53]);
collectionChapter[5].prepend(chapter[52]);
collectionChapter[5].prepend(chapter[48]);
collectionChapter[5].prepend(chapter[50]);
collectionChapter[5].prepend(chapter[49]);
collectionChapter[5].prepend(chapter[55]);
collectionChapter[5].prepend(chapter[47]);
collectionChapter[5].prepend(chapter[46]);

collectionChapter[2].append(newChapter);
collectionChapter[2].append(chapter[26]);



