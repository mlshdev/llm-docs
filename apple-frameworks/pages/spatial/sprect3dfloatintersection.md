> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatintersection](https://developer.apple.com/documentation/spatial/sprect3dfloatintersection)

# SPRect3DFloatIntersection

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatIntersection(SPRect3DFloat rect, SPRect3DFloat other);
```

## Parameters

- `rect`: The first rectangle.
- `other`: The second rectangle.

<a id="return-value"></a>

## Return Value

A rectangle structure that is the intersection of the two rectangles.

<a id="discussion"></a>

## Discussion

Returns the intersection of the two rectangles.
