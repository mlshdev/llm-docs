> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/normalizeadjacenttextnodespreservingcdata(_:)](https://developer.apple.com/documentation/foundation/xmlelement/normalizeadjacenttextnodespreservingcdata(_:))

# normalizeAdjacentTextNodesPreservingCDATA(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

## Declaration

```swift
func normalizeAdjacentTextNodesPreservingCDATA(_ preserve: Bool)
```

## Parameters

- `preserve`: [true](https://developer.apple.com/documentation/swift/true) if CDATA sections are left alone as text nodes, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A text node with a value of an empty string is removed. When you process an input source of XML, adjacent text nodes are automatically normalized. You should invoke this method (with `preserve` as [false](https://developer.apple.com/documentation/swift/false)) before using the [XMLNode](../xmlnode.md) methods [objects(forXQuery:constants:)](../xmlnode/objects%28forxquery_constants_%29.md) or [nodes(forXPath:)](../xmlnode/nodes%28forxpath_%29.md).

## See Also

### Manipulating Child Elements

- [addChild(\_:)](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren(\_:)](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.

# normalizeAdjacentTextNodesPreservingCDATA: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

## Declaration

```objectivec
- (void) normalizeAdjacentTextNodesPreservingCDATA:(BOOL) preserve;
```

## Parameters

- `preserve`: [true](https://developer.apple.com/documentation/swift/true) if CDATA sections are left alone as text nodes, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A text node with a value of an empty string is removed. When you process an input source of XML, adjacent text nodes are automatically normalized. You should invoke this method (with `preserve` as [false](https://developer.apple.com/documentation/swift/false)) before using the [NSXMLNode](../xmlnode.md) methods [objectsForXQuery:constants:error:](../xmlnode/objects%28forxquery_constants_%29.md) or [nodesForXPath:error:](../xmlnode/nodes%28forxpath_%29.md).

## See Also

### Manipulating Child Elements

- [addChild:](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren:](setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
