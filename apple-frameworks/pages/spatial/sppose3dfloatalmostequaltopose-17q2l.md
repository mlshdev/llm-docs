> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatalmostequaltopose-17q2l](https://developer.apple.com/documentation/spatial/sppose3dfloatalmostequaltopose-17q2l)

# SPPose3DFloatAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPPose3DFloatAlmostEqualToPose(SPPose3DFloat p1, SPPose3DFloat p2, float tolerance);
```

## Parameters

- `p1`: The first pose.
- `p2`: The first pose.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two pose’s matrices are equal within the specified default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two poses’s matrices are equal within the specified absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .
