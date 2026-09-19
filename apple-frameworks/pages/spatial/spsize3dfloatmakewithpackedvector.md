> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dfloatmakewithpackedvector

# SPSize3DFloatMakeWithPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatMakeWithPackedVector(simd_packed_float4 source);
```

## Parameters

- `source`: The source vector.

<a id="return-value"></a>

## Return Value

A new size.

<a id="discussion"></a>

## Discussion

Creates a Spatial size from a packed simd vector.
