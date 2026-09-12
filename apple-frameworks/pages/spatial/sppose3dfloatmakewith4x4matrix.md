> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmakewith4x4matrix](https://developer.apple.com/documentation/spatial/sppose3dfloatmakewith4x4matrix)

# SPPose3DFloatMakeWith4x4Matrix

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMakeWith4x4Matrix(simd_float4x4 matrix);
```

## Parameters

- `matrix`: The source matrix.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a new pose structure from the specified 4 x 4 matrix.

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate matrix transform. In that case, the function returns @p SPPose3DFloatInvalid.
