> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/clip(to:)-2eg0](https://developer.apple.com/documentation/coregraphics/cgcontext/clip(to:)-2eg0)

# clip(to:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.

## Declaration

```swift
func clip(to rects: [CGRect])
```

## Parameters

- `rects`: An array of rectangles, in user space coordinates.

<a id="Discussion"></a>

## Discussion

This method sets the clipping path to the intersection of the current clipping path and the region within the specified rectangles.

After determining the new clipping path, the function resets the context’s current path to an empty path.

## See Also

### Working with the Current Clipping Path

- [clip(using:)](clip%28using_%29.md): Modifies the current clipping path.
- [clip(to:)](clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [clip(to:mask:)](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [boundingBoxOfClipPath](boundingboxofclippath.md): Returns the bounding box of a clipping path.
