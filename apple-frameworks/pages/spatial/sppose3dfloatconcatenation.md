> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatconcatenation](https://developer.apple.com/documentation/spatial/sppose3dfloatconcatenation)

# SPPose3DFloatConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatConcatenation(SPPose3DFloat lhs, SPPose3DFloat rhs);
```

## Parameters

- `lhs`: The first pose to multiply.
- `rhs`: The second pose to multiply.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a new pose that’s constructed by concatenating two existing  poses.
