> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdorientation](https://developer.apple.com/documentation/scenekit/scnnode/simdorientation)

# simdOrientation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s orientation, expressed as a quaternion. Animatable.

## Declaration

```swift
var simdOrientation: simd_quatf { get set }
```

<a id="Discussion"></a>

## Discussion

The [simdRotation](simdrotation.md), [simdEulerAngles](simdeulerangles.md), and [simdOrientation](simdorientation.md) properties all affect the rotational aspect of the node’s [simdTransform](simdtransform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# simdOrientation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The node’s orientation, expressed as a quaternion. Animatable.

## Declaration

```objectivec
@property (nonatomic) simd_quatf simdOrientation;
```

<a id="Discussion"></a>

## Discussion

The [simdRotation](simdrotation.md), [simdEulerAngles](simdeulerangles.md), and [simdOrientation](simdorientation.md) properties all affect the rotational aspect of the node’s [simdTransform](simdtransform.md) property. Any change to one of these properties is reflected in the others.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [orientation](orientation.md): The node’s orientation, expressed as a quaternion. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
