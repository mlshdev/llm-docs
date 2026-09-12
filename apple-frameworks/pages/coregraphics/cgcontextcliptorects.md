> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextcliptorects](https://developer.apple.com/documentation/coregraphics/cgcontextcliptorects)

# CGContextClipToRects

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.

## Declaration

```objectivec
extern void CGContextClipToRects(CGContextRef c, const CGRect *rects, size_t count);
```

## Parameters

- `c`: The graphics context for which to set the clipping path.
- `rects`: An array of rectangles. The locations and dimensions of the rectangles are specified in the user space coordinate system.
- `count`: The total number of array entries in the `rects` parameter.

<a id="Discussion"></a>

## Discussion

This function sets the clipping path to the intersection of the current clipping path and the region within the specified rectangles.

After determining the new clipping path, the function resets the context’s current path to an empty path.

## See Also

### Working with the Current Clipping Path

- [CGContextClipToRect](cgcontext/clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [CGContextClipToMask](cgcontext/clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [CGContextGetClipBoundingBox](cgcontext/boundingboxofclippath.md): Returns the bounding box of a clipping path.
- [CGContextClip](cgcontextclip.md): Modifies the current clipping path, using the nonzero winding number rule.
- [CGContextEOClip](cgcontexteoclip.md): Modifies the current clipping path, using the even-odd rule.
