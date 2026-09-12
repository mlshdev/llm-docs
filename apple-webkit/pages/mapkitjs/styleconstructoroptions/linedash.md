> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/styleconstructoroptions/linedash](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedash)

# lineDash

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

An array of line and gap lengths for creating a dashed line.

## Declaration

```
lineDash?: number[];
```

<a id="Discussion"></a>

## Discussion

This property provides an array to use as the line’s dash pattern where the numbers represent line and gap lengths in CSS pixels. For example, `[10, 5]` means draw for 10 pixels, leave a 5-pixel gap, then repeat. If there’s an odd number of elements in the array, MapKit JS copies and duplicates it. Set to an empty array (`[]`), to draw solid lines. The default line dash array is `[]`.

## See Also

### Setting line styles

- [lineCap](linecap.md): The style to use when drawing line endings.
- [lineDashOffset](linedashoffset.md): The number of CSS pixels to use as the offset when drawing a line’s dash pattern.
- [lineJoin](linejoin.md): The style to use when drawing joins between line segments.
- [lineWidth](linewidth.md): The width of a line’s stroke, in CSS pixels.
