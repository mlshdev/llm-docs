> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatgetvector](https://developer.apple.com/documentation/spatial/sppoint3dfloatgetvector)

# SPPoint3DFloatGetVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float3 SPPoint3DFloatGetVector(SPPoint3DFloat point);
```

## Parameters

- `point`: The source point.

<a id="return-value"></a>

## Return Value

A vector that represents the point.

<a id="discussion"></a>

## Discussion

Returns the @p x, @p y, and @p z components of the point expressed as a simd vector.
