> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/skeleton](https://developer.apple.com/documentation/scenekit/scnskinner/skeleton)

# skeleton (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The root node of the skinner object’s animation skeleton.

## Declaration

```swift
weak var skeleton: SCNNode? { get set }
```

<a id="Discussion"></a>

## Discussion

If you replace a skinner’s skeleton by assigning a different node to this property, the new skeleton must have the same structure as the skeleton it replaces. That is, the hierarchy of nodes must match, although the current state of each node may not.

## See Also

### Working with an Animation Skeleton

- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

# skeleton (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The root node of the skinner object’s animation skeleton.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) SCNNode * skeleton;
```

<a id="Discussion"></a>

## Discussion

If you replace a skinner’s skeleton by assigning a different node to this property, the new skeleton must have the same structure as the skeleton it replaces. That is, the hierarchy of nodes must match, although the current state of each node may not.

## See Also

### Working with an Animation Skeleton

- [bones](bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.
