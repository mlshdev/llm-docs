> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatrotatebyquaternion](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatrotatebyquaternion)

# SPScaledPose3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatRotateByQuaternion(SPScaledPose3DFloat scaledPose, simd_quatf quaternion);
```

## Parameters

- `scaledPose`: The source scaled pose.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A scaled pose with a rotation that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with a rotation that’s rotated by the specified quaternion.
