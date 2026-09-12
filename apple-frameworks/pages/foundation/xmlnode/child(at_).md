> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/child(at:)](https://developer.apple.com/documentation/foundation/xmlnode/child(at:))

# child(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child node of the receiver at the specified location.

## Declaration

```swift
func child(at index: Int) -> XMLNode?
```

## Parameters

- `index`: An integer specifying a node position in the receiver’s array of children. If `index` is out of bounds, an exception is raised.

<a id="return-value"></a>

## Return Value

An NSXMLNode object or `nil` f the receiver has no children.

<a id="Discussion"></a>

## Discussion

The receiver should be an `NSXMLNode` object representing a document, element, or document type declaration. The returned node object can represent an element, comment, text, or processing instruction.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [XMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [next](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previous](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach()](detach%28%29.md): Detaches the receiver from its parent node.

# childAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child node of the receiver at the specified location.

## Declaration

```objectivec
- (NSXMLNode *) childAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An integer specifying a node position in the receiver’s array of children. If `index` is out of bounds, an exception is raised.

<a id="return-value"></a>

## Return Value

An NSXMLNode object or `nil` f the receiver has no children.

<a id="Discussion"></a>

## Discussion

The receiver should be an `NSXMLNode` object representing a document, element, or document type declaration. The returned node object can represent an element, comment, text, or processing instruction.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [NSXMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextNode](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previousNode](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach](detach%28%29.md): Detaches the receiver from its parent node.
