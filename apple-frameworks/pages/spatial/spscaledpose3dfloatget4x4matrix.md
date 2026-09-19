> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spscaledpose3dfloatget4x4matrix

# SPScaledPose3DFloatGet4x4Matrix

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float4x4 SPScaledPose3DFloatGet4x4Matrix(SPScaledPose3DFloat scaledPose);
```

## Parameters

- `scaledPose`: The source scaled pose.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.
