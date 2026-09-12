> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/worldtransform](https://developer.apple.com/documentation/scenekit/scnnode/worldtransform)

# worldTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The world transform applied to the node.

## Declaration

```swift
var worldTransform: SCNMatrix4 { get }
```

```swift
var worldTransform: SCNMatrix4 { get }
```

<a id="Discussion"></a>

## Discussion

A world transform is the node’s coordinate space transform relative to the scene’s coordinate space. This transform is the concatenation of the node’s [transform](transform.md) property with that of its parent node, the parent’s parent, and so on up to the [rootNode](../scnscene/rootnode.md) object of the scene.

> **Note**

>  In macOS 10.13, iOS 11, tvOS 11, or watchOS 4 (and later), you can set this value with the [setWorldTransform(\_:)](setworldtransform%28__%29.md) method.

## See Also

### Related Documentation

- [simdWorldTransform](simdworldtransform.md): The world transform applied to the node.
- [parent](parent.md): The node’s parent in the scene graph hierarchy.

### Managing Transforms in World Space (SceneKit Types)

- [setWorldTransform(\_:)](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.

# worldTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The world transform applied to the node.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMatrix4 worldTransform;
```

```objectivec
@property (nonatomic, readonly) SCNMatrix4 worldTransform;
```

<a id="Discussion"></a>

## Discussion

A world transform is the node’s coordinate space transform relative to the scene’s coordinate space. This transform is the concatenation of the node’s [transform](transform.md) property with that of its parent node, the parent’s parent, and so on up to the [rootNode](../scnscene/rootnode.md) object of the scene.

> **Note**

>  In macOS 10.13, iOS 11, tvOS 11, or watchOS 4 (and later), you can set this value with the [setWorldTransform:](setworldtransform%28__%29.md) method.

## See Also

### Related Documentation

- [simdWorldTransform](simdworldtransform.md): The world transform applied to the node.
- [parentNode](parent.md): The node’s parent in the scene graph hierarchy.

### Managing Transforms in World Space (SceneKit Types)

- [setWorldTransform:](setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [worldPosition](worldposition.md): The node’s position relative to the scene’s world coordinate space.
