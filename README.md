# node-mappr
Converts JSON's '.' properties into complex objects.

## Installation

```
npm install node-mappr
```

## Let's code!

```js
var mappr = require('node-mappr')

var car = { id: 1, name: 'Nissan Tiida' }
car['owner.id'] = 1
car['owner.name'] = 'Felipe Mendonça Marques Silva'
console.log(car);

### Output ###
{
    id: 1,
    name: 'Nissan Tiida',
    "owner.id" : 1,
    "owner.name" : 'Felipe Mendonça Marques Silva'
}


var newCar = mappr(car)
console.log(newCar)

### Output ###
{
    id: 1,
    name: 'Nissan Tiida',
    owner: {
        id: 1,
        name: 'Felipe Mendonça Marques Silva'
    }
}

```
