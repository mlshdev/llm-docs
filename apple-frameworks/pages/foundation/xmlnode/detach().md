> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/detach()](https://developer.apple.com/documentation/foundation/xmlnode/detach())

# detach() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Detaches the receiver from its parent node.

## Declaration

```swift
func detach()
```

<a id="Discussion"></a>

## Discussion

This method is applicable to `NSXMLNode` objects representing elements, text, comments, processing instructions, attributes, and namespaces. Once the node object is detached, you can add it as a child node of another parent.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [XMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [child(at:)](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [next](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previous](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.

# detach (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Detaches the receiver from its parent node.

## Declaration

```objectivec
- (void) detach;
```

<a id="Discussion"></a>

## Discussion

This method is applicable to `NSXMLNode` objects representing elements, text, comments, processing instructions, attributes, and namespaces. Once the node object is detached, you can add it as a child node of another parent.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [NSXMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [childAtIndex:](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextNode](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previousNode](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
