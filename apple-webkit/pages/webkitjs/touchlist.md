> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/touchlist](https://developer.apple.com/documentation/webkitjs/touchlist)

# TouchList

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Class  
**Availability:** Safari Desktop 10.1+ · Safari Mobile 2.0+

The `TouchList` class is used to represent a collection of [Touch](touch.md) objects. For example, the [changedTouches](touchevent/1629351-changedtouches.md) method in [TouchEvent](touchevent.md) returns a `TouchList` object.

## Declaration

```
interface TouchList
```

## Topics

### Accessing Properties

- [length](touchlist/1631756-length.md): The number of [Touch](touch.md) objects in this `TouchList` object.

### Getting Touch Objects

- [item](touchlist/1634507-item.md): Returns the [Touch](touch.md) object at the given index.
