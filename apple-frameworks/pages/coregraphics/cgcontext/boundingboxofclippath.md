> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/boundingboxofclippath](https://developer.apple.com/documentation/coregraphics/cgcontext/boundingboxofclippath)

# boundingBoxOfClipPath (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box of a clipping path.

## Declaration

```swift
var boundingBoxOfClipPath: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in the clipping path, including control points for any Bezier curves in the path.

## See Also

### Working with the Current Clipping Path

- [clip(using:)](clip%28using_%29.md): Modifies the current clipping path.
- [clip(to:)](clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [clip(to:)](clip%28to_%29-2eg0.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
- [clip(to:mask:)](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.

# CGContextGetClipBoundingBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box of a clipping path.

## Declaration

```objectivec
extern CGRect CGContextGetClipBoundingBox(CGContextRef c);
```

## Parameters

- `c`: The graphics context to modify.

<a id="return-value"></a>

## Return Value

The bounding box of the clipping path, specified in user space.

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in the clipping path, including control points for any Bezier curves in the path.

## See Also

### Working with the Current Clipping Path

- [CGContextClipToRect](clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [CGContextClipToMask](clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [CGContextClip](../cgcontextclip.md): Modifies the current clipping path, using the nonzero winding number rule.
- [CGContextEOClip](../cgcontexteoclip.md): Modifies the current clipping path, using the even-odd rule.
- [CGContextClipToRects](../cgcontextcliptorects.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
