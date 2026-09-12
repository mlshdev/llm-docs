> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/strokestart](https://developer.apple.com/documentation/mapkitjs/style/strokestart)

# strokeStart

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.45+

The unit distance along the line where a stroke begins.

## Declaration

```
get strokeStart(): number;
set strokeStart(strokeStart: number);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

The value of this property must be a number between `0` and `1`. A value of `0`, the default, represents the beginning of the polyline, and a value of `1` represents the end. MapKit JS interprets values between `0` and `1` linearly along the length of the polyline.

The stroke is only visible for the overlay when [strokeStart](../styleconstructoroptions/strokestart.md) is less than [strokeEnd](../styleconstructoroptions/strokeend.md).

## See Also

### Styling strokes

- [strokeColor](strokecolor.md): The stroke color of a line.
- [strokeOpacity](strokeopacity.md): The opacity of the stroke color.
- [strokeEnd](strokeend.md): The unit distance along the line where a stroke ends.
