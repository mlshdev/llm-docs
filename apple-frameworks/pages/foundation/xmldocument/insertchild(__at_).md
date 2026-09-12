> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/insertchild(_:at:)](https://developer.apple.com/documentation/foundation/xmldocument/insertchild(_:at:))

# insertChild(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a node object at specified position in the receiver’s array of children.

## Declaration

```swift
func insertChild(_ child: XMLNode, at index: Int)
```

## Parameters

- `child`: The [XMLNode](../xmlnode.md) object to be inserted. The added node must be an `NSXMLNode` object representing a comment, processing instruction, or the root element.
- `index`: An integer specifying the index of the children array to insert `child`. The indexes of children after the new child are incremented. If `index` is less than zero or greater than the number of children, an out-of-bounds exception is raised.

## See Also

### Adding and Removing Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets the child nodes of the receiver.

# insertChild:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a node object at specified position in the receiver’s array of children.

## Declaration

```objectivec
- (void) insertChild:(NSXMLNode *) child atIndex:(NSUInteger) index;
```

## Parameters

- `child`: The [NSXMLNode](../xmlnode.md) object to be inserted. The added node must be an `NSXMLNode` object representing a comment, processing instruction, or the root element.
- `index`: An integer specifying the index of the children array to insert `child`. The indexes of children after the new child are incremented. If `index` is less than zero or greater than the number of children, an out-of-bounds exception is raised.

## See Also

### Adding and Removing Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren:](setchildren%28__%29.md): Sets the child nodes of the receiver.
