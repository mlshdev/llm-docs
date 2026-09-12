> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/childnodes(passingtest:)](https://developer.apple.com/documentation/scenekit/scnnode/childnodes(passingtest:))

# childNodes(passingTest:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.

## Declaration

```swift
func childNodes(passingTest predicate: (SCNNode, UnsafeMutablePointer<ObjCBool>) -> Bool) -> [SCNNode]
```

## Parameters

- `predicate`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being searched.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

  - The block returns a Boolean value indicating whether to include the `child` node in the search results array.

<a id="return-value"></a>

## Return Value

An array containing nodes that passed the test.

<a id="Discussion"></a>

## Discussion

Use this method to search for nodes using a test you specify. For example, you can search for empty nodes using a block that returns YES for nodes whose [light](light.md), [camera](camera.md), and [geometry](geometry.md) properties are all `nil`.

SceneKit uses a recursive preorder traversal to search the child node subtree—that is, the block searches a node before it searches each of the node’s children, and it searches all children of a node before searching any of that node’s sibling nodes.

## See Also

### Searching the Node Hierarchy

- [childNode(withName:recursively:)](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodes(\_:)](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchy(\_:)](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

# childNodesPassingTest: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.

## Declaration

```objectivec
- (NSArray<SCNNode *> *) childNodesPassingTest:(BOOL (^)(SCNNode *child, BOOL *stop)) predicate;
```

## Parameters

- `predicate`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being searched.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

  - The block returns a Boolean value indicating whether to include the `child` node in the search results array.

<a id="return-value"></a>

## Return Value

An array containing nodes that passed the test.

<a id="Discussion"></a>

## Discussion

Use this method to search for nodes using a test you specify. For example, you can search for empty nodes using a block that returns YES for nodes whose [light](light.md), [camera](camera.md), and [geometry](geometry.md) properties are all `nil`.

SceneKit uses a recursive preorder traversal to search the child node subtree—that is, the block searches a node before it searches each of the node’s children, and it searches all children of a node before searching any of that node’s sibling nodes.

## See Also

### Searching the Node Hierarchy

- [childNodeWithName:recursively:](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodesUsingBlock:](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchyUsingBlock:](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.
