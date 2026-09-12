> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/color](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/color)

# color (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for per-vertex color data.

## Declaration

```swift
static let color: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing a color for each vertex in the geometry. SceneKit interpolates per-vertex colors across a surface to produce smooth shading. Per-vertex colors modulate those produced by lighting and a geometry’s materials, if applicable.

For a custom shader program, you use this semantic to bind SceneKit’s vertex color data to an input attribute of the shader.

Vertex color data is typically an array of three- or four-component vectors.

## See Also

### Advanced Shading Semantics

- [tangent](tangent.md): The semantic for surface tangent vector data.

# SCNGeometrySourceSemanticColor (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The semantic for per-vertex color data.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticColor;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing a color for each vertex in the geometry. SceneKit interpolates per-vertex colors across a surface to produce smooth shading. Per-vertex colors modulate those produced by lighting and a geometry’s materials, if applicable.

For a custom shader program, you use this semantic to bind SceneKit’s vertex color data to an input attribute of the shader.

Vertex color data is typically an array of three- or four-component vectors.

## See Also

### Advanced Shading Semantics

- [SCNGeometrySourceSemanticTangent](tangent.md): The semantic for surface tangent vector data.
