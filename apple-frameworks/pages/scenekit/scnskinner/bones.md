> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/bones](https://developer.apple.com/documentation/scenekit/scnskinner/bones)

# bones (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The control nodes of the animation skeleton.

## Declaration

```swift
var bones: [SCNNode] { get }
```

<a id="Discussion"></a>

## Discussion

An array of [SCNNode](../scnnode.md) objects, each of which represents a control point of the animation skeleton. Moving a node deforms the surface of the skinner’s geometry, based on the skeleton data from which the skinner object was created.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

# bones (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The control nodes of the animation skeleton.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNNode *> * bones;
```

<a id="Discussion"></a>

## Discussion

An array of [SCNNode](../scnnode.md) objects, each of which represents a control point of the animation skeleton. Moving a node deforms the surface of the skinner’s geometry, based on the skeleton data from which the skinner object was created.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [boneInverseBindTransforms](boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.
