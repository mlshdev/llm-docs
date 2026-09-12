> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/next](https://developer.apple.com/documentation/foundation/xmlnode/next)

# next (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the next `NSXMLNode` object in document order.

## Declaration

```swift
@NSCopying var next: XMLNode? { get }
```

<a id="Discussion"></a>

## Discussion

You use this method to “walk” forward through the tree structure representing an XML document or document section. (Use [previous](previous.md) to traverse the tree in the opposite direction.) Document order is the natural order that XML constructs appear in markup text. If you send this message to the last node in the tree, `nil` is returned. `NSXMLNode` bypasses namespace and attribute nodes when it traverses a tree in document order.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [XMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [child(at:)](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previous](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach()](detach%28%29.md): Detaches the receiver from its parent node.

# nextNode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the next `NSXMLNode` object in document order.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSXMLNode * nextNode;
```

<a id="Discussion"></a>

## Discussion

You use this method to “walk” forward through the tree structure representing an XML document or document section. (Use [previousNode](previous.md) to traverse the tree in the opposite direction.) Document order is the natural order that XML constructs appear in markup text. If you send this message to the last node in the tree, `nil` is returned. `NSXMLNode` bypasses namespace and attribute nodes when it traverses a tree in document order.

## See Also

### Navigating the Tree of Nodes

- [rootDocument](rootdocument.md): Returns the [NSXMLDocument](../xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](parent.md): Returns the parent node of the receiver.
- [childAtIndex:](child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](childcount.md): Returns the number of child nodes the receiver has.
- [children](children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextSibling](nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previousNode](previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach](detach%28%29.md): Detaches the receiver from its parent node.
