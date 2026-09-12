> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3d/rotated(by:around:)-chuy](https://developer.apple.com/documentation/spatial/point3d/rotated(by:around:)-chuy)

# rotated(by:around:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a point that results from rotating with a quaternion around the specified point.

## Declaration

```swift
func rotated(by quaternion: simd_quatd, around pivot: Point3D) -> Point3D
```

## Parameters

- `quaternion`: A point that defines the rotation pivot.
- `pivot`: The double-precision quaternion that specifies the rotation.

<a id="return-value"></a>

## Return Value

The point that results from rotating with the specified quaternion.

## See Also

### Transforming a 3D point structure

- [applying(\_:)](applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-7ulww.md): Returns a point that results from applying the specified pose.
- [clamp(to:)](clamp%28to_%29.md): Clamps the mutable point to the specified rectangle.
- [scale(by:)](scale%28by_%29.md)
- [rotated(by:around:)](rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [unapplying(\_:)](unapplying%28__%29-5hk6t.md): Returns a point that results from unapplying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.

# SPPoint3DRotateByQuaternionAroundPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a point that results from rotating with a quaternion around the specified point.

## Declaration

```objectivec
static SPPoint3D SPPoint3DRotateByQuaternionAroundPoint(SPPoint3D point, simd_quatd quaternion, SPPoint3D pivot);
```

## Parameters

- `point`: The point to rotate.
- `quaternion`: A point that defines the rotation pivot.
- `pivot`: The double-precision quaternion that specifies the rotation.

<a id="return-value"></a>

## Return Value

The point that results from rotating with the specified quaternion.

## See Also

### Transforming a 3D point structure

- [SPPoint3DApplyAffineTransform](../sppoint3dapplyaffinetransform.md): Returns a point that results from applying the specified affine transform.
- [SPPoint3DApplyPose](../sppoint3dapplypose.md): Returns a point that results from applying the specified pose.
- [SPPoint3DApplyProjectiveTransform](../sppoint3dapplyprojectivetransform.md): Returns a point that results from applying the specified projective transform.
- [SPPoint3DApplyScaledPose](../sppoint3dapplyscaledpose.md): Returns a point that’s transformed by the specified scaled pose.
- [SPPoint3DRotate](../sppoint3drotate.md): Returns a point that results from applying the specified rotation.
- [SPPoint3DRotateAroundPoint](rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [SPPoint3DRotateByQuaternion](../sppoint3drotatebyquaternion.md): Returns a point that results from rotating with the specified quaternion.
- [SPPoint3DTranslate](../sppoint3dtranslate-8xo6b.md): Deprecated. Returns a point with an origin that’s offset by the specified size.
- [SPPoint3DTranslate](../sppoint3dtranslate-9aj4h.md): Returns a point with an origin that’s offset by the specified vector.
- [SPPoint3DUnapplyAffineTransform](../sppoint3dunapplyaffinetransform.md): Returns a point that results from unapplying the specified affine transform.
- [SPPoint3DUnapplyPose](../sppoint3dunapplypose.md): Returns a point that results from unapplying the specified pose.
- [SPPoint3DUnapplyProjectiveTransform](../sppoint3dunapplyprojectivetransform.md): Returns a point that results from unapplying the specified projective transform.
- [SPPoint3DUnapplyScaledPose](../sppoint3dunapplyscaledpose.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
