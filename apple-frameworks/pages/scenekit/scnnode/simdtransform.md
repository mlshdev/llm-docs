> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdtransform](https://developer.apple.com/documentation/scenekit/scnnode/simdtransform)

# simdTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The transform applied to the node relative to its parent. Animatable.

## Declaration

```swift
var simdTransform: simd_float4x4 { get set }
```

<a id="Discussion"></a>

## Discussion

The transform is the combination of the node’s [simdRotation](simdrotation.md), [simdPosition](simdposition.md), and [simdScale](simdscale.md) properties. The default transform is the identity matrix.

When you set the value of this property, the node’s [simdRotation](simdrotation.md), [simdOrientation](simdorientation.md), [simdEulerAngles](simdeulerangles.md), [simdPosition](simdposition.md), and [simdScale](simdscale.md) properties automatically change to match the new transform, and vice versa. SceneKit can perform this conversion only if the transform you provide is a combination of rotation, translation, and scale operations. If you set the value of this property to a skew transform or to a nonaffine transform, the values of these properties become undefined. Setting a new value for any of these properties causes SceneKit to compute a new transform, discarding any skew or nonaffine operations in the original transform.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.

### Managing the Node’s Transform

- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# simdTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The transform applied to the node relative to its parent. Animatable.

## Declaration

```objectivec
@property (nonatomic) simd_float4x4 simdTransform;
```

<a id="Discussion"></a>

## Discussion

The transform is the combination of the node’s [simdRotation](simdrotation.md), [simdPosition](simdposition.md), and [simdScale](simdscale.md) properties. The default transform is the identity matrix.

When you set the value of this property, the node’s [simdRotation](simdrotation.md), [simdOrientation](simdorientation.md), [simdEulerAngles](simdeulerangles.md), [simdPosition](simdposition.md), and [simdScale](simdscale.md) properties automatically change to match the new transform, and vice versa. SceneKit can perform this conversion only if the transform you provide is a combination of rotation, translation, and scale operations. If you set the value of this property to a skew transform or to a nonaffine transform, the values of these properties become undefined. Setting a new value for any of these properties causes SceneKit to compute a new transform, discarding any skew or nonaffine operations in the original transform.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.

### Managing the Node’s Transform

- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
