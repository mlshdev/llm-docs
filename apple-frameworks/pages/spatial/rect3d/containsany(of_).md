> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/containsany(of:)](https://developer.apple.com/documentation/spatial/rect3d/containsany(of:))

# containsAny(of:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Boolean value that indicates whether the rectangle contains any of the specified points.

## Declaration

```swift
func containsAny(of points: [Point3D]) -> Bool
```

## Parameters

- `points`: The array of points that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the rectangle contains any of the specified points.

## See Also

### Deprecated symbols

- [distance(to:)](distance%28to_%29.md): Deprecated. Returns the distance between the origins of two rectangle.
- [rotation(to:)](rotation%28to_%29.md): Deprecated. Returns the rotation around @p (0,0,0) from the first rectangle to the second rectangle.
- [maxX](maxx.md): Deprecated.
- [maxY](maxy.md): Deprecated.
- [maxZ](maxz.md): Deprecated.
- [midX](midx.md): Deprecated.
- [midY](midy.md): Deprecated.
- [midZ](midz.md): Deprecated.
- [minX](minx.md): Deprecated.
- [minY](miny.md): Deprecated.
- [minZ](minz.md): Deprecated.
