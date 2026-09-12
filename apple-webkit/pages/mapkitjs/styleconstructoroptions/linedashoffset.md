> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/styleconstructoroptions/linedashoffset](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedashoffset)

# lineDashOffset

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The number of CSS pixels to use as the offset when drawing a line’s dash pattern.

## Declaration

```
lineDashOffset?: number;
```

<a id="Discussion"></a>

## Discussion

This has no effect if you set `lineDash` to draw solid lines by setting this property to an empty array. The default line dash offset is `0`.

## See Also

### Setting line styles

- [lineCap](linecap.md): The style to use when drawing line endings.
- [lineDash](linedash.md): An array of line and gap lengths for creating a dashed line.
- [lineJoin](linejoin.md): The style to use when drawing joins between line segments.
- [lineWidth](linewidth.md): The width of a line’s stroke, in CSS pixels.
