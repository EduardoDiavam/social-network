'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/users', 'AuthController.index').middleware('auth')
Route.get('/users/:id', 'AuthController.show').middleware('auth')

Route.resource('posts', 'PostController')
    .apiOnly()
    .middleware('auth')

Route.post('posts/:id/images', 'ImageController.store').middleware('auth')
Route.get('images/:path', 'ImageController.show')