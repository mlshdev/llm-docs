> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatmakewithpackedvector](https://developer.apple.com/documentation/spatial/sprotation3dfloatmakewithpackedvector)

# SPRotation3DFloatMakeWithPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMakeWithPackedVector(simd_packed_float4 source);
```

## Parameters

- `source`: The source vector that supplies the imaginary part of the quaternion from elements `0`, `1`, and `2`; and the real part from element `3`.

<a id="return-value"></a>

## Return Value

A new rotation structure.

<a id="discussion"></a>

## Discussion

Creates a Spatial rotation structure from a packed simd vector.
