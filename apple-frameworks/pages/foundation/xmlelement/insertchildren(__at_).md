> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/insertchildren(_:at:)](https://developer.apple.com/documentation/foundation/xmlelement/insertchildren(_:at:))

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

- `children`: An array of XML node objects to add as children of the receiver.
- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Insertion of the node increases the indexes of sibling nodes after it by the count of `children`.

## See Also

### Manipulating Child Elements

- [addChild(\_:)](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

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

- `children`: An array of XML node objects to add as children of the receiver.
- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Insertion of the node increases the indexes of sibling nodes after it by the count of `children`.

## See Also

### Manipulating Child Elements

- [addChild:](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren:](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA:](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.
