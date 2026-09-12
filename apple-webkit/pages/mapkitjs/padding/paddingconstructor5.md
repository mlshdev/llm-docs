> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/padding/paddingconstructor5](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor5)

# new Padding(top, right, bottom, left)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a padding object and initializes it with the provided values.

## Declaration

```
constructor(top: number, right: number, bottom: number, left: number);
```

## Parameters

- `top`: The top inset margin.
- `right`: The right inset margin.
- `bottom`: The bottom inset margin.
- `left`: The left inset margin.

<a id="Discussion"></a>

## Discussion

Create [Padding](../padding.md) by passing in four numbers that represent the inset values for the top, right, bottom, and left edges.

```javascript
map.padding = new mapkit.Padding(
    10, // top inset
    10, // right inset
    10, // bottom inset
    10 // left inset
);
```

## See Also

### Creating padding

- [Padding()](paddingconstructor.md): Creates a padding object with no inset margins.
- [Padding()](paddingconstructor1.md): Creates a padding object and initializes its values with the provided object literal.
- [Padding()](paddingconstructor2.md): Creates a padding object and initializes its top inset margin with the provided value.
- [Padding()](paddingconstructor3.md): Creates a padding object and initializes it with the provided top and right side values.
- [Padding()](paddingconstructor4.md): Creates a padding object and initializes it with the provided top, right, and bottom values.
