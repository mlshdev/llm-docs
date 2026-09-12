> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/orientation](https://developer.apple.com/documentation/scenekit/scnnode/orientation)

# orientation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s orientation, expressed as a quaternion. Animatable.

## Declaration

```swift
var orientation: SCNQuaternion { get set }
```

<a id="Discussion"></a>

## Discussion

The [rotation](rotation.md), [eulerAngles](eulerangles.md), and [orientation](orientation.md) properties all affect the rotational aspect of the node’s [transform](transform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# orientation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The node’s orientation, expressed as a quaternion. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNQuaternion orientation;
```

<a id="Discussion"></a>

## Discussion

The [rotation](rotation.md), [eulerAngles](eulerangles.md), and [orientation](orientation.md) properties all affect the rotational aspect of the node’s [transform](transform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
