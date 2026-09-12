> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/insertchild(_:at:)](https://developer.apple.com/documentation/pdfkit/pdfoutline/insertchild(_:at:))

# insertChild(\_:at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Inserts the specified outline object at the specified index.

## Declaration

```swift
func insertChild(_ child: PDFOutline, at index: Int)
```

<a id="Discussion"></a>

## Discussion

To build a PDF outline hierarchy, use this method to add child outline objects. Before you call this method on a `PDFOutline` object that already has a parent, you should retain the object and call [removeFromParent()](removefromparent%28%29.md) on it first.

## See Also

### Related Documentation

- [child(at:)](child%28at_%29.md): Returns the child outline object at the specified index.

### Changing an Outline Hierarchy

- [removeFromParent()](removefromparent%28%29.md): Removes the outline object from its parent (does nothing if outline object is the root outline object).

# insertChild:atIndex: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Inserts the specified outline object at the specified index.

## Declaration

```objectivec
- (void) insertChild:(PDFOutline *) child atIndex:(NSUInteger) index;
```

<a id="Discussion"></a>

## Discussion

To build a PDF outline hierarchy, use this method to add child outline objects. Before you call this method on a `PDFOutline` object that already has a parent, you should retain the object and call [removeFromParent](removefromparent%28%29.md) on it first.

## See Also

### Related Documentation

- [childAtIndex:](child%28at_%29.md): Returns the child outline object at the specified index.

### Changing an Outline Hierarchy

- [removeFromParent](removefromparent%28%29.md): Removes the outline object from its parent (does nothing if outline object is the root outline object).
