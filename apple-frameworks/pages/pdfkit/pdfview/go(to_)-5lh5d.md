> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/go(to:)-5lh5d](https://developer.apple.com/documentation/pdfkit/pdfview/go(to:)-5lh5d)

# go(to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates to the specified destination.

## Declaration

```swift
func go(to destination: PDFDestination)
```

<a id="Discussion"></a>

## Discussion

Destinations include a page and a point on the page specified in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [currentPage](currentpage.md): Returns the current page.
- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.

### Using Seek in a Document

- [go(to:)](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [go(to:)](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [go(to:on:)](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.

# goToDestination: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates to the specified destination.

## Declaration

```objectivec
- (void) goToDestination:(PDFDestination *) destination;
```

<a id="Discussion"></a>

## Discussion

Destinations include a page and a point on the page specified in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [currentPage](currentpage.md): Returns the current page.
- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.

### Using Seek in a Document

- [goToPage:](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [goToSelection:](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [goToRect:onPage:](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.
