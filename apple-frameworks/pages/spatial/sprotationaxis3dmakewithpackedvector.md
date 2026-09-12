> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotationaxis3dmakewithpackedvector](https://developer.apple.com/documentation/spatial/sprotationaxis3dmakewithpackedvector)

# SPRotationAxis3DMakeWithPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotationAxis3D SPRotationAxis3DMakeWithPackedVector(simd_packed_double4 source);
```

## Parameters

- `source`: The source vector.

<a id="return-value"></a>

## Return Value

A new rotation axis.

<a id="discussion"></a>

## Discussion

Creates a Spatial 3D rotation axis from a packed simd vector.
