> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/padding/paddingconstructor1](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor1)

# new Padding(paddings)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a padding object and initializes its values with the provided object literal.

## Declaration

```
constructor(paddings: PaddingData);
```

## Parameters

- `padding`: An object literal with the keys defined in [PaddingData](../paddingdata.md).

<a id="Discussion"></a>

## Discussion

Use an object literal instance with the keys defined in [PaddingData](../paddingdata.md).

```javascript
    // An object literal that conforms to `PaddingData`.
    map.padding = new mapkit.Padding({top: 10, right: 10, bottom: 10, left:10});
```

## See Also

### Creating padding

- [Padding()](paddingconstructor.md): Creates a padding object with no inset margins.
- [Padding()](paddingconstructor2.md): Creates a padding object and initializes its top inset margin with the provided value.
- [Padding()](paddingconstructor3.md): Creates a padding object and initializes it with the provided top and right side values.
- [Padding()](paddingconstructor4.md): Creates a padding object and initializes it with the provided top, right, and bottom values.
- [Padding()](paddingconstructor5.md): Creates a padding object and initializes it with the provided values.
