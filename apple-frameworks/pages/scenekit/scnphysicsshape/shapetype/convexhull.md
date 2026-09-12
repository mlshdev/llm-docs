> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/shapetype/convexhull](https://developer.apple.com/documentation/scenekit/scnphysicsshape/shapetype/convexhull)

# convexHull (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics shape is a convex polyhedron roughly enclosing the geometry.

## Declaration

```swift
static let convexHull: SCNPhysicsShape.ShapeType
```

<a id="Discussion"></a>

## Discussion

This option provides a moderate level of detail and simulation performance. Use it for rounded or irregularly shaped physics bodies.

## See Also

### Type Properties

- [boundingBox](boundingbox.md): The physics shape is the smallest box containing the geometry.
- [concavePolyhedron](concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.

# SCNPhysicsShapeTypeConvexHull (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics shape is a convex polyhedron roughly enclosing the geometry.

## Declaration

```objectivec
extern SCNPhysicsShapeType const SCNPhysicsShapeTypeConvexHull;
```

<a id="Discussion"></a>

## Discussion

This option provides a moderate level of detail and simulation performance. Use it for rounded or irregularly shaped physics bodies.

## See Also

### Type Properties

- [SCNPhysicsShapeTypeBoundingBox](boundingbox.md): The physics shape is the smallest box containing the geometry.
- [SCNPhysicsShapeTypeConcavePolyhedron](concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.
