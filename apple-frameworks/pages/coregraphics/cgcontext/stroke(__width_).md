> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/stroke(_:width:)](https://developer.apple.com/documentation/coregraphics/cgcontext/stroke(_:width:))

# stroke(\_:width:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a rectangular path, using the specified line width.

## Declaration

```swift
func stroke(_ rect: CGRect, width: CGFloat)
```

## Parameters

- `rect`: A rectangle, in user space coordinates.
- `width`: A value, in user space units, that is greater than zero. This value does not affect the line width values in the current graphics state.

<a id="Discussion"></a>

## Discussion

Aside from the line width value, Core Graphics uses the current attributes of the graphics state (such as stroke color) to paint the line. The line straddles the path, with half of the total width on either side.

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [clear(\_:)](clear%28__%29.md): Paints a transparent rectangle.
- [fill(\_:)](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fill(\_:)](fill%28__%29-6jc4y.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [fillEllipse(in:)](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path.
- [strokeEllipse(in:)](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](strokelinesegments%28between_%29.md): Strokes a sequence of line segments.

# CGContextStrokeRectWithWidth (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a rectangular path, using the specified line width.

## Declaration

```objectivec
extern void CGContextStrokeRectWithWidth(CGContextRef c, CGRect rect, CGFloat width);
```

## Parameters

- `c`: A graphics context.
- `rect`: A rectangle, in user space coordinates.
- `width`: A value, in user space units, that is greater than zero. This value does not affect the line width values in the current graphics state.

<a id="Discussion"></a>

## Discussion

Aside from the line width value, Core Graphics uses the current attributes of the graphics state (such as stroke color) to paint the line. The line straddles the path, with half of the total width on either side.

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [CGContextClearRect](clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](../cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRect](stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeEllipseInRect](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](../cgcontextstrokelinesegments.md): Strokes a sequence of line segments.
