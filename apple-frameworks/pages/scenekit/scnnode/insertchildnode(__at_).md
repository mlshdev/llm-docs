> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/insertchildnode(_:at:)](https://developer.apple.com/documentation/scenekit/scnnode/insertchildnode(_:at:))

# insertChildNode(\_:at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds a node to the node’s array of children at a specified index.

## Declaration

```swift
func insertChildNode(_ child: SCNNode, at index: Int)
```

## Parameters

- `child`: The node to be inserted.

  > **Important**

  >  Raises an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if `child` is `nil`.
- `index`: The position at which to insert the new child node.

  > **Important**

  >  Raises an exception ([rangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is greater than the number of elements in the node’s [childNodes](childnodes.md) array.

## See Also

### Managing the Node Hierarchy

- [parent](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode(\_:)](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [removeFromParentNode()](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode(\_:with:)](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.

# insertChildNode:atIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a node to the node’s array of children at a specified index.

## Declaration

```objectivec
- (void) insertChildNode:(SCNNode *) child atIndex:(NSUInteger) index;
```

## Parameters

- `child`: The node to be inserted.

  > **Important**

  >  Raises an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if `child` is `nil`.
- `index`: The position at which to insert the new child node.

  > **Important**

  >  Raises an exception ([NSRangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is greater than the number of elements in the node’s [childNodes](childnodes.md) array.

## See Also

### Managing the Node Hierarchy

- [parentNode](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode:](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [removeFromParentNode](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode:with:](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.
