> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/option/keepascompound](https://developer.apple.com/documentation/scenekit/scnphysicsshape/option/keepascompound)

# keepAsCompound (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option for selecting whether to create a group of independent shapes or combine them into a single shape.

## Declaration

```swift
static let keepAsCompound: SCNPhysicsShape.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit convert separate geometries into separate shapes and join the resulting shapes. If [false](https://developer.apple.com/documentation/swift/false), SceneKit creates a single shape approximating the combined form of the geometries.

## See Also

### Type Properties

- [collisionMargin](collisionmargin.md)
- [scale](scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [type](type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShape.ShapeType](../shapetype.md): Values for the [type](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

# SCNPhysicsShapeKeepAsCompoundKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An option for selecting whether to create a group of independent shapes or combine them into a single shape.

## Declaration

```objectivec
extern SCNPhysicsShapeOption const SCNPhysicsShapeKeepAsCompoundKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit convert separate geometries into separate shapes and join the resulting shapes. If [false](https://developer.apple.com/documentation/swift/false), SceneKit creates a single shape approximating the combined form of the geometries.

## See Also

### Type Properties

- [SCNPhysicsShapeOptionCollisionMargin](collisionmargin.md)
- [SCNPhysicsShapeScaleKey](scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [SCNPhysicsShapeTypeKey](type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShapeType](../shapetype.md): Values for the [SCNPhysicsShapeTypeKey](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.
