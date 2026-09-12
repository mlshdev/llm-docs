> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatcontainspoint](https://developer.apple.com/documentation/spatial/sprect3dfloatcontainspoint)

# SPRect3DFloatContainsPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRect3DFloatContainsPoint(SPRect3DFloat rect, SPPoint3DFloat other);
```

## Parameters

- `rect`: The rectangle.
- `other`: The point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the rectangle contains the point.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the rectangle contains the point.
