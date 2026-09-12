> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/shapetype/boundingbox](https://developer.apple.com/documentation/scenekit/scnphysicsshape/shapetype/boundingbox)

# boundingBox (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics shape is the smallest box containing the geometry.

## Declaration

```swift
static let boundingBox: SCNPhysicsShape.ShapeType
```

<a id="Discussion"></a>

## Discussion

This option provides the lowest level of detail and the fastest simulation performance. Use it for generally box-shaped physics bodies or when constructing a compound physics shape.

## See Also

### Type Properties

- [concavePolyhedron](concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.
- [convexHull](convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.

# SCNPhysicsShapeTypeBoundingBox (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics shape is the smallest box containing the geometry.

## Declaration

```objectivec
extern SCNPhysicsShapeType const SCNPhysicsShapeTypeBoundingBox;
```

<a id="Discussion"></a>

## Discussion

This option provides the lowest level of detail and the fastest simulation performance. Use it for generally box-shaped physics bodies or when constructing a compound physics shape.

## See Also

### Type Properties

- [SCNPhysicsShapeTypeConcavePolyhedron](concavepolyhedron.md): The physics shape is a concave polyhedron closely following the surface of the geometry.
- [SCNPhysicsShapeTypeConvexHull](convexhull.md): The physics shape is a convex polyhedron roughly enclosing the geometry.
