```
composer require beyondcode/laravel-websockets

php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="migrations"

php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="config"

composer require pusher/pusher-php-server

php artisan make:event PlaygroundEvent
```
