> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/insertchild(_:at:)](https://developer.apple.com/documentation/foundation/xmldtd/insertchild(_:at:))

# insertChild(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a child node in the receiver’s list of children at a specific location in the list.

## Declaration

```swift
func insertChild(_ child: XMLNode, at index: Int)
```

## Parameters

- `child`: An XML-node object that represents the child to insert.
- `index`: An integer identifying the location in the receiver’s list of children to insert `child`. The indices of subsequent children in the list are incremented by one.

## See Also

### Manipulating Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren(\_:)](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

# insertChild:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a child node in the receiver’s list of children at a specific location in the list.

## Declaration

```objectivec
- (void) insertChild:(NSXMLNode *) child atIndex:(NSUInteger) index;
```

## Parameters

- `child`: An XML-node object that represents the child to insert.
- `index`: An integer identifying the location in the receiver’s list of children to insert `child`. The indices of subsequent children in the list are incremented by one.

## See Also

### Manipulating Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren:](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.
