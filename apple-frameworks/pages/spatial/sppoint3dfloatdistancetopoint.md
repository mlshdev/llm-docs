> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatdistancetopoint](https://developer.apple.com/documentation/spatial/sppoint3dfloatdistancetopoint)

# SPPoint3DFloatDistanceToPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static float SPPoint3DFloatDistanceToPoint(SPPoint3DFloat point, SPPoint3DFloat other);
```

## Parameters

- `point`: The first point.
- `other`: The second point.

<a id="return-value"></a>

## Return Value

The distance between the two points.

<a id="discussion"></a>

## Discussion

Returns the distance between the origins of two points.
