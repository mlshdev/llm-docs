> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/document](https://developer.apple.com/documentation/pdfkit/pdfoutline/document)

# document (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the document with which the outline is associated.

## Declaration

```swift
weak var document: PDFDocument? { get }
```

## See Also

### Getting Information About an Outline

- [numberOfChildren](numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [child(at:)](child%28at_%29.md): Returns the child outline object at the specified index.
- [index](index.md): Returns the index of the outline.

# document (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the document with which the outline is associated.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) PDFDocument * document;
```

## See Also

### Getting Information About an Outline

- [numberOfChildren](numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [childAtIndex:](child%28at_%29.md): Returns the child outline object at the specified index.
- [index](index.md): Returns the index of the outline.
