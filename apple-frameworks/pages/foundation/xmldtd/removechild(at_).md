> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/removechild(at:)](https://developer.apple.com/documentation/foundation/xmldtd/removechild(at:))

# removeChild(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the child node at a particular location in the receiver’s list of children.

## Declaration

```swift
func removeChild(at index: Int)
```

## Parameters

- `index`: An integer identifying the child node to remove. The indices of subsequent children in the list are decremented by one.

<a id="Discussion"></a>

## Discussion

The removed child node is released.

## See Also

### Manipulating Child Nodes

- [addChild(\_:)](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren(\_:)](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

# removeChildAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the child node at a particular location in the receiver’s list of children.

## Declaration

```objectivec
- (void) removeChildAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An integer identifying the child node to remove. The indices of subsequent children in the list are decremented by one.

<a id="Discussion"></a>

## Discussion

The removed child node is released.

## See Also

### Manipulating Child Nodes

- [addChild:](addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren:](setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.
