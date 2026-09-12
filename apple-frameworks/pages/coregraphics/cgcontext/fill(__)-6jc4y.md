> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/fill(_:)-6jc4y](https://developer.apple.com/documentation/coregraphics/cgcontext/fill(_:)-6jc4y)

# fill(\_:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.

## Declaration

```swift
func fill(_ rects: [CGRect])
```

## Parameters

- `rects`: An array of rectangles, in user space coordinates.

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing Shapes

- [clear(\_:)](clear%28__%29.md): Paints a transparent rectangle.
- [fill(\_:)](fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fillEllipse(in:)](fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path.
- [stroke(\_:width:)](stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [strokeEllipse(in:)](strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](strokelinesegments%28between_%29.md): Strokes a sequence of line segments.
