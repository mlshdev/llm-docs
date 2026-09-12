> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/fillellipse(in:)](https://developer.apple.com/documentation/coregraphics/cgcontext/fillellipse(in:))

# fillEllipse(in:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.

## Declaration

```swift
func fillEllipse(in rect: CGRect)
```

## Parameters

- `rect`: A rectangle that defines the area for the ellipse to fit in.

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [clear(\_:)](clear%28__%29.md): Paints a transparent rectangle.
- [fill(\_:)](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fill(\_:)](fill%28__%29-6jc4y.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path.
- [stroke(\_:width:)](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [strokeEllipse(in:)](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](strokelinesegments%28between_%29.md): Strokes a sequence of line segments.

# CGContextFillEllipseInRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.

## Declaration

```objectivec
extern void CGContextFillEllipseInRect(CGContextRef c, CGRect rect);
```

## Parameters

- `c`: A graphics context.
- `rect`: A rectangle that defines the area for the ellipse to fit in.

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [CGContextClearRect](clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](../cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextStrokeRect](stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeRectWithWidth](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](../cgcontextstrokelinesegments.md): Strokes a sequence of line segments.
