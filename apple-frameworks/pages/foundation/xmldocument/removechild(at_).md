> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/removechild(at:)](https://developer.apple.com/documentation/foundation/xmldocument/removechild(at:))

# removeChild(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the child node of the receiver located at a specified position in its array of children.

## Declaration

```swift
func removeChild(at index: Int)
```

## Parameters

- `index`: An integer identifying the position of an child in the receiver’s array. If `index` is less than zero or greater than the number of children minus one, an out-of-bounds exception is raised.

<a id="Discussion"></a>

## Discussion

Subsequent children have their indexes decreased by one. The removed [XMLNode](../xmlnode.md) object is autoreleased.

## See Also

### Adding and Removing Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets the child nodes of the receiver.

# removeChildAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the child node of the receiver located at a specified position in its array of children.

## Declaration

```objectivec
- (void) removeChildAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An integer identifying the position of an child in the receiver’s array. If `index` is less than zero or greater than the number of children minus one, an out-of-bounds exception is raised.

<a id="Discussion"></a>

## Discussion

Subsequent children have their indexes decreased by one. The removed [NSXMLNode](../xmlnode.md) object is autoreleased.

## See Also

### Adding and Removing Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren:](setchildren%28__%29.md): Sets the child nodes of the receiver.
