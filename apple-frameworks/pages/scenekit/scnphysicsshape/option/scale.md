> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/option/scale](https://developer.apple.com/documentation/scenekit/scnphysicsshape/option/scale)

# scale (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.

## Declaration

```swift
static let scale: SCNPhysicsShape.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../../../foundation/nsvalue.md) object containing an [SCNVector3](../../scnvector3.md) structure, whose components describe the scale factor in each of the x-, y- and z-axis directions. The default value is the vector `{1.0, 1.0, 1.0}`, specifying no change of scale.

SceneKit’s physics simulation ignores the [scale](../../scnnode/scale.md) property of nodes containing physics bodies when simulating collisions. Instead, use this option to provide a scale factor when creating custom physics shapes. (If you create a physics body for a node without specifying a custom shape, SceneKit uses the node’s [scale](../../scnnode/scale.md) property to infer this scale factor at creation time.)

## See Also

### Type Properties

- [collisionMargin](collisionmargin.md)
- [keepAsCompound](keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [type](type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShape.ShapeType](../shapetype.md): Values for the [type](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

# SCNPhysicsShapeScaleKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.

## Declaration

```objectivec
extern SCNPhysicsShapeOption const SCNPhysicsShapeScaleKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../../../foundation/nsvalue.md) object containing an [SCNVector3](../../scnvector3.md) structure, whose components describe the scale factor in each of the x-, y- and z-axis directions. The default value is the vector `{1.0, 1.0, 1.0}`, specifying no change of scale.

SceneKit’s physics simulation ignores the [scale](../../scnnode/scale.md) property of nodes containing physics bodies when simulating collisions. Instead, use this option to provide a scale factor when creating custom physics shapes. (If you create a physics body for a node without specifying a custom shape, SceneKit uses the node’s [scale](../../scnnode/scale.md) property to infer this scale factor at creation time.)

## See Also

### Type Properties

- [SCNPhysicsShapeOptionCollisionMargin](collisionmargin.md)
- [SCNPhysicsShapeKeepAsCompoundKey](keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [SCNPhysicsShapeTypeKey](type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShapeType](../shapetype.md): Values for the [SCNPhysicsShapeTypeKey](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.
