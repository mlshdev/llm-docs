> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/normal](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/normal)

# normal (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for surface normal data.

## Declaration

```swift
static let normal: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the surface normal vector at each vertex in the geometry. SceneKit uses this information to compute lighting effects on the surface.

For a custom shader program, you use this semantic to bind SceneKit’s vertex normal data to an input attribute of the shader.

Vertex normal data is typically an array of three- or four-component vectors.

## See Also

### Basic Geometry Semantics

- [vertex](vertex.md): The semantic for vertex position data.
- [texcoord](texcoord.md): The semantic for texture coordinate data.

# SCNGeometrySourceSemanticNormal (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The semantic for surface normal data.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticNormal;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the surface normal vector at each vertex in the geometry. SceneKit uses this information to compute lighting effects on the surface.

For a custom shader program, you use this semantic to bind SceneKit’s vertex normal data to an input attribute of the shader.

Vertex normal data is typically an array of three- or four-component vectors.

## See Also

### Basic Geometry Semantics

- [SCNGeometrySourceSemanticVertex](vertex.md): The semantic for vertex position data.
- [SCNGeometrySourceSemanticTexcoord](texcoord.md): The semantic for texture coordinate data.
