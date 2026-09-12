> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/replacechildnode(_:with:)](https://developer.apple.com/documentation/scenekit/scnnode/replacechildnode(_:with:))

# replaceChildNode(\_:with:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes a child from the node’s array of children and inserts another node in its place.

## Declaration

```swift
func replaceChildNode(_ oldChild: SCNNode, with newChild: SCNNode)
```

## Parameters

- `oldChild`: The existing child node to be replaced.
- `newChild`: The node with which to replace the child node.

  > **Important**

  >  Raises an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if `newChild` is `nil`.

<a id="Discussion"></a>

## Discussion

If both the `oldChild` and `newChild` nodes are children of the node, calling this method swaps their positions in the array. Note that removing a node from the node hierarchy may result in it being deallocated.

Calling this method results in undefined behavior if the `oldChild` parameter doesn’t refer to a child of this node.

## See Also

### Managing the Node Hierarchy

- [parent](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode(\_:)](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode(\_:at:)](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode()](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.

# replaceChildNode:with: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a child from the node’s array of children and inserts another node in its place.

## Declaration

```objectivec
- (void) replaceChildNode:(SCNNode *) oldChild with:(SCNNode *) newChild;
```

## Parameters

- `oldChild`: The existing child node to be replaced.
- `newChild`: The node with which to replace the child node.

  > **Important**

  >  Raises an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if `newChild` is `nil`.

<a id="Discussion"></a>

## Discussion

If both the `oldChild` and `newChild` nodes are children of the node, calling this method swaps their positions in the array. Note that removing a node from the node hierarchy may result in it being deallocated.

Calling this method results in undefined behavior if the `oldChild` parameter doesn’t refer to a child of this node.

## See Also

### Managing the Node Hierarchy

- [parentNode](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode:](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode:atIndex:](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
