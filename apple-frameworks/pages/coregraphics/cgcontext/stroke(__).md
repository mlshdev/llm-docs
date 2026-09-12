> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/stroke(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/stroke(_:))

# stroke(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a rectangular path.

## Declaration

```swift
func stroke(_ rect: CGRect)
```

## Parameters

- `rect`: A rectangle, specified in user space coordinates.

<a id="Discussion"></a>

## Discussion

The line width and stroke color of the context’s graphics state are used to paint the path. The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [clear(\_:)](clear%28__%29.md): Paints a transparent rectangle.
- [fill(\_:)](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fill(\_:)](fill%28__%29-6jc4y.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [fillEllipse(in:)](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [stroke(\_:width:)](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [strokeEllipse(in:)](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](strokelinesegments%28between_%29.md): Strokes a sequence of line segments.

# CGContextStrokeRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a rectangular path.

## Declaration

```objectivec
extern void CGContextStrokeRect(CGContextRef c, CGRect rect);
```

## Parameters

- `c`: A graphics context.
- `rect`: A rectangle, specified in user space coordinates.

<a id="Discussion"></a>

## Discussion

The line width and stroke color of the context’s graphics state are used to paint the path. The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [CGContextClearRect](clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](../cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRectWithWidth](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](../cgcontextstrokelinesegments.md): Strokes a sequence of line segments.
