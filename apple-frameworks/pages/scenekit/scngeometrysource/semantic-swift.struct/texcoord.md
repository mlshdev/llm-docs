> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/texcoord](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/texcoord)

# texcoord (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for texture coordinate data.

## Declaration

```swift
static let texcoord: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing texture mapping coordinates for each vertex in the geometry. Unlike other semantics, a geometry may contain multiple sources for texture coordinates—each corresponds to a separate [mappingChannel](../../scnmaterialproperty/mappingchannel.md) number that you can use when associating textured materials.

For a custom shader program, you use this semantic to bind SceneKit’s texture coordinate data to one or more input attributes of the shader.

Texture coordinate data is typically an array of two-component vectors.

## See Also

### Basic Geometry Semantics

- [vertex](vertex.md): The semantic for vertex position data.
- [normal](normal.md): The semantic for surface normal data.

# SCNGeometrySourceSemanticTexcoord (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The semantic for texture coordinate data.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticTexcoord;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing texture mapping coordinates for each vertex in the geometry. Unlike other semantics, a geometry may contain multiple sources for texture coordinates—each corresponds to a separate [mappingChannel](../../scnmaterialproperty/mappingchannel.md) number that you can use when associating textured materials.

For a custom shader program, you use this semantic to bind SceneKit’s texture coordinate data to one or more input attributes of the shader.

Texture coordinate data is typically an array of two-component vectors.

## See Also

### Basic Geometry Semantics

- [SCNGeometrySourceSemanticVertex](vertex.md): The semantic for vertex position data.
- [SCNGeometrySourceSemanticNormal](normal.md): The semantic for surface normal data.
