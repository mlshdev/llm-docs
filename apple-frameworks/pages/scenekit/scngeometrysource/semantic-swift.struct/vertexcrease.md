> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/vertexcrease](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/vertexcrease)

# vertexCrease (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for vertex crease data, used for subdividing surfaces.

## Declaration

```swift
static let vertexCrease: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing crease data for each vertex in the geometry. SceneKit uses this information to determine the sharpness of corners and smoothness of surfaces when you change a geometry’s [subdivisionLevel](../../scngeometry/subdivisionlevel.md) property.

For a custom shader program, you use this semantic to bind SceneKit’s vertex crease data to an input attribute of the shader.

Vertex crease data is an array of scalar floating-point values, where each value determines the smoothness or sharpness of the corresponding vertex: A value of `0.0` specifies a completely smoothed corner, and a value of `10.0` or greater specifies an infinitely sharp point.

## See Also

### Surface Subdivision Semantics

- [edgeCrease](edgecrease.md): The semantic for edge crease data, used for subdividing surfaces.

# SCNGeometrySourceSemanticVertexCrease (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The semantic for vertex crease data, used for subdividing surfaces.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticVertexCrease;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing crease data for each vertex in the geometry. SceneKit uses this information to determine the sharpness of corners and smoothness of surfaces when you change a geometry’s [subdivisionLevel](../../scngeometry/subdivisionlevel.md) property.

For a custom shader program, you use this semantic to bind SceneKit’s vertex crease data to an input attribute of the shader.

Vertex crease data is an array of scalar floating-point values, where each value determines the smoothness or sharpness of the corresponding vertex: A value of `0.0` specifies a completely smoothed corner, and a value of `10.0` or greater specifies an infinitely sharp point.

## See Also

### Surface Subdivision Semantics

- [SCNGeometrySourceSemanticEdgeCrease](edgecrease.md): The semantic for edge crease data, used for subdividing surfaces.
