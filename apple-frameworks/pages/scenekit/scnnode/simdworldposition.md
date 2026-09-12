> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdworldposition](https://developer.apple.com/documentation/scenekit/scnnode/simdworldposition)

# simdWorldPosition (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s position relative to the scene’s world coordinate space.

## Declaration

```swift
var simdWorldPosition: simd_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

This vector isolates the translational aspect of the node’s [simdWorldTransform](simdworldtransform.md) matrix, which in turn is the conversion of the node’s [simdTransform](simdtransform.md) from local space to the scene’s world coordinate space. That is, it expresses the x, y, and z offsets of the node’s position from that of the scene’s [rootNode](../scnscene/rootnode.md), and is equivalent to reading the node’s [simdPosition](simdposition.md) vector and converting it to world space with the [simdConvertPosition(\_:from:)](simdconvertposition%28__from_%29.md) or [simdConvertPosition(\_:to:)](simdconvertposition%28__to_%29.md) method.

## See Also

### Related Documentation

- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.

### Managing Transforms in World Space

- [simdWorldTransform](simdworldtransform.md): The world transform applied to the node.
- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.

# simdWorldPosition (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The node’s position relative to the scene’s world coordinate space.

## Declaration

```objectivec
@property (nonatomic) simd_float3 simdWorldPosition;
```

<a id="Discussion"></a>

## Discussion

This vector isolates the translational aspect of the node’s [simdWorldTransform](simdworldtransform.md) matrix, which in turn is the conversion of the node’s [simdTransform](simdtransform.md) from local space to the scene’s world coordinate space. That is, it expresses the x, y, and z offsets of the node’s position from that of the scene’s [rootNode](../scnscene/rootnode.md), and is equivalent to reading the node’s [simdPosition](simdposition.md) vector and converting it to world space with the [simdConvertPosition:fromNode:](simdconvertposition%28__from_%29.md) or [simdConvertPosition:toNode:](simdconvertposition%28__to_%29.md) method.

## See Also

### Related Documentation

- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.

### Managing Transforms in World Space

- [simdWorldTransform](simdworldtransform.md): The world transform applied to the node.
- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
