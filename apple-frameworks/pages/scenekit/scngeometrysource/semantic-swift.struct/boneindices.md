> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/semantic-swift.struct/boneindices](https://developer.apple.com/documentation/scenekit/scngeometrysource/semantic-swift.struct/boneindices)

# boneIndices (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The semantic for bone index data, used for skeletal animation of skinned surfaces.

## Declaration

```swift
static let boneIndices: SCNGeometrySource.Semantic
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing skeletal animation data for each vertex in the geometry. SceneKit uses this information to determine which bone nodes in the skeleton affect the behavior of each vertex.

For a custom shader program, you use this semantic to bind SceneKit’s bone index data to an input attribute of the shader.

For details on skeletal animation, see [SCNSkinner](../../scnskinner.md).

## See Also

### Skeletal Animation Semantics

- [boneWeights](boneweights.md): The semantic for bone weight data, used for skeletal animation of skinned surfaces.

# SCNGeometrySourceSemanticBoneIndices (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The semantic for bone index data, used for skeletal animation of skinned surfaces.

## Declaration

```objectivec
extern SCNGeometrySourceSemantic const SCNGeometrySourceSemanticBoneIndices;
```

<a id="Discussion"></a>

## Discussion

For a geometry source, this semantic identifies data containing skeletal animation data for each vertex in the geometry. SceneKit uses this information to determine which bone nodes in the skeleton affect the behavior of each vertex.

For a custom shader program, you use this semantic to bind SceneKit’s bone index data to an input attribute of the shader.

For details on skeletal animation, see [SCNSkinner](../../scnskinner.md).

## See Also

### Skeletal Animation Semantics

- [SCNGeometrySourceSemanticBoneWeights](boneweights.md): The semantic for bone weight data, used for skeletal animation of skinned surfaces.
