> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatmakewithvector](https://developer.apple.com/documentation/spatial/spvector3dfloatmakewithvector)

# SPVector3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatMakeWithVector(simd_float3 xyz);
```

## Parameters

- `xyz`: The source simd vector.

<a id="return-value"></a>

## Return Value

A new vector.

<a id="discussion"></a>

## Discussion

Creates a single-precision vector with elements specified as a 3-element SIMD vector.
