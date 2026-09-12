> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/name](https://developer.apple.com/documentation/scenekit/scnnode/name)

# name (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A name associated with the node.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a node to make managing your scene graph easier. Nodes loaded from a scene file may have names assigned by an artist using a 3D authoring tool. Use the [childNode(withName:recursively:)](childnode%28withname_recursively_%29.md) or [childNodes(passingTest:)](childnodes%28passingtest_%29.md) method to retrieve a node from a scene graph by its name, or the [SCNSceneSource](../scnscenesource.md) class to examine nodes in a scene file without loading its scene graph.

The names of nodes and their attached objects are saved when you export a scene to a file using its [write(to:options:delegate:progressHandler:)](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method, and appear in the Xcode scene editor. The SceneKit statistics view (see [showsStatistics](../scnscenerenderer/showsstatistics.md)) also shows the names of nodes with attached cameras.

## See Also

### Related Documentation

- [childNodes(passingTest:)](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNode(withName:recursively:)](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.

### Managing Node Content

- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# name (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A name associated with the node.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a node to make managing your scene graph easier. Nodes loaded from a scene file may have names assigned by an artist using a 3D authoring tool. Use the [childNodeWithName:recursively:](childnode%28withname_recursively_%29.md) or [childNodesPassingTest:](childnodes%28passingtest_%29.md) method to retrieve a node from a scene graph by its name, or the [SCNSceneSource](../scnscenesource.md) class to examine nodes in a scene file without loading its scene graph.

The names of nodes and their attached objects are saved when you export a scene to a file using its [writeToURL:options:delegate:progressHandler:](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method, and appear in the Xcode scene editor. The SceneKit statistics view (see [showsStatistics](../scnscenerenderer/showsstatistics.md)) also shows the names of nodes with attached cameras.

## See Also

### Related Documentation

- [childNodesPassingTest:](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNodeWithName:recursively:](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.

### Managing Node Content

- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
