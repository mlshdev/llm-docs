> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatmakewithvector](https://developer.apple.com/documentation/spatial/spray3dfloatmakewithvector)

# SPRay3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatMakeWithVector(simd_float3 origin, simd_float3 direction);
```

## Parameters

- `origin`: A point structure that specifies the origin of the ray.
- `direction`: A Spatial vector that specifies the direction of the ray.

<a id="return-value"></a>

## Return Value

A new ray stucture.

<a id="discussion"></a>

## Discussion

Returns a ray at the specified origin.

> **Note**

> This function normalizes the direction vector.
