# Revisiting Objects

## Required Tasks

- [Write an object with field name.](https://github.com/martun-avagyan/012-Getter-Setter-PropertyDescriptor/blob/main/01getterSetter.js)

```
javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

- [The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.](https://github.com/martun-avagyan/012-Getter-Setter-PropertyDescriptor/blob/main/02getBestStudent.js)

```
javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```
