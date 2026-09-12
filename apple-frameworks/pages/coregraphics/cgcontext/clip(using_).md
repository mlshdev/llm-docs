> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/clip(using:)](https://developer.apple.com/documentation/coregraphics/cgcontext/clip(using:))

# clip(using:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the current clipping path.

## Declaration

```swift
func clip(using rule: CGPathFillRule = .winding)
```

## Parameters

- `rule`: The rule for determining which areas to treat as the interior of the path. See [CGPathFillRule](../cgpathfillrule.md).

  This parameter defaults to the [CGPathFillRule.winding](../cgpathfillrule/winding.md) rule if unspecified.

<a id="Discussion"></a>

## Discussion

A clipping path restricts the paintable area: painting operations take effect only for those areas in the interior of the clipping path. This method uses the specified rule to calculate the intersection of the current path with the current clipping path. The path resulting from the intersection is used as the new current clipping path for subsequent painting operations.

If the current path contains any non-closed subpaths, this method treats each subpath as if it had been closed with the [closePath()](closepath%28%29.md) method, then applies the specified rule to determine which areas to fill.

After determining the new clipping path, this method clears the context’s current path.

Unlike the current path, the current clipping path is part of the graphics state. Therefore, to re-enlarge the paintable area by restoring the clipping path to a prior state, you must save the graphics state before you clip and restore the graphics state after you’ve completed any clipped drawing.

## See Also

### Working with the Current Clipping Path

- [clip(to:)](clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [clip(to:)](clip%28to_%29-2eg0.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
- [clip(to:mask:)](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [boundingBoxOfClipPath](boundingboxofclippath.md): Returns the bounding box of a clipping path.
