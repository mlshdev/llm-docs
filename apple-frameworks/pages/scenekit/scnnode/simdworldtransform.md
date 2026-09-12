> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdworldtransform](https://developer.apple.com/documentation/scenekit/scnnode/simdworldtransform)

# simdWorldTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The world transform applied to the node.

## Declaration

```swift
var simdWorldTransform: simd_float4x4 { get set }
```

<a id="Discussion"></a>

## Discussion

A world transform is the node’s coordinate space transform relative to the scene’s coordinate space. This transform is the concatenation of the node’s [simdTransform](simdtransform.md) property with that of its parent node, the parent’s parent, and so on up to the [rootNode](../scnscene/rootnode.md) object of the scene.

## See Also

### Related Documentation

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [parent](parent.md): The node’s parent in the scene graph hierarchy.

### Managing Transforms in World Space

- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [simdWorldPosition](simdworldposition.md): The node’s position relative to the scene’s world coordinate space.

# simdWorldTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The world transform applied to the node.

## Declaration

```objectivec
@property (nonatomic) simd_float4x4 simdWorldTransform;
```

<a id="Discussion"></a>

## Discussion

A world transform is the node’s coordinate space transform relative to the scene’s coordinate space. This transform is the concatenation of the node’s [simdTransform](simdtransform.md) property with that of its parent node, the parent’s parent, and so on up to the [rootNode](../scnscene/rootnode.md) object of the scene.

## See Also

### Related Documentation

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [parentNode](parent.md): The node’s parent in the scene graph hierarchy.

### Managing Transforms in World Space

- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [simdWorldPosition](simdworldposition.md): The node’s position relative to the scene’s world coordinate space.
