> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatgetvector](https://developer.apple.com/documentation/spatial/spsize3dfloatgetvector)

# SPSize3DFloatGetVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float3 SPSize3DFloatGetVector(SPSize3DFloat size);
```

## Parameters

- `size`: The source size.

<a id="return-value"></a>

## Return Value

A vector that represents the size.

<a id="discussion"></a>

## Discussion

Returns the @p width, @p height, and @p depth components of the size expressed as a simd vector.
