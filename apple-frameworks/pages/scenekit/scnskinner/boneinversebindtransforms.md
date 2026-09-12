> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/boneinversebindtransforms](https://developer.apple.com/documentation/scenekit/scnskinner/boneinversebindtransforms)

# boneInverseBindTransforms (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The default transforms for the animation skeleton’s bone nodes.

## Declaration

```swift
var boneInverseBindTransforms: [NSValue]? { get }
```

<a id="Discussion"></a>

## Discussion

An array of [NSValue](../../foundation/nsvalue.md) objects containing [SCNMatrix4](../scnmatrix4-swift.struct.md) transforms, each of which corresponds to a node in the [bones](bones.md) array. Each value is the inverse of the bone node’s transform from bind space (that is, of the concatenation of all transforms from the skeleton root down to that bone) in the skeleton’s default pose.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

# boneInverseBindTransforms (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The default transforms for the animation skeleton’s bone nodes.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSValue *> * boneInverseBindTransforms;
```

<a id="Discussion"></a>

## Discussion

An array of [NSValue](../../foundation/nsvalue.md) objects containing [SCNMatrix4](../scnmatrix4-swift.struct.md) transforms, each of which corresponds to a node in the [bones](bones.md) array. Each value is the inverse of the bone node’s transform from bind space (that is, of the concatenation of all transforms from the skeleton root down to that bone) in the skeleton’s default pose.

## See Also

### Working with an Animation Skeleton

- [skeleton](skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](bones.md): The control nodes of the animation skeleton.
- [boneWeights](boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.
