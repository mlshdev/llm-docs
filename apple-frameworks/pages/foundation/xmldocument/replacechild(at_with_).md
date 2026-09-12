> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/replacechild(at:with:)](https://developer.apple.com/documentation/foundation/xmldocument/replacechild(at:with:))

# replaceChild(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces the child node of the receiver located at a specified position in its array of children with another node.

## Declaration

```swift
func replaceChild(at index: Int, with node: XMLNode)
```

## Parameters

- `index`: An integer identifying a position in the receiver’s array of children. If `index` is less than zero or greater than the number of children minus one, an out-of-bounds exception is raised.
- `node`: An [XMLNode](../xmlnode.md) object to replace the one at `index`; it must represent a comment, a processing instruction, or the root element.

<a id="Discussion"></a>

## Discussion

The removed `NSXMLNode` object is autoreleased.

## See Also

### Adding and Removing Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [setChildren(\_:)](setchildren%28__%29.md): Sets the child nodes of the receiver.

# replaceChildAtIndex:withNode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces the child node of the receiver located at a specified position in its array of children with another node.

## Declaration

```objectivec
- (void) replaceChildAtIndex:(NSUInteger) index withNode:(NSXMLNode *) node;
```

## Parameters

- `index`: An integer identifying a position in the receiver’s array of children. If `index` is less than zero or greater than the number of children minus one, an out-of-bounds exception is raised.
- `node`: An [NSXMLNode](../xmlnode.md) object to replace the one at `index`; it must represent a comment, a processing instruction, or the root element.

<a id="Discussion"></a>

## Discussion

The removed `NSXMLNode` object is autoreleased.

## See Also

### Adding and Removing Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [setChildren:](setchildren%28__%29.md): Sets the child nodes of the receiver.
