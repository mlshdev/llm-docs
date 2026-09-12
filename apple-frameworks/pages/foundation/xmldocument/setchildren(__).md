> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/setchildren(_:)](https://developer.apple.com/documentation/foundation/xmldocument/setchildren(_:))

# setChildren(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the child nodes of the receiver.

## Declaration

```swift
func setChildren(_ children: [XMLNode]?)
```

## Parameters

- `children`: An array of [XMLNode](../xmlnode.md) objects. Each of these objects must represent comments, processing instructions, or the root element; otherwise, an exception is raised. Pass in `nil` to remove all children.

## See Also

### Adding and Removing Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.

# setChildren: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the child nodes of the receiver.

## Declaration

```objectivec
- (void) setChildren:(NSArray<NSXMLNode *> *) children;
```

## Parameters

- `children`: An array of [NSXMLNode](../xmlnode.md) objects. Each of these objects must represent comments, processing instructions, or the root element; otherwise, an exception is raised. Pass in `nil` to remove all children.

## See Also

### Adding and Removing Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
