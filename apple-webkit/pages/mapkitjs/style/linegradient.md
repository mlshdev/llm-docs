> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/linegradient](https://developer.apple.com/documentation/mapkitjs/style/linegradient)

# lineGradient

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.45+

The gradient to apply along the line.

## Declaration

```
get lineGradient(): LineGradient | null;
set lineGradient(lineGradient: LineGradient | null);
```

<a id="Discussion"></a>

## Discussion

If a style has both [strokeColor](strokecolor.md) and [lineGradient](linegradient.md) definitions, MapKit JS displays the [lineGradient](linegradient.md). If you don’t define a color at the start or end location within the gradient, MapKit JS uses the style’s [strokeColor](strokecolor.md) as the default.

## See Also

### Styling lines

- [lineCap](linecap.md): The style to use when drawing line endings.
- [lineDash](linedash.md): An array of line and gap lengths for creating a dashed line.
- [lineDashOffset](linedashoffset.md): The number of CSS pixels to use as an offset when drawing a line’s dash pattern.
- [lineJoin](linejoin.md): The corner style to apply when joining line segments.
- [lineWidth](linewidth.md): The width of a line’s stroke, in CSS pixels.
- [LineGradient](../linegradient.md): A line that displays with a gradient along the length of the line.
