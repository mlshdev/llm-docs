> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/name](https://developer.apple.com/documentation/spritekit/sknode/name)

# name (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node’s assignable name.

## Declaration

```swift
var name: String? { get set }
```

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

This property is used to identify a node in other parts of your game logic. For example, you might use this name as part of collision testing. You can also search for nodes in a tree by their name.

When choosing a name for a node, decide whether each node gets a unique name or whether some nodes will share a common name. If you give the node a unique name, you can find the node later by calling the [childNode(withName:)](childnode%28withname_%29.md) method. If a name is shared by multiple nodes, the name usually means that these are all a similar object type in your game. In this case, you can iterate over those objects by calling the [enumerateChildNodes(withName:using:)](enumeratechildnodes%28withname_using_%29.md) method.

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [childNode(withName:)](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodes(withName:using:)](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [subscript(\_:)](subscript%28__%29.md): Returns an array of nodes that match the name parameter.

# name (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node’s assignable name.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

This property is used to identify a node in other parts of your game logic. For example, you might use this name as part of collision testing. You can also search for nodes in a tree by their name.

When choosing a name for a node, decide whether each node gets a unique name or whether some nodes will share a common name. If you give the node a unique name, you can find the node later by calling the [childNodeWithName:](childnode%28withname_%29.md) method. If a name is shared by multiple nodes, the name usually means that these are all a similar object type in your game. In this case, you can iterate over those objects by calling the [enumerateChildNodesWithName:usingBlock:](enumeratechildnodes%28withname_using_%29.md) method.

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [childNodeWithName:](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodesWithName:usingBlock:](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns an array of nodes that match the name parameter.
