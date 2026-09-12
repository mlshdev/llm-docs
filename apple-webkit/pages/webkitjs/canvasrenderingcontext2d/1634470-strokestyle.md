> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1634470-strokestyle](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1634470-strokestyle)

# strokeStyle

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

A CSS color, a gradient, or a pattern used to stroke lines and shapes.

## Declaration

```
attribute custom strokeStyle;
```

<a id="discussion"></a>

## Discussion

This property may be set to any CSS color, to a pattern object, or to a linear or radial gradient object. When the `stroke()`, `strokeRect()`, or `strokeText()` operation is performed, the lines are drawn using the style specified by `strokeStyle`.

## See Also

### Filling and Stroking Lines and Paths

- [fill](1631011-fill.md): Fills the current path using the current fill color, gradient, or pattern.
- [fillStyle](1633959-fillstyle.md): A CSS color, a gradient, or a pattern used to fill shapes and text.
- [lineCap](1629505-linecap.md): A string specifying the type of end cap to put on lines to be drawn using `lineTo()`.
- [lineJoin](1629229-linejoin.md): A string specifying the manner in which line joins are drawn.
- [lineWidth](1630379-linewidth.md): A floating-point number that controls the width of lines and strokes, in pixels.
- [miterLimit](1631529-miterlimit.md): A floating-point number that controls the miter limit ratio for mitered line joins.
- [stroke](1634233-stroke.md): Draws the outline of the current path using the current stroke style and line width.

### Related Documentation

- [createRadialGradient](1631480-createradialgradient.md): Creates a radial gradient object using the cone defined by the specified starting and ending circles.
- [createLinearGradient](1630205-createlineargradient.md): Creates a linear gradient object with a specified start point and a specified end point.
- [createPattern](1628866-createpattern.md): Creates a pattern object using the specified image as a template. The pattern can be specified as repeating horizontally, vertically, both horizontally and vertically (the default), or not at all.
