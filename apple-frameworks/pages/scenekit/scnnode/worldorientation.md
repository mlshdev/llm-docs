> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/worldorientation](https://developer.apple.com/documentation/scenekit/scnnode/worldorientation)

# worldOrientation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s orientation relative to the scene’s world coordinate space.

## Declaration

```swift
var worldOrientation: SCNQuaternion { get set }
```

<a id="Discussion"></a>

## Discussion

This quaternion isolates the rotational aspect of the node’s [worldTransform](worldtransform.md) matrix, which in turn is the conversion of the node’s [transform](transform.md) from local space to the scene’s world coordinate space. That is, it expresses the difference in axis and angle of rotation between the node and the scene’s [rootNode](../scnscene/rootnode.md).

## See Also

### Related Documentation

- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [setWorldTransform(\_:)](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.

# worldOrientation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The node’s orientation relative to the scene’s world coordinate space.

## Declaration

```objectivec
@property (nonatomic) SCNQuaternion worldOrientation;
```

<a id="Discussion"></a>

## Discussion

This quaternion isolates the rotational aspect of the node’s [worldTransform](worldtransform.md) matrix, which in turn is the conversion of the node’s [transform](transform.md) from local space to the scene’s world coordinate space. That is, it expresses the difference in axis and angle of rotation between the node and the scene’s [rootNode](../scnscene/rootnode.md).

## See Also

### Related Documentation

- [simdWorldOrientation](simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](worldtransform.md): The world transform applied to the node.
- [setWorldTransform:](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.
