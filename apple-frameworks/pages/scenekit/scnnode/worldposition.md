> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/worldposition](https://developer.apple.com/documentation/scenekit/scnnode/worldposition)

# worldPosition (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s position relative to the scene’s world coordinate space.

## Declaration

```swift
var worldPosition: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

This vector isolates the translational aspect of the node’s [worldTransform](worldtransform.md) matrix, which in turn is the conversion of the node’s [transform](transform.md) from local space to the scene’s world coordinate space. That is, it expresses the x, y, and z offsets of the node’s position from that of the scene’s [rootNode](../scnscene/rootnode.md), and is equivalent to reading the node’s [position](position.md) vector and converting it to world space with the [convertPosition(\_:from:)](convertposition%28__from_%29.md) or [convertPosition(\_:to:)](convertposition%28__to_%29.md) method.

## See Also

### Related Documentation

- [simdWorldPosition](simdworldposition.md): The node’s position relative to the scene’s world coordinate space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [setWorldTransform(\_:)](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.

# worldPosition (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The node’s position relative to the scene’s world coordinate space.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 worldPosition;
```

<a id="Discussion"></a>

## Discussion

This vector isolates the translational aspect of the node’s [worldTransform](worldtransform.md) matrix, which in turn is the conversion of the node’s [transform](transform.md) from local space to the scene’s world coordinate space. That is, it expresses the x, y, and z offsets of the node’s position from that of the scene’s [rootNode](../scnscene/rootnode.md), and is equivalent to reading the node’s [position](position.md) vector and converting it to world space with the [convertPosition:fromNode:](convertposition%28__from_%29.md) or [convertPosition:toNode:](convertposition%28__to_%29.md) method.

## See Also

### Related Documentation

- [simdWorldPosition](simdworldposition.md): The node’s position relative to the scene’s world coordinate space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [setWorldTransform:](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
