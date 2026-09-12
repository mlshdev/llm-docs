> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/parent](https://developer.apple.com/documentation/scenekit/scnnode/parent)

# parent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node’s parent in the scene graph hierarchy.

## Declaration

```swift
var parent: SCNNode? { get }
```

<a id="Discussion"></a>

## Discussion

For a scene’s [rootNode](../scnscene/rootnode.md) object, the value of this property is `nil`.

## See Also

### Managing the Node Hierarchy

- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode(\_:)](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode(\_:at:)](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode()](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode(\_:with:)](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.

# parentNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node’s parent in the scene graph hierarchy.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SCNNode * parentNode;
```

<a id="Discussion"></a>

## Discussion

For a scene’s [rootNode](../scnscene/rootnode.md) object, the value of this property is `nil`.

## See Also

### Managing the Node Hierarchy

- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode:](addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode:atIndex:](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode:with:](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.
