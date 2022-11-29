const {
  addBooksHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books{reading?}',
    handler: getAllBooksHandler,
  },
  //   {
  //     method: 'GET',
  //     path: '/books{finished?}',
  //     handler: getAllBooksHandler,
  //   },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
//   {
//     method: 'GET',
//     path: '/books?reading1',
//     handler: getAllReadingBooksHandler,
//   },
];

module.exports = routes;
