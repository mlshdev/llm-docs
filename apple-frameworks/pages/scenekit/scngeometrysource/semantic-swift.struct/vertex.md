> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/vertex](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/vertex)

# vertex (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for vertex position data.

## Declaration

```swift
static let vertex: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the positions of each vertex in the geometry. If you create a custom geometry using the [init(sources:elements:)](../../scngeometry/init%28sources_elements_%29.md) method, you must provide a geometry source for this semantic.

For a custom shader program, you use this semantic to bind SceneKit’s vertex position data to an input attribute of the shader.

Vertex position data is typically an array of three- or four-component vectors.

## See Also

### Basic Geometry Semantics

- [normal](normal.md): The semantic for surface normal data.
- [texcoord](texcoord.md): The semantic for texture coordinate data.

# SCNGeometrySourceSemanticVertex (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The semantic for vertex position data.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticVertex;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing the positions of each vertex in the geometry. If you create a custom geometry using the [geometryWithSources:elements:](../../scngeometry/init%28sources_elements_%29.md) method, you must provide a geometry source for this semantic.

For a custom shader program, you use this semantic to bind SceneKit’s vertex position data to an input attribute of the shader.

Vertex position data is typically an array of three- or four-component vectors.

## See Also

### Basic Geometry Semantics

- [SCNGeometrySourceSemanticNormal](normal.md): The semantic for surface normal data.
- [SCNGeometrySourceSemanticTexcoord](texcoord.md): The semantic for texture coordinate data.
