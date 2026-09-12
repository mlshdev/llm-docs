> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/insertchildren(_:at:)](https://developer.apple.com/documentation/foundation/xmldtd/insertchildren(_:at:))

# insertChildren(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts an array of child nodes at a specified location in the receiver’s list of children.

## Declaration

```swift
func insertChildren(_ children: [XMLNode], at index: Int)
```

## Parameters

- `children`: An array of [XMLNode](../xmlnode.md) objects to insert as children of the receiver.
- `index`: An integer identifying the location in the list of current children to make the insertion. The indices of subsequent children in the list are incremented by the number of inserted children.

## See Also

### Manipulating Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren(\_:)](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

# insertChildren:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts an array of child nodes at a specified location in the receiver’s list of children.

## Declaration

```objectivec
- (void) insertChildren:(NSArray<NSXMLNode *> *) children atIndex:(NSUInteger) index;
```

## Parameters

- `children`: An array of [NSXMLNode](../xmlnode.md) objects to insert as children of the receiver.
- `index`: An integer identifying the location in the list of current children to make the insertion. The indices of subsequent children in the list are incremented by the number of inserted children.

## See Also

### Manipulating Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren:](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.
