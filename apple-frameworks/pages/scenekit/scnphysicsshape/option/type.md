> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/option/type](https://developer.apple.com/documentation/scenekit/scnphysicsshape/option/type)

# type (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option for selecting the level of detail at which to create shapes from geometry.

## Declaration

```swift
static let type: SCNPhysicsShape.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the constants listed in `Shape Types`. The default type is [convexHull](../shapetype/convexhull.md).

## See Also

### Type Properties

- [collisionMargin](collisionmargin.md)
- [keepAsCompound](keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [scale](scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [SCNPhysicsShape.ShapeType](../shapetype.md): Values for the [type](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

# SCNPhysicsShapeTypeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An option for selecting the level of detail at which to create shapes from geometry.

## Declaration

```objectivec
extern SCNPhysicsShapeOption const SCNPhysicsShapeTypeKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the constants listed in `Shape Types`. The default type is [SCNPhysicsShapeTypeConvexHull](../shapetype/convexhull.md).

## See Also

### Type Properties

- [SCNPhysicsShapeOptionCollisionMargin](collisionmargin.md)
- [SCNPhysicsShapeKeepAsCompoundKey](keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [SCNPhysicsShapeScaleKey](scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [SCNPhysicsShapeType](../shapetype.md): Values for the [SCNPhysicsShapeTypeKey](type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.
