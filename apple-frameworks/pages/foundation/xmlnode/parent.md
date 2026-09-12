> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/parent](https://developer.apple.com/documentation/foundation/xmlnode/parent)

# parent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the parent node of the receiver.

## Declaration

```swift
@NSCopying var parent: XMLNode? { get }
```

<a id="Discussion"></a>

## Discussion

Document nodes and standalone nodes (that is, the root of a detached branch of a tree) have no parent, and sending this message to them returns `nil`. A one-to-one relationship does not always exists between a parent and its children; although a namespace or attribute node cannot be a child, it still has a parent element.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [XMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [child(at:)](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [next](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previous](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach()](detach%28%29.md): Detaches the receiver from its parent node.

# parent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the parent node of the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSXMLNode * parent;
```

<a id="Discussion"></a>

## Discussion

Document nodes and standalone nodes (that is, the root of a detached branch of a tree) have no parent, and sending this message to them returns `nil`. A one-to-one relationship does not always exists between a parent and its children; although a namespace or attribute node cannot be a child, it still has a parent element.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [NSXMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [childAtIndex:](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextNode](next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previousNode](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach](detach%28%29.md): Detaches the receiver from its parent node.
