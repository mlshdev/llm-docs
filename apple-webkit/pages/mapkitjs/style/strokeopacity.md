> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/strokeopacity](https://developer.apple.com/documentation/mapkitjs/style/strokeopacity)

# strokeOpacity

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The opacity of the stroke color.

## Declaration

```
get strokeOpacity(): number;
set strokeOpacity(strokeOpacity: number);
```

## Mentioned In

- [Adding interactivity to overlays](../adding-interactivity-to-overlays.md)

<a id="Discussion"></a>

## Discussion

The value of this property can be in the range of `0` (fully transparent) to `1` (fully opaque). The default stroke opacity is `1`.

## See Also

### Styling strokes

- [strokeColor](strokecolor.md): The stroke color of a line.
- [strokeStart](strokestart.md): The unit distance along the line where a stroke begins.
- [strokeEnd](strokeend.md): The unit distance along the line where a stroke ends.
