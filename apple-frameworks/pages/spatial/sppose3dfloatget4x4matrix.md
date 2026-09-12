> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatget4x4matrix](https://developer.apple.com/documentation/spatial/sppose3dfloatget4x4matrix)

# SPPose3DFloatGet4x4Matrix

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float4x4 SPPose3DFloatGet4x4Matrix(SPPose3DFloat pose);
```

## Parameters

- `pose`: The source pose.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a 4 x 4 matrix that represents the pose’s translation and rotation.
