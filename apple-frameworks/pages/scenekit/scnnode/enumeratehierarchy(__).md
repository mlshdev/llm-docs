> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/enumeratehierarchy(_:)](https://developer.apple.com/documentation/scenekit/scnnode/enumeratehierarchy(_:))

# enumerateHierarchy(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

## Declaration

```swift
func enumerateHierarchy(_ block: (SCNNode, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being evaluated.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

<a id="Discussion"></a>

## Discussion

SceneKit uses a recursive preorder traversal to process the child node subtree—that is, the block runs for a node before it runs for each of the node’s children, and it processes all children of a node before processing any of that node’s sibling nodes.

This method is equivalent to the [enumerateChildNodes(\_:)](enumeratechildnodes%28__%29.md) method, but unlike that method it also runs the block to process the node itself, not just its child nodes.

## See Also

### Searching the Node Hierarchy

- [childNodes(passingTest:)](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNode(withName:recursively:)](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodes(\_:)](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.

# enumerateHierarchyUsingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

## Declaration

```objectivec
- (void) enumerateHierarchyUsingBlock:(void (^)(SCNNode *node, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being evaluated.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

<a id="Discussion"></a>

## Discussion

SceneKit uses a recursive preorder traversal to process the child node subtree—that is, the block runs for a node before it runs for each of the node’s children, and it processes all children of a node before processing any of that node’s sibling nodes.

This method is equivalent to the [enumerateChildNodesUsingBlock:](enumeratechildnodes%28__%29.md) method, but unlike that method it also runs the block to process the node itself, not just its child nodes.

## See Also

### Searching the Node Hierarchy

- [childNodesPassingTest:](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNodeWithName:recursively:](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodesUsingBlock:](enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
