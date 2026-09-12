> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextstrokelinesegments](https://developer.apple.com/documentation/coregraphics/cgcontextstrokelinesegments)

# CGContextStrokeLineSegments

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Strokes a sequence of line segments.

## Declaration

```objectivec
extern void CGContextStrokeLineSegments(CGContextRef c, const CGPoint *points, size_t count);
```

## Parameters

- `c`: A graphics context.
- `points`: An array of points, organized as pairs—the starting point of a line segment followed by the ending point of a line segment. For example, the first point in the array specifies the starting position of the first line, the second point specifies the ending position of the first line, the third point specifies the starting position of the second line, and so forth.
- `count`: The number of points in the `points` array.

<a id="Discussion"></a>

## Discussion

This function creates a new path, adds the individual line segments to the path, and then strokes the path. The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [CGContextClearRect](cgcontext/clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](cgcontext/fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](cgcontext/fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRect](cgcontext/stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeRectWithWidth](cgcontext/stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](cgcontext/strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
