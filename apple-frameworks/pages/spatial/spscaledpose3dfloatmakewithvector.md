> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmakewithvector](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmakewithvector)

# SPScaledPose3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMakeWithVector(simd_float3 position, simd_quatf rotation, float scale);
```

## Parameters

- `position`: A point structure that specifies the position of the scaled pose.
- `rotation`: A rotation structure that specifies the rotation of the scaled pose.
- `scale`: The uniform scale of the pose.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with the specified position, rotation, and scale.
