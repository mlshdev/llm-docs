> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/subscript(_:)](https://developer.apple.com/documentation/spritekit/sknode/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Subscript  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of nodes that match the name parameter.

## Declaration

```swift
subscript(name: String) -> [SKNode] { get }
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.

<a id="return-value"></a>

## Return Value

An array of `SKNode` objects that match the name. If no matching nodes are found, an empty array is returned.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [childNode(withName:)](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodes(withName:using:)](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.

# objectForKeyedSubscript: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of nodes that match the name parameter.

## Declaration

```objectivec
- (NSArray<SKNode *> *) objectForKeyedSubscript:(NSString *) name;
```

## Parameters

- `name`: The name to search for. This may be either the literal name of the node or a customized search string. See `Searching the Node Tree`.

<a id="return-value"></a>

## Return Value

An array of `SKNode` objects that match the name. If no matching nodes are found, an empty array is returned.

## Mentioned In

- [Searching the Node Tree](../searching-the-node-tree.md)

## See Also

### Accessing Nodes by Name

- [Searching the Node Tree](../searching-the-node-tree.md): Access nodes by name to avoid needing an instance variable.
- [name](name.md): The node’s assignable name.
- [childNodeWithName:](childnode%28withname_%29.md): Searches the children of the receiving node for a node with a specific name.
- [enumerateChildNodesWithName:usingBlock:](enumeratechildnodes%28withname_using_%29.md): Searches the children of the receiving node to perform processing for nodes that share a name.
