> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dgetpackedvector](https://developer.apple.com/documentation/spatial/sprotation3dgetpackedvector)

# SPRotation3DGetPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_packed_double4 SPRotation3DGetPackedVector(SPRotation3D rotation);
```

## Parameters

- `rotation`: The source rotation structure.

<a id="return-value"></a>

## Return Value

A new packed simd vector, where elements `0`, `1`, and `2` are the imaginary parts, and element `3` is the real part.

<a id="discussion"></a>

## Discussion

Creates a packed simd vector from a Spatial rotation structure.
