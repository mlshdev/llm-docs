> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/isequal(to:)](https://developer.apple.com/documentation/spritekit/sknode/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares the parameter node to the receiving node.

## Declaration

```swift
func isEqual(to node: SKNode) -> Bool
```

## Parameters

- `node`: The node to compare to the receiving node.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node is a descendant of the `parent` node; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild(\_:)](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [move(toParent:)](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent()](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildren(in:)](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy(\_:)](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

# isEqualToNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares the parameter node to the receiving node.

## Declaration

```objectivec
- (BOOL) isEqualToNode:(SKNode *) node;
```

## Parameters

- `node`: The node to compare to the receiving node.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node is a descendant of the `parent` node; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild:](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [moveToParent:](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildrenInArray:](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy:](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.
