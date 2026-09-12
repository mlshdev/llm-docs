> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdpivot](https://developer.apple.com/documentation/scenekit/scnnode/simdpivot)

# simdPivot (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The pivot point for the node’s position, rotation, and scale. Animatable.

## Declaration

```swift
var simdPivot: simd_float4x4 { get set }
```

<a id="Discussion"></a>

## Discussion

A node’s pivot is the transform between its coordinate space and that used by its [simdPosition](simdposition.md), [simdRotation](simdrotation.md), and [simdScale](simdscale.md) properties. The default pivot is the identity matrix, specifying that the node’s position locates the origin of its coordinate system, its rotation is about an axis through its center, and its scale is also relative to that center point.

Changing the pivot transform alters these behaviors in many useful ways. You can:

- Offset the node’s contents relative to its position. For example, by setting the pivot to a translation transform you can position a node containing a sphere geometry relative to where the sphere would rest on a floor instead of relative to its center.
- Move the node’s axis of rotation. For example, with a translation transform you can cause a node to revolve around a faraway point instead of rotating around its center, and with a rotation transform you can tilt the axis of rotation.
- Adjust the center point and direction for scaling the node. For example, with a translation transform you can cause a node to grow or shrink relative to a corner instead of to its center.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.

# simdPivot (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The pivot point for the node’s position, rotation, and scale. Animatable.

## Declaration

```objectivec
@property (nonatomic) simd_float4x4 simdPivot;
```

<a id="Discussion"></a>

## Discussion

A node’s pivot is the transform between its coordinate space and that used by its [simdPosition](simdposition.md), [simdRotation](simdrotation.md), and [simdScale](simdscale.md) properties. The default pivot is the identity matrix, specifying that the node’s position locates the origin of its coordinate system, its rotation is about an axis through its center, and its scale is also relative to that center point.

Changing the pivot transform alters these behaviors in many useful ways. You can:

- Offset the node’s contents relative to its position. For example, by setting the pivot to a translation transform you can position a node containing a sphere geometry relative to where the sphere would rest on a floor instead of relative to its center.
- Move the node’s axis of rotation. For example, with a translation transform you can cause a node to revolve around a faraway point instead of rotating around its center, and with a rotation transform you can tilt the axis of rotation.
- Adjust the center point and direction for scaling the node. For example, with a translation transform you can cause a node to grow or shrink relative to a corner instead of to its center.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [pivot](pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
