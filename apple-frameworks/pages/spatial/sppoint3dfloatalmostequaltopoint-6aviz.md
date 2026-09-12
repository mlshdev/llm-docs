> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatalmostequaltopoint-6aviz](https://developer.apple.com/documentation/spatial/sppoint3dfloatalmostequaltopoint-6aviz)

# SPPoint3DFloatAlmostEqualToPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPPoint3DFloatAlmostEqualToPoint(SPPoint3DFloat p1, SPPoint3DFloat p2, float tolerance);
```

## Parameters

- `p1`: The first point.
- `p2`: The first point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .
