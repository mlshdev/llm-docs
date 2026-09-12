> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/position](https://developer.apple.com/documentation/scenekit/scnnode/position)

# position (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The translation applied to the node. Animatable.

## Declaration

```swift
var position: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

The node’s position locates it within the coordinate system of its parent, as modified by the node’s [pivot](pivot.md) property. The default position is the zero vector, indicating that the node is placed at the origin of the parent node’s coordinate system.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdPosition](simdposition.md): The translation applied to the node. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# position (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The translation applied to the node. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 position;
```

<a id="Discussion"></a>

## Discussion

The node’s position locates it within the coordinate system of its parent, as modified by the node’s [pivot](pivot.md) property. The default position is the zero vector, indicating that the node is placed at the origin of the parent node’s coordinate system.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [simdPosition](simdposition.md): The translation applied to the node. Animatable.

### Managing the Node’s Transform (SceneKit Types)

- [transform](transform.md): The transform applied to the node relative to its parent. Animatable.
- [rotation](rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scale.md): The scale factor applied to the node. Animatable.
- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
