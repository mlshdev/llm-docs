> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatconcatenation-8f0ta](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatconcatenation-8f0ta)

# SPScaledPose3DFloatConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatConcatenation(SPPose3DFloat lhs, SPScaledPose3DFloat rhs);
```

## Parameters

- `lhs`: The first pose to multiply.
- `rhs`: The second scaled pose to multiply.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a new scaled pose that’s constructed by concatenating a pose and a scaled pose.
