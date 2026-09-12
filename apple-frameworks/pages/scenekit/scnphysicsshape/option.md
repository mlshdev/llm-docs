> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/option](https://developer.apple.com/documentation/scenekit/scnphysicsshape/option)

# SCNPhysicsShape.Option (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Keys for the options dictionary used when creating a physics shape.

## Declaration

```swift
struct Option
```

<a id="Discussion"></a>

## Discussion

When SceneKit creates a shape from a hierarchy of nodes containing multiple geometries, the [keepAsCompound](option/keepascompound.md) option takes precedence over the [type](option/type.md) option.

For example, if you have a node hierarchy containing several geometries, setting the the [type](option/type.md) option to [boundingBox](shapetype/boundingbox.md) and the [keepAsCompound](option/keepascompound.md) option to [true](https://developer.apple.com/documentation/swift/true) creates a shape that is a combination of several boxes. This approach can provide better simulation performance than converting the entire node hierarchy to a single concave polyhedron shape.

## Topics

### Type Properties

- [collisionMargin](option/collisionmargin.md)
- [keepAsCompound](option/keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [scale](option/scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [type](option/type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShape.ShapeType](shapetype.md): Values for the [type](option/type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

### Initializers

- [init(rawValue:)](option/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNPhysicsShapeOption (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Keys for the options dictionary used when creating a physics shape.

## Declaration

```objectivec
typedef NSString * SCNPhysicsShapeOption;
```

<a id="Discussion"></a>

## Discussion

When SceneKit creates a shape from a hierarchy of nodes containing multiple geometries, the [SCNPhysicsShapeKeepAsCompoundKey](option/keepascompound.md) option takes precedence over the [SCNPhysicsShapeTypeKey](option/type.md) option.

For example, if you have a node hierarchy containing several geometries, setting the the [SCNPhysicsShapeTypeKey](option/type.md) option to [SCNPhysicsShapeTypeBoundingBox](shapetype/boundingbox.md) and the [SCNPhysicsShapeKeepAsCompoundKey](option/keepascompound.md) option to [true](https://developer.apple.com/documentation/swift/true) creates a shape that is a combination of several boxes. This approach can provide better simulation performance than converting the entire node hierarchy to a single concave polyhedron shape.

## Topics

### Type Properties

- [SCNPhysicsShapeOptionCollisionMargin](option/collisionmargin.md)
- [SCNPhysicsShapeKeepAsCompoundKey](option/keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [SCNPhysicsShapeScaleKey](option/scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [SCNPhysicsShapeTypeKey](option/type.md): An option for selecting the level of detail at which to create shapes from geometry.
- [SCNPhysicsShapeType](shapetype.md): Values for the [SCNPhysicsShapeTypeKey](option/type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.
