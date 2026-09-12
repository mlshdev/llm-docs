> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/insertchild(_:at:)](https://developer.apple.com/documentation/foundation/xmlelement/insertchild(_:at:))

# insertChild(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a new child node at a specified location in the receiver’s list of child nodes.

## Declaration

```swift
func insertChild(_ child: XMLNode, at index: Int)
```

## Parameters

- `child`: An XML node object to be inserted as a child of the receiver.
- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Insertion of the node increments the indexes of sibling nodes after it.

## See Also

### Manipulating Child Elements

- [addChild(\_:)](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

# insertChild:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a new child node at a specified location in the receiver’s list of child nodes.

## Declaration

```objectivec
- (void) insertChild:(NSXMLNode *) child atIndex:(NSUInteger) index;
```

## Parameters

- `child`: An XML node object to be inserted as a child of the receiver.
- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Insertion of the node increments the indexes of sibling nodes after it.

## See Also

### Manipulating Child Elements

- [addChild:](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren:](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA:](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.
