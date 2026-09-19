> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppose3dfloatrotatebyquaternion

# SPPose3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatRotateByQuaternion(SPPose3DFloat pose, simd_quatf quaternion);
```

## Parameters

- `pose`: The source pose.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A pose with a rotation that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a pose with a rotation that’s rotated by the specified quaternion.
