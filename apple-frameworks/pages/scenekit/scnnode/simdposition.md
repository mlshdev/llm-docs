> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdposition](https://developer.apple.com/documentation/scenekit/scnnode/simdposition)

# simdPosition (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The translation applied to the node. Animatable.

## Declaration

```swift
var simdPosition: simd_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

The node’s position locates it within the coordinate system of its parent, as modified by the node’s [simdPivot](simdpivot.md) property. The default position is the zero vector, indicating that the node is placed at the origin of the parent node’s coordinate system.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [position](position.md): The translation applied to the node. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

# simdPosition (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The translation applied to the node. Animatable.

## Declaration

```objectivec
@property (nonatomic) simd_float3 simdPosition;
```

<a id="Discussion"></a>

## Discussion

The node’s position locates it within the coordinate system of its parent, as modified by the node’s [simdPivot](simdpivot.md) property. The default position is the zero vector, indicating that the node is placed at the origin of the parent node’s coordinate system.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [position](position.md): The translation applied to the node. Animatable.

### Managing the Node’s Transform

- [simdTransform](simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdRotation](simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.
