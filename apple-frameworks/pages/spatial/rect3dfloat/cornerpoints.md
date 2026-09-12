> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/cornerpoints](https://developer.apple.com/documentation/spatial/rect3dfloat/cornerpoints)

# cornerPoints

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the corner points of the rectangle.

## Declaration

```swift
var cornerPoints: [Point3DFloat] { get }
```

<a id="discussion"></a>

## Discussion

This function returns the vertices in a clockwise direction, starting from the origin:

```
           5-----6
           |     |
        1-----2  |
        |  |  |  |        y  z
        |  4--|--7        | /
        |     |           |/
        0-----3           +-- x
```

For example, `points[0]` equals `rect.origin`, and `points[6]` is at  `rect.origin` offset by `rect.size`.
