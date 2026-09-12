> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextfillrects](https://developer.apple.com/documentation/coregraphics/cgcontextfillrects)

# CGContextFillRects

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.

## Declaration

```objectivec
extern void CGContextFillRects(CGContextRef c, const CGRect *rects, size_t count);
```

## Parameters

- `c`: A graphics context .
- `rects`: An array of rectangles, in user space coordinates.
- `count`: The number rectangles in the  `rects` array.

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [CGContextClearRect](cgcontext/clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](cgcontext/fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](cgcontext/fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRect](cgcontext/stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeRectWithWidth](cgcontext/stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](cgcontext/strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](cgcontextstrokelinesegments.md): Strokes a sequence of line segments.
