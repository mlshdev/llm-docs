> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/selection(from:at:to:at:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/selection(from:at:to:at:))

# selection(from:at:to:at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the specified selection based on starting and ending points.

## Declaration

```swift
func selection(from startPage: PDFPage, at startPoint: CGPoint, to endPage: PDFPage, at endPoint: CGPoint) -> PDFSelection?
```

```swift
func selection(from startPage: PDFPage, at startPoint: NSPoint, to endPage: PDFPage, at endPoint: NSPoint) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

The selection begins at `startPt` on `startPage` and ends at `endPt` on `endPage`. The starting and ending points should be specified in page space, relative to their respective pages.

The starting and ending points can be on the same page. In this case, invoking this method is equivalent to sending the `selectionFromPoint:toPoint:` message to a `PDFPage` object.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [selection(for:)](../pdfpage/selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

### Working with Selections and Searches

- [selection(from:atCharacterIndex:to:atCharacterIndex:)](selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selectionForEntireDocument](selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](../search-operations.md): Find and search in PDFs.

# selectionFromPage:atPoint:toPage:atPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the specified selection based on starting and ending points.

## Declaration

```objectivec
- (PDFSelection *) selectionFromPage:(PDFPage *) startPage atPoint:(CGPoint) startPoint toPage:(PDFPage *) endPage atPoint:(CGPoint) endPoint;
```

```objectivec
- (PDFSelection *) selectionFromPage:(PDFPage *) startPage atPoint:(NSPoint) startPoint toPage:(PDFPage *) endPage atPoint:(NSPoint) endPoint;
```

<a id="Discussion"></a>

## Discussion

The selection begins at `startPt` on `startPage` and ends at `endPt` on `endPage`. The starting and ending points should be specified in page space, relative to their respective pages.

The starting and ending points can be on the same page. In this case, invoking this method is equivalent to sending the `selectionFromPoint:toPoint:` message to a `PDFPage` object.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [selectionForRange:](../pdfpage/selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

### Working with Selections and Searches

- [selectionFromPage:atCharacterIndex:toPage:atCharacterIndex:](selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selectionForEntireDocument](selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](../search-operations.md): Find and search in PDFs.
