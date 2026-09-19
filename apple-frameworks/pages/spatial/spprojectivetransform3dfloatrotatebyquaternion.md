> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatrotatebyquaternion

# SPProjectiveTransform3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatRotateByQuaternion(SPProjectiveTransform3DFloat transform, simd_quatf quaternion);
```

## Parameters

- `transform`: The source transform.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A transform that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a projective transform that’s constructed by concatenating an existing projective transform and a rotation specified by a quaternion.
