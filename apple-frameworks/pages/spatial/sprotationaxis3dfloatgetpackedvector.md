> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotationaxis3dfloatgetpackedvector](https://developer.apple.com/documentation/spatial/sprotationaxis3dfloatgetpackedvector)

# SPRotationAxis3DFloatGetPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_packed_float4 SPRotationAxis3DFloatGetPackedVector(SPRotationAxis3DFloat axis);
```

## Parameters

- `axis`: The source rotation axis.

<a id="return-value"></a>

## Return Value

A new packed simd vector .

<a id="discussion"></a>

## Discussion

Creates a packed simd vector from a Spatial 3D rotation axis.
