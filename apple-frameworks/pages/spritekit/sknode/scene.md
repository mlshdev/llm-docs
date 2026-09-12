> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/scene](https://developer.apple.com/documentation/spritekit/sknode/scene)

# scene (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scene node that contains this node.

## Declaration

```swift
var scene: SKScene? { get }
```

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If the node is not embedded in a scene, the value is `nil`.

## See Also

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [parent](parent.md): The node’s parent node.
- [children](children.md): The node’s children.

# scene (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scene node that contains this node.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKScene * scene;
```

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If the node is not embedded in a scene, the value is `nil`.

## See Also

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [parent](parent.md): The node’s parent node.
- [children](children.md): The node’s children.
