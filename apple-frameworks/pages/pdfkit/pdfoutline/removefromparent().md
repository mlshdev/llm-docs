> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/removefromparent()](https://developer.apple.com/documentation/pdfkit/pdfoutline/removefromparent())

# removeFromParent() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Removes the outline object from its parent (does nothing if outline object is the root outline object).

## Declaration

```swift
func removeFromParent()
```

## See Also

### Related Documentation

- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).

### Changing an Outline Hierarchy

- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts the specified outline object at the specified index.

# removeFromParent (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Removes the outline object from its parent (does nothing if outline object is the root outline object).

## Declaration

```objectivec
- (void) removeFromParent;
```

## See Also

### Related Documentation

- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).

### Changing an Outline Hierarchy

- [insertChild:atIndex:](insertchild%28__at_%29.md): Inserts the specified outline object at the specified index.
