> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/replacechild(at:with:)](https://developer.apple.com/documentation/foundation/xmldtd/replacechild(at:with:))

# replaceChild(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces a child at a particular index with another child.

## Declaration

```swift
func replaceChild(at index: Int, with node: XMLNode)
```

## Parameters

- `index`: An integer identifying the position of a node in the receiver’s list of child nodes.
- `node`: An [XMLNode](../xmlnode.md) object to replace the object at `index`.

<a id="Discussion"></a>

## Discussion

The replaced child node is released.

## See Also

### Manipulating Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [setChildren(\_:)](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

# replaceChildAtIndex:withNode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces a child at a particular index with another child.

## Declaration

```objectivec
- (void) replaceChildAtIndex:(NSUInteger) index withNode:(NSXMLNode *) node;
```

## Parameters

- `index`: An integer identifying the position of a node in the receiver’s list of child nodes.
- `node`: An [NSXMLNode](../xmlnode.md) object to replace the object at `index`.

<a id="Discussion"></a>

## Discussion

The replaced child node is released.

## See Also

### Manipulating Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [setChildren:](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.
