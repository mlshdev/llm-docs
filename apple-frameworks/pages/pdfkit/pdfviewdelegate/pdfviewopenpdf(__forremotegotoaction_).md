> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfviewdelegate/pdfviewopenpdf(_:forremotegotoaction:)](https://developer.apple.com/documentation/pdfkit/pdfviewdelegate/pdfviewopenpdf(_:forremotegotoaction:))

# pdfViewOpenPDF(\_:forRemoteGoToAction:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Opens a specified page.

## Declaration

```swift
optional func pdfViewOpenPDF(_ sender: PDFView, forRemoteGoToAction action: PDFActionRemoteGoTo)
```

## See Also

### Working with Annotation Actions

- [pdfViewPerformFind(\_:)](pdfviewperformfind%28__%29.md): Performs a find operation.
- [pdfViewPerformGo(toPage:)](pdfviewperformgo%28topage_%29.md): Performs a go-to operation.
- [pdfViewPerformPrint(\_:)](pdfviewperformprint%28__%29.md): Prints the current document.

# PDFViewOpenPDF:forRemoteGoToAction: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Opens a specified page.

## Declaration

```objectivec
- (void) PDFViewOpenPDF:(PDFView *) sender forRemoteGoToAction:(PDFActionRemoteGoTo *) action;
```

## See Also

### Working with Annotation Actions

- [PDFViewPerformFind:](pdfviewperformfind%28__%29.md): Performs a find operation.
- [PDFViewPerformGoToPage:](pdfviewperformgo%28topage_%29.md): Performs a go-to operation.
- [PDFViewPerformPrint:](pdfviewperformprint%28__%29.md): Prints the current document.
