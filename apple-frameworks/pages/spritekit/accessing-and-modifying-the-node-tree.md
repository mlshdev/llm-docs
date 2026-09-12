> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/accessing-and-modifying-the-node-tree](https://developer.apple.com/documentation/spritekit/accessing-and-modifying-the-node-tree)

# Accessing and Modifying the Node Tree (Swift)

**Framework:** SpriteKit  
**Kind:** Article

See the objects and functions you use to control the node tree’s composition.

<a id="overview"></a>

## Overview

You create the node tree by creating parent-child relationships between nodes. Each node maintains an ordered list of children, referenced by reading the node’s `children` property. The order of the children in the tree affects many aspects of scene processing, including hit testing and rendering, so it’s important to organize the node tree appropriately.

| Method | Description |
| --- | --- |
| [addChild(\_:)](sknode/addchild%28__%29.md) | Adds a node to the end of the receiver’s list of child nodes. |
| [insertChild(\_:at:)](sknode/insertchild%28__at_%29.md) | Inserts a child into a specific position in the receiver’s list of child nodes. |
| [removeFromParent()](sknode/removefromparent%28%29.md) | Removes the receiving node from its parent. |

When you need to directly traverse the node tree, you use the properties in the following table to uncover the tree’s structure.

| Property | Description |
| --- | --- |
| [children](sknode/children.md) | The array of [SKNode](sknode.md) objects that are the receiving node’s children. |
| [parent](sknode/parent.md) | If the node is a child of another node, this property holds the parent. Otherwise, it holds `nil`. |
| [scene](sknode/scene.md) | If the node is included anywhere in a scene, this property returns the scene node that is the root of the tree. Otherwise it holds `nil`. |

## See Also

### Modifying the Node Tree

- [addChild(\_:)](sknode/addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild(\_:at:)](sknode/insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqual(to:)](sknode/isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [move(toParent:)](sknode/move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent()](sknode/removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren()](sknode/removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildren(in:)](sknode/removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy(\_:)](sknode/inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.

# Accessing and Modifying the Node Tree (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

See the objects and functions you use to control the node tree’s composition.

<a id="overview"></a>

## Overview

You create the node tree by creating parent-child relationships between nodes. Each node maintains an ordered list of children, referenced by reading the node’s `children` property. The order of the children in the tree affects many aspects of scene processing, including hit testing and rendering, so it’s important to organize the node tree appropriately.

| Method | Description |
| --- | --- |
| [addChild:](sknode/addchild%28__%29.md) | Adds a node to the end of the receiver’s list of child nodes. |
| [insertChild:atIndex:](sknode/insertchild%28__at_%29.md) | Inserts a child into a specific position in the receiver’s list of child nodes. |
| [removeFromParent](sknode/removefromparent%28%29.md) | Removes the receiving node from its parent. |

When you need to directly traverse the node tree, you use the properties in the following table to uncover the tree’s structure.

| Property | Description |
| --- | --- |
| [children](sknode/children.md) | The array of [SKNode](sknode.md) objects that are the receiving node’s children. |
| [parent](sknode/parent.md) | If the node is a child of another node, this property holds the parent. Otherwise, it holds `nil`. |
| [scene](sknode/scene.md) | If the node is included anywhere in a scene, this property returns the scene node that is the root of the tree. Otherwise it holds `nil`. |

## See Also

### Modifying the Node Tree

- [addChild:](sknode/addchild%28__%29.md): Adds a node to the end of the receiver’s list of child nodes.
- [insertChild:atIndex:](sknode/insertchild%28__at_%29.md): Inserts a node into a specific position in the receiver’s list of child nodes.
- [isEqualToNode:](sknode/isequal%28to_%29.md): Compares the parameter node to the receiving node.
- [moveToParent:](sknode/move%28toparent_%29.md): Moves the node to a new parent node in the scene.
- [removeFromParent](sknode/removefromparent%28%29.md): Removes the receiving node from its parent.
- [removeAllChildren](sknode/removeallchildren%28%29.md): Removes all of the node’s children.
- [removeChildrenInArray:](sknode/removechildren%28in_%29.md): Removes a list of children from the receiving node.
- [inParentHierarchy:](sknode/inparenthierarchy%28__%29.md): Returns a Boolean value that indicates whether the node is a descendant of the target node.
