> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/setchildren(_:)](https://developer.apple.com/documentation/foundation/xmlelement/setchildren(_:))

# setChildren(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all child nodes of the receiver at once, replacing any existing children.

## Declaration

```swift
func setChildren(_ children: [XMLNode]?)
```

## Parameters

- `children`: An array of `NSXMLElement` objects or [XMLNode](../xmlnode.md) objects of kinds [XMLNode.Kind.element](../xmlnode/kind-swift.enum/element.md), [XMLNode.Kind.processingInstruction](../xmlnode/kind-swift.enum/processinginstruction.md), [XMLNode.Kind.text](../xmlnode/kind-swift.enum/text.md), or [XMLNode.Kind.comment](../xmlnode/kind-swift.enum/comment.md).

<a id="Discussion"></a>

## Discussion

Send this message with `children` as `nil` to remove all child nodes.

## See Also

### Manipulating Child Elements

- [addChild(\_:)](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren(\_:at:)](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

# setChildren: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all child nodes of the receiver at once, replacing any existing children.

## Declaration

```objectivec
- (void) setChildren:(NSArray<NSXMLNode *> *) children;
```

## Parameters

- `children`: An array of `NSXMLElement` objects or [NSXMLNode](../xmlnode.md) objects of kinds [NSXMLElementKind](../xmlnode/kind-swift.enum/element.md), [NSXMLProcessingInstructionKind](../xmlnode/kind-swift.enum/processinginstruction.md), [NSXMLTextKind](../xmlnode/kind-swift.enum/text.md), or [NSXMLCommentKind](../xmlnode/kind-swift.enum/comment.md).

<a id="Discussion"></a>

## Discussion

Send this message with `children` as `nil` to remove all child nodes.

## See Also

### Manipulating Child Elements

- [addChild:](addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren:atIndex:](insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [normalizeAdjacentTextNodesPreservingCDATA:](normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.
