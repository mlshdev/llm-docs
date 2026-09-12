> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatalmostequaltorotation-9s06b](https://developer.apple.com/documentation/spatial/sprotation3dfloatalmostequaltorotation-9s06b)

# SPRotation3DFloatAlmostEqualToRotation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRotation3DFloatAlmostEqualToRotation(SPRotation3DFloat r1, SPRotation3DFloat r2);
```

## Parameters

- `r1`: The first rotation.
- `r2`: The first rotation.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two rotations are equal within the Spatial default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two rotations are equal within the Spatial default absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .
