> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dunapplyaffinetransform](https://developer.apple.com/documentation/spatial/sppoint3dunapplyaffinetransform)

# SPPoint3DUnapplyAffineTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a point that results from unapplying the specified affine transform.

## Declaration

```objectivec
static SPPoint3D SPPoint3DUnapplyAffineTransform(SPPoint3D point, SPAffineTransform3D transform);
```

## Parameters

- `point`: The point to unapply a transform from.
- `transform`: The affine transform that the function unapplies to the point.

<a id="return-value"></a>

## Return Value

The point that results from unapplying the specified affine transform.

## See Also

### Transforming a 3D point structure

- [SPPoint3DApplyAffineTransform](sppoint3dapplyaffinetransform.md): Returns a point that results from applying the specified affine transform.
- [SPPoint3DApplyPose](sppoint3dapplypose.md): Returns a point that results from applying the specified pose.
- [SPPoint3DApplyProjectiveTransform](sppoint3dapplyprojectivetransform.md): Returns a point that results from applying the specified projective transform.
- [SPPoint3DApplyScaledPose](sppoint3dapplyscaledpose.md): Returns a point that’s transformed by the specified scaled pose.
- [SPPoint3DRotate](sppoint3drotate.md): Returns a point that results from applying the specified rotation.
- [SPPoint3DRotateAroundPoint](point3d/rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [SPPoint3DRotateByQuaternion](sppoint3drotatebyquaternion.md): Returns a point that results from rotating with the specified quaternion.
- [SPPoint3DRotateByQuaternionAroundPoint](point3d/rotated%28by_around_%29-chuy.md): Returns a point that results from rotating with a quaternion around the specified point.
- [SPPoint3DTranslate](sppoint3dtranslate-8xo6b.md): Deprecated. Returns a point with an origin that’s offset by the specified size.
- [SPPoint3DTranslate](sppoint3dtranslate-9aj4h.md): Returns a point with an origin that’s offset by the specified vector.
- [SPPoint3DUnapplyPose](sppoint3dunapplypose.md): Returns a point that results from unapplying the specified pose.
- [SPPoint3DUnapplyProjectiveTransform](sppoint3dunapplyprojectivetransform.md): Returns a point that results from unapplying the specified projective transform.
- [SPPoint3DUnapplyScaledPose](sppoint3dunapplyscaledpose.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
