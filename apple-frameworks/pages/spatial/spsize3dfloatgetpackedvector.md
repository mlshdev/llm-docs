> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatgetpackedvector](https://developer.apple.com/documentation/spatial/spsize3dfloatgetpackedvector)

# SPSize3DFloatGetPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_packed_float4 SPSize3DFloatGetPackedVector(SPSize3DFloat size);
```

## Parameters

- `size`: The source size.

<a id="return-value"></a>

## Return Value

A new packed simd vector .

<a id="discussion"></a>

## Discussion

Creates a packed simd vector from a Spatial vector.
