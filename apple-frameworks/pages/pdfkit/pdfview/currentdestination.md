> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/currentdestination](https://developer.apple.com/documentation/pdfkit/pdfview/currentdestination)

# currentDestination (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.

## Declaration

```swift
var currentDestination: PDFDestination? { get }
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [go(to:)](go%28to_%29-5lh5d.md): Navigates to the specified destination.

### Navigating Within a Document

- [currentPage](currentpage.md): Returns the current page.
- [visiblePages](visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.

# currentDestination (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PDFDestination * currentDestination;
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [goToDestination:](go%28to_%29-5lh5d.md): Navigates to the specified destination.

### Navigating Within a Document

- [currentPage](currentpage.md): Returns the current page.
- [visiblePages](visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.
