> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/scale](https://developer.apple.com/documentation/scenekit/scnnode/scale)

# scale (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The scale factor applied to the node. Animatable.

## Declaration

```swift
var scale: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

Each component of the scale vector multiplies the corresponding dimension of the node’s geometry. The default scale is `1.0` in all three dimensions. For example, applying a scale of (2.0, 0.5, 2.0) to a node containing a cube geometry reduces its height and increases its width and depth. Scaling is applied relative to the node’s [pivot](pivot.md) property.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# scale (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scale factor applied to the node. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 scale;
```

<a id="Discussion"></a>

## Discussion

Each component of the scale vector multiplies the corresponding dimension of the node’s geometry. The default scale is `1.0` in all three dimensions. For example, applying a scale of (2.0, 0.5, 2.0) to a node containing a cube geometry reduces its height and increases its width and depth. Scaling is applied relative to the node’s [pivot](pivot.md) property.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](position.md): The translation applied to the node. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
