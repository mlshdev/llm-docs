> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/linecap](https://developer.apple.com/documentation/mapkitjs/style/linecap)

# lineCap

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The style to use when drawing line endings.

## Declaration

```
get lineCap(): "square" | "butt" | "round";
set lineCap(lineCap: "square" | "butt" | "round");
```

<a id="Discussion"></a>

## Discussion

The three options for line endings are `butt` (squared-off ends), `round` (rounded ends), or `square` (ends that have a half-square extension). The default is `round`.

## See Also

### Styling lines

- [lineDash](linedash.md): An array of line and gap lengths for creating a dashed line.
- [lineDashOffset](linedashoffset.md): The number of CSS pixels to use as an offset when drawing a line’s dash pattern.
- [lineJoin](linejoin.md): The corner style to apply when joining line segments.
- [lineWidth](linewidth.md): The width of a line’s stroke, in CSS pixels.
- [lineGradient](linegradient.md): The gradient to apply along the line.
- [LineGradient](../linegradient.md): A line that displays with a gradient along the length of the line.
