> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/go(to:)-6x8y2](https://developer.apple.com/documentation/pdfkit/pdfview/go(to:)-6x8y2)

# go(to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Scrolls to the specified page.

## Declaration

```swift
func go(to page: PDFPage)
```

<a id="Discussion"></a>

## Discussion

PDF Kit records the move in its page history.

## See Also

### Using Seek in a Document

- [go(to:)](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [go(to:)](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [go(to:on:)](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.

# goToPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Scrolls to the specified page.

## Declaration

```objectivec
- (void) goToPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

PDF Kit records the move in its page history.

## See Also

### Using Seek in a Document

- [goToDestination:](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [goToSelection:](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [goToRect:onPage:](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.
