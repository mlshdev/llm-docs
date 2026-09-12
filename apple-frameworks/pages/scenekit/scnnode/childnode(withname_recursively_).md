> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/childnode(withname:recursively:)](https://developer.apple.com/documentation/scenekit/scnnode/childnode(withname:recursively:))

# childNode(withName:recursively:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the first node in the node’s child node subtree with the specified name.

## Declaration

```swift
func childNode(withName name: String, recursively: Bool) -> SCNNode?
```

## Parameters

- `name`: The name of the node to search for.
- `recursively`: [true](https://developer.apple.com/documentation/swift/true) to search the entire child node subtree, or [false](https://developer.apple.com/documentation/swift/false) to search only the node’s immediate children.

<a id="Discussion"></a>

## Discussion

If the `recursive` parameter is [true](https://developer.apple.com/documentation/swift/true), SceneKit uses a preorder traversal to search the child node subtree—that is, the block searches a node before it searches each of the node’s children, and it searches all children of a node before searching any of that node’s sibling nodes. Otherwise, SceneKit searches only those nodes in the node’s [childNodes](childnodes.md) array.

## See Also

### Searching the Node Hierarchy

- [childNodes(passingTest:)](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [enumerateChildNodes(\_:)](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchy(\_:)](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

# childNodeWithName:recursively: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the first node in the node’s child node subtree with the specified name.

## Declaration

```objectivec
- (SCNNode *) childNodeWithName:(NSString *) name recursively:(BOOL) recursively;
```

## Parameters

- `name`: The name of the node to search for.
- `recursively`: [true](https://developer.apple.com/documentation/swift/true) to search the entire child node subtree, or [false](https://developer.apple.com/documentation/swift/false) to search only the node’s immediate children.

<a id="Discussion"></a>

## Discussion

If the `recursive` parameter is [true](https://developer.apple.com/documentation/swift/true), SceneKit uses a preorder traversal to search the child node subtree—that is, the block searches a node before it searches each of the node’s children, and it searches all children of a node before searching any of that node’s sibling nodes. Otherwise, SceneKit searches only those nodes in the node’s [childNodes](childnodes.md) array.

## See Also

### Searching the Node Hierarchy

- [childNodesPassingTest:](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [enumerateChildNodesUsingBlock:](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchyUsingBlock:](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.
