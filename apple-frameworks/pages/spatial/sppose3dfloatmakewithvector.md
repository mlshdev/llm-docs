> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmakewithvector](https://developer.apple.com/documentation/spatial/sppose3dfloatmakewithvector)

# SPPose3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMakeWithVector(simd_float3 position, simd_quatf rotation);
```

## Parameters

- `position`: A point structure that specifies the position of the pose.
- `rotation`: A rotation structure that specifies the rotation of the pose.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a pose with the specified position and rotation.
