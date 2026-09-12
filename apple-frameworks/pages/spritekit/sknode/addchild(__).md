> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/addchild(_:)](https://developer.apple.com/documentation/spritekit/sknode/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a node to the end of the receiver’s list of child nodes.

## Declaration

```swift
func addChild(_ node: SKNode)
```

## Parameters

- `node`: The node to add. The node must not already have a parent.

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqual(to:)](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [move(toParent:)](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent()](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildren(in:)](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy(\_:)](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

# addChild: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a node to the end of the receiver’s list of child nodes.

## Declaration

```objectivec
- (void) addChild:(SKNode *) node;
```

## Parameters

- `node`: The node to add. The node must not already have a parent.

## Mentioned In

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md)

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqualToNode:](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [moveToParent:](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildrenInArray:](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy:](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.
