> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/setchildren(_:)](https://developer.apple.com/documentation/foundation/xmldtd/setchildren(_:))

# setChildren(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes all existing children of the receiver and replaces them with an array of new child nodes.

## Declaration

```swift
func setChildren(_ children: [XMLNode]?)
```

## Parameters

- `children`: An array of [XMLNode](../xmlnode.md) objects. To remove all existing children, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Replaced or removed child nodes are released.

## See Also

### Manipulating Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.

# setChildren: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes all existing children of the receiver and replaces them with an array of new child nodes.

## Declaration

```objectivec
- (void) setChildren:(NSArray<NSXMLNode *> *) children;
```

## Parameters

- `children`: An array of [NSXMLNode](../xmlnode.md) objects. To remove all existing children, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Replaced or removed child nodes are released.

## See Also

### Manipulating Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
