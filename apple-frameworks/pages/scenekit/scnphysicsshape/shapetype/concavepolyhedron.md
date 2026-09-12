> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/shapetype/concavepolyhedron](https://developer.apple.com/documentation/scenekit/scnphysicsshape/shapetype/concavepolyhedron)

# concavePolyhedron (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics shape is a concave polyhedron closely following the surface of the geometry.

## Declaration

```swift
static let concavePolyhedron: SCNPhysicsShape.ShapeType
```

<a id="Discussion"></a>

## Discussion

This option provides the highest level of detail, at a high cost to simulation performance. Use it only for irregularly shaped bodies where precise collision behavior is crucial to your app’s design.

This shape type may only be used for static physics bodies (that is, those whose [type](../../scnphysicsbody/type.md) property is [SCNPhysicsBodyType.static](../../scnphysicsbodytype/static.md)).

## See Also

### Type Properties

- [boundingBox](boundingbox.md): The physics shape is the smallest box containing the geometry.
- [convexHull](convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.

# SCNPhysicsShapeTypeConcavePolyhedron (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics shape is a concave polyhedron closely following the surface of the geometry.

## Declaration

```objectivec
extern SCNPhysicsShapeType const SCNPhysicsShapeTypeConcavePolyhedron;
```

<a id="Discussion"></a>

## Discussion

This option provides the highest level of detail, at a high cost to simulation performance. Use it only for irregularly shaped bodies where precise collision behavior is crucial to your app’s design.

This shape type may only be used for static physics bodies (that is, those whose [type](../../scnphysicsbody/type.md) property is [SCNPhysicsBodyTypeStatic](../../scnphysicsbodytype/static.md)).

## See Also

### Type Properties

- [SCNPhysicsShapeTypeBoundingBox](boundingbox.md): The physics shape is the smallest box containing the geometry.
- [SCNPhysicsShapeTypeConvexHull](convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.
