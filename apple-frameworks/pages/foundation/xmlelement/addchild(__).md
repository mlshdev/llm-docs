> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/addchild(_:)](https://developer.apple.com/documentation/foundation/xmlelement/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a child node at the end of the receiver’s current list of children.

## Declaration

```swift
func addChild(_ child: XMLNode)
```

## Parameters

- `child`: An XML node object to add to the receiver’s children.

<a id="Discussion"></a>

## Discussion

The new node has an index value that is one greater than the last of the current children.

## See Also

### Manipulating Child Elements

- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

# addChild: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a child node at the end of the receiver’s current list of children.

## Declaration

```objectivec
- (void) addChild:(NSXMLNode *) child;
```

## Parameters

- `child`: An XML node object to add to the receiver’s children.

<a id="Discussion"></a>

## Discussion

The new node has an index value that is one greater than the last of the current children.

## See Also

### Manipulating Child Elements

- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren:](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA:](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.
