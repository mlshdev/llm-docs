> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/addchildnode(_:)](https://developer.apple.com/documentation/scenekit/scnnode/addchildnode(_:))

# addChildNode(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds a node to the node’s array of children.

## Declaration

```swift
func addChildNode(_ child: SCNNode)
```

## Parameters

- `child`: The node to be added.

<a id="Discussion"></a>

## Discussion

Calling this method appends the node to the end of the [childNodes](childnodes.md) array.

## See Also

### Managing the Node Hierarchy

- [parent](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [insertChildNode(\_:at:)](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode()](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode(\_:with:)](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.

# addChildNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a node to the node’s array of children.

## Declaration

```objectivec
- (void) addChildNode:(SCNNode *) child;
```

## Parameters

- `child`: The node to be added.

<a id="Discussion"></a>

## Discussion

Calling this method appends the node to the end of the [childNodes](childnodes.md) array.

## See Also

### Managing the Node Hierarchy

- [parentNode](parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [insertChildNode:atIndex:](insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode](removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode:with:](replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.
