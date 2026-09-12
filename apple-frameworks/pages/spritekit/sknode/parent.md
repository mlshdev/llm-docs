> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/parent](https://developer.apple.com/documentation/spritekit/sknode/parent)

# parent (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node’s parent node.

## Declaration

```swift
var parent: SKNode? { get }
```

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If the node is not in a node tree, the value is `nil`.

## See Also

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [scene](scene.md): The scene node that contains this node.
- [children](children.md): The node’s children.

# parent (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node’s parent node.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKNode * parent;
```

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If the node is not in a node tree, the value is `nil`.

## See Also

### Accessing Related Nodes

- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md): Learn how a node conforms to its coordinate systems.
- [scene](scene.md): The scene node that contains this node.
- [children](children.md): The node’s children.
