> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/childnode(withname:)](https://developer.apple.com/documentation/spritekit/sknode/childnode(withname:))

# childNode(withName:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches the children of the receiving node for a node with a specific name.

## Declaration

```swift
func childNode(withName name: String) -> SKNode?
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.

<a id="return-value"></a>

## Return Value

If a node object with that name is found, the method returns the node object. Otherwise, it returns `nil`.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If more than one child share the same name, the first node discovered is returned.

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [enumerateChildNodes(withName:using:)](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [subscript(\_:)](subscript%28__%29.md): Returns an array of nodes that match the name parameter.

# childNodeWithName: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches the children of the receiving node for a node with a specific name.

## Declaration

```objectivec
- (SKNode *) childNodeWithName:(NSString *) name;
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.

<a id="return-value"></a>

## Return Value

If a node object with that name is found, the method returns the node object. Otherwise, it returns `nil`.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

<a id="Discussion"></a>

## Discussion

If more than one child share the same name, the first node discovered is returned.

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [enumerateChildNodesWithName:usingBlock:](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns an array of nodes that match the name parameter.
