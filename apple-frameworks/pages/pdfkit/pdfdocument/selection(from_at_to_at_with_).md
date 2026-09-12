> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/selection(from:at:to:at:with:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/selection(from:at:to:at:with:))

# selection(from:at:to:at:with:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func selection(from startPage: PDFPage, at startPoint: CGPoint, to endPage: PDFPage, at endPoint: CGPoint, with granularity: PDFSelectionGranularity) -> PDFSelection?
```

```swift
func selection(from startPage: PDFPage, at startPoint: NSPoint, to endPage: PDFPage, at endPoint: NSPoint, with granularity: PDFSelectionGranularity) -> PDFSelection?
```

# selectionFromPage:atPoint:toPage:atPoint:withGranularity: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (PDFSelection *) selectionFromPage:(PDFPage *) startPage atPoint:(CGPoint) startPoint toPage:(PDFPage *) endPage atPoint:(CGPoint) endPoint withGranularity:(PDFSelectionGranularity) granularity;
```

```objectivec
- (PDFSelection *) selectionFromPage:(PDFPage *) startPage atPoint:(NSPoint) startPoint toPage:(PDFPage *) endPage atPoint:(NSPoint) endPoint withGranularity:(PDFSelectionGranularity) granularity;
```
