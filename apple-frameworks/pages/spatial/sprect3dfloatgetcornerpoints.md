> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatgetcornerpoints](https://developer.apple.com/documentation/spatial/sprect3dfloatgetcornerpoints)

# SPRect3DFloatGetCornerPoints

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static void SPRect3DFloatGetCornerPoints(SPRect3DFloat rect, SPPoint3DFloat points[]);
```

## Parameters

- `rect`: The 3DFloat rectangle that provides the points.
- `points`: An array of eight points that the function populates with the corner points.

<a id="discussion"></a>

## Discussion

Returns the corner points of the specified rectangle.

This function returns the vertices in a clockwise direction, starting from the origin:

```
    5-----6
    |     |
    1-----2  |
    |  |  |  |         y  z
    |  4--|--7         | /
    |     |            |/
    0-----3            +-- x
```

For example, @p points\[0\] equals @p rect.origin, and @p points\[6\] is at @p rect.origin offset by @p rect.size.
