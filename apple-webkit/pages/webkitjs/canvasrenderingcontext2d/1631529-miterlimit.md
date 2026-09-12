> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1631529-miterlimit](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1631529-miterlimit)

# miterLimit

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

A floating-point number that controls the miter limit ratio for mitered line joins.

## Declaration

```
attribute unrestricted float miterLimit;
```

<a id="discussion"></a>

## Discussion

The `miterLimit` value must be a nonzero positive number. This property affects the appearance of line joins when the `lineJoin` property is set to `miter`.

The miter length is the distance from the point where the join occurs to the intersection of the line edges on the outside of the join. The miter limit ratio is the maximum allowed ratio of the miter length to half the line width. If the miter length would cause the miter limit ratio to be exceeded, the second triangle of the miter join is not rendered, and the join is beveled.

## See Also

### Filling and Stroking Lines and Paths

- [fill](1631011-fill.md): Fills the current path using the current fill color, gradient, or pattern.
- [fillStyle](1633959-fillstyle.md): A CSS color, a gradient, or a pattern used to fill shapes and text.
- [lineCap](1629505-linecap.md): A string specifying the type of end cap to put on lines to be drawn using `lineTo()`.
- [lineJoin](1629229-linejoin.md): A string specifying the manner in which line joins are drawn.
- [lineWidth](1630379-linewidth.md): A floating-point number that controls the width of lines and strokes, in pixels.
- [stroke](1634233-stroke.md): Draws the outline of the current path using the current stroke style and line width.
- [strokeStyle](1634470-strokestyle.md): A CSS color, a gradient, or a pattern used to stroke lines and shapes.
