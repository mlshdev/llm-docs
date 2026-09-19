> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfview/visiblepages

# visiblePages (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of `PDFPage` objects that represent the currently visible pages.

## Declaration

```swift
var visiblePages: [PDFPage] { get }
```

## See Also

### Navigating Within a Document

- [currentPage](currentpage.md): Returns the current page.
- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.

# visiblePages (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of `PDFPage` objects that represent the currently visible pages.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PDFPage *> * visiblePages;
```

## See Also

### Navigating Within a Document

- [currentPage](currentpage.md): Returns the current page.
- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.
