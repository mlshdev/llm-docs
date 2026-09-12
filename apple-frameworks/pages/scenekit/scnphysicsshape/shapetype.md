> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/shapetype](https://developer.apple.com/documentation/scenekit/scnphysicsshape/shapetype)

# SCNPhysicsShape.ShapeType (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Values for the [type](option/type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

## Declaration

```swift
struct ShapeType
```

## Topics

### Type Properties

- [boundingBox](shapetype/boundingbox.md): The physics shape is the smallest box containing the geometry.
- [concavePolyhedron](shapetype/concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.
- [convexHull](shapetype/convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.

### Initializers

- [init(rawValue:)](shapetype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Type Properties

- [collisionMargin](option/collisionmargin.md)
- [keepAsCompound](option/keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [scale](option/scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [type](option/type.md): An option for selecting the level of detail at which to create shapes from geometry.

# SCNPhysicsShapeType (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values for the [SCNPhysicsShapeTypeKey](option/type.md) key specifying the level of detail that SceneKit uses when creating a physics shape based on a geometry.

## Declaration

```objectivec
typedef NSString * SCNPhysicsShapeType;
```

## Topics

### Type Properties

- [SCNPhysicsShapeTypeBoundingBox](shapetype/boundingbox.md): The physics shape is the smallest box containing the geometry.
- [SCNPhysicsShapeTypeConcavePolyhedron](shapetype/concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.
- [SCNPhysicsShapeTypeConvexHull](shapetype/convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.

## See Also

### Type Properties

- [SCNPhysicsShapeOptionCollisionMargin](option/collisionmargin.md)
- [SCNPhysicsShapeKeepAsCompoundKey](option/keepascompound.md): An option for selecting whether to create a group of independent shapes or combine them into a single shape.
- [SCNPhysicsShapeScaleKey](option/scale.md): An option for selecting the scale factor of the shape relative to the local coordinate space of the node containing it.
- [SCNPhysicsShapeTypeKey](option/type.md): An option for selecting the level of detail at which to create shapes from geometry.
