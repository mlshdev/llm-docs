> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/rotated(by:around:)-3ih62](https://developer.apple.com/documentation/spatial/rect3d/rotated(by:around:)-3ih62)

# rotated(by:around:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a rectangle that results from applying the specified rotation around a pivot point.

## Declaration

```swift
func rotated(by rotation: Rotation3D, around pivot: Point3D) -> Rect3D
```

## Parameters

- `rotation`: The rotation structure that defines the rotation’s angle and axis.
- `pivot`: The point structure that defines the rotation pivot point.

<a id="return-value"></a>

## Return Value

The rectangle that results from applying the specified rotation around a pivot point.

## See Also

### Transforming a 3D rectangle structure

- [applying(\_:)](applying%28__%29-3qdiy.md): Returns a rectangle that results from applying the specified pose.
- [applying(\_:)](applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [applying(\_:)](applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [rotated(by:around:)](rotated%28by_around_%29-8g1c9.md): Returns a rectangle that results from rotating with the specified quaternion around a pivot point.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a rectangle that results from scaling with the specified double-precision values.
- [sheared(\_:)](sheared%28__%29.md): Returns a rectangle that results from shearing over an axis by shear factors for the other two axes.
- [unapplying(\_:)](unapplying%28__%29-1j6g7.md): Returns a rectangle that results from unapplying the specified projective transform.
- [unapplying(\_:)](unapplying%28__%29-1pbfn.md): Returns a rectangle that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](unapplying%28__%29-2he5i.md): Returns a rectangle that results from unapplying the specified pose.
- [unapplying(\_:)](unapplying%28__%29-7eglq.md): Returns a rectangle that results from unapplying the specified affine transform.

# SPRect3DRotateAroundPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a rectangle that results from applying the specified rotation around a pivot point.

## Declaration

```objectivec
static SPRect3D SPRect3DRotateAroundPoint(SPRect3D rect, SPRotation3D rotation, SPPoint3D pivot);
```

## Parameters

- `rect`: The rectangle to rotate.
- `rotation`: The rotation structure that defines the rotation’s angle and axis.
- `pivot`: The point structure that defines the rotation pivot point.

<a id="return-value"></a>

## Return Value

The rectangle that results from applying the specified rotation around a pivot point.

## See Also

### Transforming a 3D rectangle structure

- [SPRect3DRotateByQuaternionAroundPoint](rotated%28by_around_%29-8g1c9.md): Returns a rectangle that results from rotating with the specified quaternion around a pivot point.
- [SPRect3DApplyAffineTransform](../sprect3dapplyaffinetransform.md): Returns a rectangle that results from applying the specified affine transform.
- [SPRect3DApplyPose](../sprect3dapplypose.md): Returns a rectangle that results from applying the specified pose.
- [SPRect3DApplyProjectiveTransform](../sprect3dapplyprojectivetransform.md)
- [SPRect3DApplyScaledPose](../sprect3dapplyscaledpose.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [SPRect3DRotate](../sprect3drotate.md): Returns a rectangle that results from applying the specified rotation.
- [SPRect3DRotateByQuaternion](../sprect3drotatebyquaternion.md): Returns a rectangle that results from rotating with the specified quaternion.
- [SPRect3DScaleBy](../sprect3dscaleby.md): Returns a rectangle that results from scaling with the specified double-precision values.
- [SPRect3DScaleBySize](../sprect3dscalebysize.md): Returns a rectangle that results from scaling with the specified size structure.
- [SPRect3DScaleUniform](../sprect3dscaleuniform.md): Returns a rectangle that results from uniformly scaling with the specified double-precision value.
- [SPRect3DShear](../sprect3dshear.md): Returns a rectangle that results from shearing over an axis by shear factors for the other two axes.
- [SPRect3DTranslate](../sprect3dtranslate-88ujj.md): Returns a rectangle with an origin that’s offset by the specified vector.
- [SPRect3DTranslate](../sprect3dtranslate-8amf1.md): Deprecated. Returns a rectangle with an origin that’s offset by the specified size.
- [SPRect3DUnapplyAffineTransform](../sprect3dunapplyaffinetransform.md): Returns a rectangle that results from unapplying the specified affine transform.
- [SPRect3DUnapplyPose](../sprect3dunapplypose.md): Returns a rectangle that results from unapplying the specified pose.
