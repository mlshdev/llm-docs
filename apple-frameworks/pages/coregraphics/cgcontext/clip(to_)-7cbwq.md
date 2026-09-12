> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/clip(to:)-7cbwq](https://developer.apple.com/documentation/coregraphics/cgcontext/clip(to:)-7cbwq)

# clip(to:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.

## Declaration

```swift
func clip(to rect: CGRect)
```

## Parameters

- `rect`: The location and dimensions of the rectangle, in user space, to be used in determining the new clipping path.

<a id="Discussion"></a>

## Discussion

This function sets the specified graphics context’s clipping region to the area which intersects both the current clipping path and the specified rectangle.

After determining the new clipping path, the function resets the context’s current path to an empty path.

## See Also

### Working with the Current Clipping Path

- [clip(using:)](clip%28using_%29.md): Modifies the current clipping path.
- [clip(to:)](clip%28to_%29-2eg0.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
- [clip(to:mask:)](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [boundingBoxOfClipPath](boundingboxofclippath.md): Returns the bounding box of a clipping path.

# CGContextClipToRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.

## Declaration

```objectivec
extern void CGContextClipToRect(CGContextRef c, CGRect rect);
```

## Parameters

- `c`: The graphics context for which to set the clipping path.
- `rect`: The location and dimensions of the rectangle, in user space, to be used in determining the new clipping path.

<a id="Discussion"></a>

## Discussion

This function sets the specified graphics context’s clipping region to the area which intersects both the current clipping path and the specified rectangle.

After determining the new clipping path, the function resets the context’s current path to an empty path.

## See Also

### Related Documentation

- [CGContextClipToRects](../cgcontextcliptorects.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.

### Working with the Current Clipping Path

- [CGContextClipToMask](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [CGContextGetClipBoundingBox](boundingboxofclippath.md): Returns the bounding box of a clipping path.
- [CGContextClip](../cgcontextclip.md): Modifies the current clipping path, using the nonzero winding number rule.
- [CGContextEOClip](../cgcontexteoclip.md): Modifies the current clipping path, using the even-odd rule.
- [CGContextClipToRects](../cgcontextcliptorects.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
