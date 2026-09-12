> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/boneweights](https://developer.apple.com/documentation/scenekit/scnskinner/boneweights)

# boneWeights (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry source that defines the influence of each bone on the positions the geometry’s vertices.

## Declaration

```swift
var boneWeights: SCNGeometrySource { get }
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) property must be [boneWeights](../scngeometrysource/semantic-swift.struct/boneweights.md). Its data is an array of floating-point vectors, whose [componentsPerVector](../scngeometrysource/componentspervector.md) count is the number of bones influencing each vertex. Each vector corresponds to a vertex in the geometry’s [vertex](../scngeometrysource/semantic-swift.struct/vertex.md) geometry source, and each component in a vector specifies the influence of a bone on that vertex’s position. The [boneIndices](boneindices.md) source determines which nodes in the bones array correspond to each component in the vector. A component value of `0.0` means that the bone has no influence on that vertex; positive or negative values scale the transformation of a bone node before SceneKit applies that transformation to the vertex.

> **Note**

>  SceneKit performs skeletal animation on the GPU only if the [componentsPerVector](../scngeometrysource/componentspervector.md) count in this geometry source is `4` or less. Larger vectors result in CPU-based animation and drastically reduced rendering performance.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

# boneWeights (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The geometry source that defines the influence of each bone on the positions the geometry’s vertices.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNGeometrySource * boneWeights;
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) property must be [SCNGeometrySourceSemanticBoneWeights](../scngeometrysource/semantic-swift.struct/boneweights.md). Its data is an array of floating-point vectors, whose [componentsPerVector](../scngeometrysource/componentspervector.md) count is the number of bones influencing each vertex. Each vector corresponds to a vertex in the geometry’s [SCNGeometrySourceSemanticVertex](../scngeometrysource/semantic-swift.struct/vertex.md) geometry source, and each component in a vector specifies the influence of a bone on that vertex’s position. The [boneIndices](boneindices.md) source determines which nodes in the bones array correspond to each component in the vector. A component value of `0.0` means that the bone has no influence on that vertex; positive or negative values scale the transformation of a bone node before SceneKit applies that transformation to the vertex.

> **Note**

>  SceneKit performs skeletal animation on the GPU only if the [componentsPerVector](../scngeometrysource/componentspervector.md) count in this geometry source is `4` or less. Larger vectors result in CPU-based animation and drastically reduced rendering performance.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.
