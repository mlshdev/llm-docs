> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/move(toparent:)](https://developer.apple.com/documentation/spritekit/sknode/move(toparent:))

# move(toParent:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves the node to a new parent node in the scene.

## Declaration

```swift
func move(toParent parent: SKNode)
```

## Parameters

- `parent`: An [SKNode](../sknode.md) object to move the receiver to. This node must be in the same scene as the node’s current parent.

<a id="Discussion"></a>

## Discussion

The node maintains its current position in scene coordinates.

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild(\_:)](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqual(to:)](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [removeFromParent()](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildren(in:)](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy(\_:)](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

# moveToParent: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves the node to a new parent node in the scene.

## Declaration

```objectivec
- (void) moveToParent:(SKNode *) parent;
```

## Parameters

- `parent`: An [SKNode](../sknode.md) object to move the receiver to. This node must be in the same scene as the node’s current parent.

<a id="Discussion"></a>

## Discussion

The node maintains its current position in scene coordinates.

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild:](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqualToNode:](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [removeFromParent](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildrenInArray:](removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy:](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.
