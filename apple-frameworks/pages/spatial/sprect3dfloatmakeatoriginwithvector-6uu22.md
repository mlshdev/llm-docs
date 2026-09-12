> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatmakeatoriginwithvector-6uu22](https://developer.apple.com/documentation/spatial/sprect3dfloatmakeatoriginwithvector-6uu22)

# SPRect3DFloatMakeAtOriginWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatMakeAtOriginWithVector(simd_float3 origin, simd_float3 size);
```

## Parameters

- `origin`: A three-element vector that specifies the origin of the rectangle.
- `size`: A three-element vector that specifies the size of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified origin using simd vectors.
