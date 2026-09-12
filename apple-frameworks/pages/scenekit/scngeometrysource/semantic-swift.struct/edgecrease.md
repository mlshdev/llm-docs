> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/edgecrease](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/edgecrease)

# edgeCrease (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for edge crease data, used for subdividing surfaces.

## Declaration

```swift
static let edgeCrease: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing crease data for each vertex in the geometry. SceneKit uses this information to determine the sharpness of edges and smoothness of surfaces when you change a geometry’s [subdivisionLevel](../../scngeometry/subdivisionlevel.md) property.

For a custom shader program, you use this semantic to bind SceneKit’s edge crease data to an input attribute of the shader.

Edge crease data is an array of scalar floating-point values, where each value determines the smoothness or sharpness of the edge identified by the primitive at the corresponding index in the geometry’s [SceneKit Constants](../../scenekit-constants.md) geometry element: A value of `0.0` specifies a completely smoothed edge, and a value of `10.0` or greater specifies an infinitely sharp edge.

## See Also

### Surface Subdivision Semantics

- [vertexCrease](vertexcrease.md): The semantic for vertex crease data, used for subdividing surfaces.

# SCNGeometrySourceSemanticEdgeCrease (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The semantic for edge crease data, used for subdividing surfaces.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticEdgeCrease;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing crease data for each vertex in the geometry. SceneKit uses this information to determine the sharpness of edges and smoothness of surfaces when you change a geometry’s [subdivisionLevel](../../scngeometry/subdivisionlevel.md) property.

For a custom shader program, you use this semantic to bind SceneKit’s edge crease data to an input attribute of the shader.

Edge crease data is an array of scalar floating-point values, where each value determines the smoothness or sharpness of the edge identified by the primitive at the corresponding index in the geometry’s [SceneKit Constants](../../scenekit-constants.md) geometry element: A value of `0.0` specifies a completely smoothed edge, and a value of `10.0` or greater specifies an infinitely sharp edge.

## See Also

### Surface Subdivision Semantics

- [SCNGeometrySourceSemanticVertexCrease](vertexcrease.md): The semantic for vertex crease data, used for subdividing surfaces.
