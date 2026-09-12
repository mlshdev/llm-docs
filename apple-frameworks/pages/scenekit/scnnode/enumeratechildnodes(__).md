> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/enumeratechildnodes(_:)](https://developer.apple.com/documentation/scenekit/scnnode/enumeratechildnodes(_:))

# enumerateChildNodes(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Executes the specified block for each of the node’s child and descendant nodes.

## Declaration

```swift
func enumerateChildNodes(_ block: (SCNNode, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being evaluated.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

<a id="Discussion"></a>

## Discussion

SceneKit uses a recursive preorder traversal to process the child node subtree—that is, the block runs for a node before it runs for each of the node’s children, and it processes all children of a node before processing any of that node’s sibling nodes.

## See Also

### Searching the Node Hierarchy

- [childNodes(passingTest:)](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNode(withName:recursively:)](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateHierarchy(\_:)](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

# enumerateChildNodesUsingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Executes the specified block for each of the node’s child and descendant nodes.

## Declaration

```objectivec
- (void) enumerateChildNodesUsingBlock:(void (^)(SCNNode *child, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to the node’s child and descendant nodes.

  - The block takes two parameters:
  - - **child**: The child node currently being evaluated.

  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) in the block to abort further processing of the child node subtree.

<a id="Discussion"></a>

## Discussion

SceneKit uses a recursive preorder traversal to process the child node subtree—that is, the block runs for a node before it runs for each of the node’s children, and it processes all children of a node before processing any of that node’s sibling nodes.

## See Also

### Searching the Node Hierarchy

- [childNodesPassingTest:](childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNodeWithName:recursively:](childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateHierarchyUsingBlock:](enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.
