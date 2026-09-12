> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/insertchildren(_:at:)](https://developer.apple.com/documentation/foundation/xmldocument/insertchildren(_:at:))

# insertChildren(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts an array of children at a specified position in the receiver’s array of children.

## Declaration

```swift
func insertChildren(_ children: [XMLNode], at index: Int)
```

## Parameters

- `children`: An array of [XMLNode](../xmlnode.md) objects representing comments, processing instructions, or the root element.
- `index`: An integer identifying the location in the receiver’s children array for insertion. The indexes of children after the new child are increased by `[children count`\]. If `index` is less than zero or greater than the number of children, an out-of-bounds exception is raised.

## See Also

### Adding and Removing Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets the child nodes of the receiver.

# insertChildren:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts an array of children at a specified position in the receiver’s array of children.

## Declaration

```objectivec
- (void) insertChildren:(NSArray<NSXMLNode *> *) children atIndex:(NSUInteger) index;
```

## Parameters

- `children`: An array of [NSXMLNode](../xmlnode.md) objects representing comments, processing instructions, or the root element.
- `index`: An integer identifying the location in the receiver’s children array for insertion. The indexes of children after the new child are increased by `[children count`\]. If `index` is less than zero or greater than the number of children, an out-of-bounds exception is raised.

## See Also

### Adding and Removing Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren:](setchildren%28__%29.md): Sets the child nodes of the receiver.
