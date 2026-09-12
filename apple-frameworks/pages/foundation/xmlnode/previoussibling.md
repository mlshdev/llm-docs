> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/previoussibling](https://developer.apple.com/documentation/foundation/xmlnode/previoussibling)

# previousSibling (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the previous `NSXMLNode` object that is a sibling node to the receiver.

## Declaration

```swift
@NSCopying var previousSibling: XMLNode? { get }
```

<a id="Discussion"></a>

## Discussion

This object will have an [index](index.md) value that is one less than the receiver’s. If there are no more previous siblings (that is, other child nodes of the receiver’s parent) the method returns `nil`

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
- [detach()](detach%28%29.md): Detaches the receiver from its parent node.

# previousSibling (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the previous `NSXMLNode` object that is a sibling node to the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSXMLNode * previousSibling;
```

<a id="Discussion"></a>

## Discussion

This object will have an [index](index.md) value that is one less than the receiver’s. If there are no more previous siblings (that is, other child nodes of the receiver’s parent) the method returns `nil`

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
- [detach](detach%28%29.md): Detaches the receiver from its parent node.
