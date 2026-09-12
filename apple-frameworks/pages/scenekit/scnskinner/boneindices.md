> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/boneindices](https://developer.apple.com/documentation/scenekit/scnskinner/boneindices)

# boneIndices (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

## Declaration

```swift
var boneIndices: SCNGeometrySource { get }
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) property must be [boneIndices](../scngeometrysource/semantic-swift.struct/boneindices.md). Its data is an array of integer vectors, each of which corresponds to a weight vector in the [boneWeights](boneweights.md) geometry source. Each component in a vector specifies the index of the node in the [bones](bones.md) array for the corresponding bone weight component.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.

# boneIndices (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNGeometrySource * boneIndices;
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) property must be [SCNGeometrySourceSemanticBoneIndices](../scngeometrysource/semantic-swift.struct/boneindices.md). Its data is an array of integer vectors, each of which corresponds to a weight vector in the [boneWeights](boneweights.md) geometry source. Each component in a vector specifies the index of the node in the [bones](bones.md) array for the corresponding bone weight component.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
