> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/go(to:)-3t5go](https://developer.apple.com/documentation/pdfkit/pdfview/go(to:)-3t5go)

# go(to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Scrolls to the first character of the specified selection.

## Declaration

```swift
func go(to selection: PDFSelection)
```

<a id="Discussion"></a>

## Discussion

PDF Kit records the move in its page history.

## See Also

### Using Seek in a Document

- [go(to:)](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [go(to:)](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [go(to:on:)](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.

# goToSelection: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Scrolls to the first character of the specified selection.

## Declaration

```objectivec
- (void) goToSelection:(PDFSelection *) selection;
```

<a id="Discussion"></a>

## Discussion

PDF Kit records the move in its page history.

## See Also

### Using Seek in a Document

- [goToPage:](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [goToDestination:](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [goToRect:onPage:](go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.
