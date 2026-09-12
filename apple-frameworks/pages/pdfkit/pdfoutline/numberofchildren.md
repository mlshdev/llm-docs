> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/numberofchildren](https://developer.apple.com/documentation/pdfkit/pdfoutline/numberofchildren)

# numberOfChildren (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the number of child outline objects in the outline.

## Declaration

```swift
var numberOfChildren: Int { get }
```

## See Also

### Getting Information About an Outline

- [document](document.md): Returns the document with which the outline is associated.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [child(at:)](child%28at_%29.md): Returns the child outline object at the specified index.
- [index](index.md): Returns the index of the outline.

# numberOfChildren (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the number of child outline objects in the outline.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfChildren;
```

## See Also

### Getting Information About an Outline

- [document](document.md): Returns the document with which the outline is associated.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [childAtIndex:](child%28at_%29.md): Returns the child outline object at the specified index.
- [index](index.md): Returns the index of the outline.
