> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/styleconstructoroptions/linecap](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linecap)

# lineCap

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The style to use when drawing line endings.

## Declaration

```
lineCap?: "butt" | "round" | "square";
```

<a id="Discussion"></a>

## Discussion

The three options for line endings are `butt` (squared-off ends), `round` (rounded ends), or `square` (ends that have a half-square extension). The default line cap is `round`.

## See Also

### Setting line styles

- [lineDash](linedash.md): An array of line and gap lengths for creating a dashed line.
- [lineDashOffset](linedashoffset.md): The number of CSS pixels to use as the offset when drawing a line’s dash pattern.
- [lineJoin](linejoin.md): The style to use when drawing joins between line segments.
- [lineWidth](linewidth.md): The width of a line’s stroke, in CSS pixels.
