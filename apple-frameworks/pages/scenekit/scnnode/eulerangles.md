> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/eulerangles](https://developer.apple.com/documentation/scenekit/scnnode/eulerangles)

# eulerAngles (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.

## Declaration

```swift
var eulerAngles: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

The order of components in this vector matches the axes of rotation:

- Pitch (the `x` component) is the rotation about the node’s x-axis.
- Yaw (the `y` component) is the rotation about the node’s y-axis.
- Roll (the `z` component) is the rotation about the node’s z-axis.

SceneKit applies these rotations relative to the node’s [pivot](pivot.md) property in the reverse order of the components: first roll, then yaw, then pitch. The [rotation](rotation.md), [eulerAngles](eulerangles.md), and [orientation](orientation.md) properties all affect the rotational aspect of the node’s [transform](transform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# eulerAngles (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 eulerAngles;
```

<a id="Discussion"></a>

## Discussion

The order of components in this vector matches the axes of rotation:

- Pitch (the `x` component) is the rotation about the node’s x-axis.
- Yaw (the `y` component) is the rotation about the node’s y-axis.
- Roll (the `z` component) is the rotation about the node’s z-axis.

SceneKit applies these rotations relative to the node’s [pivot](pivot.md) property in the reverse order of the components: first roll, then yaw, then pitch. The [rotation](rotation.md), [eulerAngles](eulerangles.md), and [orientation](orientation.md) properties all affect the rotational aspect of the node’s [transform](transform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
