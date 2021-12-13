//здесь прописываем тест
import sortArray from '../src/index';//берем из файла js,обязательно полный путь из папок

const arr = [
  { name: 'мечник', health: 10 },//Дан массив с информацией о героях
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortedArr = [
  { name: 'маг', health: 100 },//тот же массив в отсортированном виде
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test(('Сортировка по здоровью'), () => {//уровень жизни, оставшейся у каждого героя в отсортированном порядке
  expect(sortArray(arr)).toEqual(sortedArr);
});

test(('Сортировка по здоровью с toBe'), () => {
  expect(sortArray(arr)).not.toBe(sortedArr);
});