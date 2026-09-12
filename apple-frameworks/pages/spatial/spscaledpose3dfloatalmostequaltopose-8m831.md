> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatalmostequaltopose-8m831](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatalmostequaltopose-8m831)

# SPScaledPose3DFloatAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPScaledPose3DFloatAlmostEqualToPose(SPScaledPose3DFloat p1, SPScaledPose3DFloat p2, float tolerance);
```

## Parameters

- `p1`: The first scaled pose.
- `p2`: The first scaled pose.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two scaled poses are equal within the specified absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two scaled poses are equal within the specified absolute tolerance.
