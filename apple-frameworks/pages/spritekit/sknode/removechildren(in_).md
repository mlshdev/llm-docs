> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/removechildren(in:)](https://developer.apple.com/documentation/spritekit/sknode/removechildren(in:))

# removeChildren(in:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a list of children from the receiving node.

## Declaration

```swift
func removeChildren(in nodes: [SKNode])
```

## Parameters

- `nodes`: An array of `SKNode` objects that are all children of the receiving node.

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild(\_:)](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqual(to:)](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [move(toParent:)](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent()](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](removeallchildren%28%29.md): Removes all of the node’s children.
- [inParentHierarchy(\_:)](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

# removeChildrenInArray: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a list of children from the receiving node.

## Declaration

```objectivec
- (void) removeChildrenInArray:(NSArray<SKNode *> *) nodes;
```

## Parameters

- `nodes`: An array of `SKNode` objects that are all children of the receiving node.

## See Also

### Modifying the Node Tree

- [Accessing and Modifying the Node Tree](../accessing-and-modifying-the-node-tree.md): See the objects and functions you use to control the node tree’s composition.
- [addChild:](addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqualToNode:](isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [moveToParent:](move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent](removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](removeallchildren%28%29.md): Removes all of the node’s children.
- [inParentHierarchy:](inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.
