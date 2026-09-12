> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/replacechild(at:with:)](https://developer.apple.com/documentation/foundation/xmlelement/replacechild(at:with:))

# replaceChild(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces a child node at a specified location with another child node.

## Declaration

```swift
func replaceChild(at index: Int, with node: XMLNode)
```

## Parameters

- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.
- `node`: An XML node object that will replace the current child.

<a id="Discussion"></a>

## Discussion

The replaced XML node object is released upon removal.

## See Also

### Manipulating Child Elements

- [addChild(\_:)](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [setChildren(\_:)](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

# replaceChildAtIndex:withNode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces a child node at a specified location with another child node.

## Declaration

```objectivec
- (void) replaceChildAtIndex:(NSUInteger) index withNode:(NSXMLNode *) node;
```

## Parameters

- `index`: An integer identifying a position in the receiver’s list of children. An exception is raised if `index` is out of bounds.
- `node`: An XML node object that will replace the current child.

<a id="Discussion"></a>

## Discussion

The replaced XML node object is released upon removal.

## See Also

### Manipulating Child Elements

- [addChild:](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [setChildren:](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA:](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.
