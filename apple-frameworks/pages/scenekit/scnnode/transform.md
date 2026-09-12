> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/transform](https://developer.apple.com/documentation/scenekit/scnnode/transform)

# transform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The transform applied to the node relative to its parent. Animatable.

## Declaration

```swift
var transform: SCNMatrix4 { get set }
```

```swift
var transform: SCNMatrix4 { get set }
```

<a id="Discussion"></a>

## Discussion

The transformation is the combination of the node’s [rotation](rotation.md), [position](position.md), and [scale](scale.md) properties. The default transformation is [SCNMatrix4Identity](../scnmatrix4identity.md).

When you set the value of this property, the node’s [rotation](rotation.md), [orientation](orientation.md), [eulerAngles](eulerangles.md), [position](position.md), and [scale](scale.md) properties automatically change to match the new transform, and vice versa. SceneKit can perform this conversion only if the transform you provide is a combination of rotation, translation, and scale operations. If you set the value of this property to a skew transformation or to a nonaffine transformation, the values of these properties become undefined. Setting a new value for any of these properties causes SceneKit to compute a new transformation, discarding any skew or nonaffine operations in the original transformation.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# transform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The transform applied to the node relative to its parent. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNMatrix4 transform;
```

```objectivec
@property (nonatomic) SCNMatrix4 transform;
```

<a id="Discussion"></a>

## Discussion

The transformation is the combination of the node’s [rotation](rotation.md), [position](position.md), and [scale](scale.md) properties. The default transformation is [SCNMatrix4Identity](../scnmatrix4identity.md).

When you set the value of this property, the node’s [rotation](rotation.md), [orientation](orientation.md), [eulerAngles](eulerangles.md), [position](position.md), and [scale](scale.md) properties automatically change to match the new transform, and vice versa. SceneKit can perform this conversion only if the transform you provide is a combination of rotation, translation, and scale operations. If you set the value of this property to a skew transformation or to a nonaffine transformation, the values of these properties become undefined. Setting a new value for any of these properties causes SceneKit to compute a new transformation, discarding any skew or nonaffine operations in the original transformation.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
