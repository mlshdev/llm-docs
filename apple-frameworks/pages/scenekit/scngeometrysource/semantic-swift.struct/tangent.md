> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/tangent](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/tangent)

# tangent (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for surface tangent vector data.

## Declaration

```swift
static let tangent: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the surface tangent vector at each vertex in the geometry. SceneKit uses this information to compute advanced lighting effects on the surface.

For a custom shader program, you use this semantic to bind SceneKit’s vertex tangent data to an input attribute of the shader.

Vertex tangent data is typically an array of three- or four-component vectors.

## See Also

### Advanced Shading Semantics

- [color](color.md): The semantic for per-vertex color data.

# SCNGeometrySourceSemanticTangent (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The semantic for surface tangent vector data.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticTangent;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the surface tangent vector at each vertex in the geometry. SceneKit uses this information to compute advanced lighting effects on the surface.

For a custom shader program, you use this semantic to bind SceneKit’s vertex tangent data to an input attribute of the shader.

Vertex tangent data is typically an array of three- or four-component vectors.

## See Also

### Advanced Shading Semantics

- [SCNGeometrySourceSemanticColor](color.md): The semantic for per-vertex color data.
