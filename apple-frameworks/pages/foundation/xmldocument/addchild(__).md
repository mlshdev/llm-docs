> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/addchild(_:)](https://developer.apple.com/documentation/foundation/xmldocument/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a child node after the last of the receiver’s existing children.

## Declaration

```swift
func addChild(_ child: XMLNode)
```

## Parameters

- `child`: The [XMLNode](../xmlnode.md) object to be added.

## See Also

### Adding and Removing Child Nodes

- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets the child nodes of the receiver.

# addChild: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a child node after the last of the receiver’s existing children.

## Declaration

```objectivec
- (void) addChild:(NSXMLNode *) child;
```

## Parameters

- `child`: The [NSXMLNode](../xmlnode.md) object to be added.

## See Also

### Adding and Removing Child Nodes

- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren:](setchildren%28__%29.md): Sets the child nodes of the receiver.
