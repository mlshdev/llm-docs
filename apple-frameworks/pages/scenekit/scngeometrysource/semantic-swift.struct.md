> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct)

# SCNGeometrySource.Semantic (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
struct Semantic
```

## Topics

### Basic Geometry Semantics

- [vertex](semantic-swift.struct/vertex.md): The semantic for vertex position data.
- [normal](semantic-swift.struct/normal.md): The semantic for surface normal data.
- [texcoord](semantic-swift.struct/texcoord.md): The semantic for texture coordinate data.

### Advanced Shading Semantics

- [color](semantic-swift.struct/color.md): The semantic for per-vertex color data.
- [tangent](semantic-swift.struct/tangent.md): The semantic for surface tangent vector data.

### Surface Subdivision Semantics

- [edgeCrease](semantic-swift.struct/edgecrease.md): The semantic for edge crease data, used for subdividing surfaces.
- [vertexCrease](semantic-swift.struct/vertexcrease.md): The semantic for vertex crease data, used for subdividing surfaces.

### Skeletal Animation Semantics

- [boneIndices](semantic-swift.struct/boneindices.md): The semantic for bone index data, used for skeletal animation of skinned surfaces.
- [boneWeights](semantic-swift.struct/boneweights.md): The semantic for bone weight data, used for skeletal animation of skinned surfaces.

### Initializers

- [init(\_:)](semantic-swift.struct/init%28__%29.md): Deprecated.
- [init(rawValue:)](semantic-swift.struct/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNGeometrySourceSemantic (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef NSString * SCNGeometrySourceSemantic;
```

## Topics

### Basic Geometry Semantics

- [SCNGeometrySourceSemanticVertex](semantic-swift.struct/vertex.md): The semantic for vertex position data.
- [SCNGeometrySourceSemanticNormal](semantic-swift.struct/normal.md): The semantic for surface normal data.
- [SCNGeometrySourceSemanticTexcoord](semantic-swift.struct/texcoord.md): The semantic for texture coordinate data.

### Advanced Shading Semantics

- [SCNGeometrySourceSemanticColor](semantic-swift.struct/color.md): The semantic for per-vertex color data.
- [SCNGeometrySourceSemanticTangent](semantic-swift.struct/tangent.md): The semantic for surface tangent vector data.

### Surface Subdivision Semantics

- [SCNGeometrySourceSemanticEdgeCrease](semantic-swift.struct/edgecrease.md): The semantic for edge crease data, used for subdividing surfaces.
- [SCNGeometrySourceSemanticVertexCrease](semantic-swift.struct/vertexcrease.md): The semantic for vertex crease data, used for subdividing surfaces.

### Skeletal Animation Semantics

- [SCNGeometrySourceSemanticBoneIndices](semantic-swift.struct/boneindices.md): The semantic for bone index data, used for skeletal animation of skinned surfaces.
- [SCNGeometrySourceSemanticBoneWeights](semantic-swift.struct/boneweights.md): The semantic for bone weight data, used for skeletal animation of skinned surfaces.
