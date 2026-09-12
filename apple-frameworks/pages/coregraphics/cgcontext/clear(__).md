> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/clear(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/clear(_:))

# clear(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a transparent rectangle.

## Declaration

```swift
func clear(_ rect: CGRect)
```

## Parameters

- `rect`: The rectangle, in user space coordinates.

<a id="Discussion"></a>

## Discussion

If the provided context is a window or bitmap context, Core Graphics clears the rectangle. For other context types, Core Graphics fills the rectangle in a device-dependent manner. However, you should not use this function in contexts other than window or bitmap contexts.

## See Also

### Drawing Shapes

- [fill(\_:)](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fill(\_:)](fill%28__%29-6jc4y.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [fillEllipse(in:)](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path.
- [stroke(\_:width:)](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [strokeEllipse(in:)](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](strokelinesegments%28between_%29.md): Strokes a sequence of line segments.

# CGContextClearRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a transparent rectangle.

## Declaration

```objectivec
extern void CGContextClearRect(CGContextRef c, CGRect rect);
```

## Parameters

- `c`: The graphics context in which to paint the rectangle.
- `rect`: The rectangle, in user space coordinates.

<a id="Discussion"></a>

## Discussion

If the provided context is a window or bitmap context, Core Graphics clears the rectangle. For other context types, Core Graphics fills the rectangle in a device-dependent manner. However, you should not use this function in contexts other than window or bitmap contexts.

## See Also

### Drawing Shapes

- [CGContextFillRect](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](../cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRect](stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeRectWithWidth](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](../cgcontextstrokelinesegments.md): Strokes a sequence of line segments.
