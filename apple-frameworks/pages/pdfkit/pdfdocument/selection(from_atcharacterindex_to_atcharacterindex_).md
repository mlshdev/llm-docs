> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/selection(from:atcharacterindex:to:atcharacterindex:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/selection(from:atcharacterindex:to:atcharacterindex:))

# selection(from:atCharacterIndex:to:atCharacterIndex:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the specified selection based on starting and ending character indexes.

## Declaration

```swift
func selection(from startPage: PDFPage, atCharacterIndex startCharacter: Int, to endPage: PDFPage, atCharacterIndex endCharacter: Int) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

The selection begins at `startChar` on `startPage` and ends at `endChar` on `endPage`. The starting and ending index values must be in the range of the number of characters (as returned by [numberOfCharacters](../pdfpage/numberofcharacters.md)) within the respective `PDFPage` objects.

## See Also

### Working with Selections and Searches

- [selection(from:at:to:at:)](selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](../search-operations.md): Find and search in PDFs.

# selectionFromPage:atCharacterIndex:toPage:atCharacterIndex: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the specified selection based on starting and ending character indexes.

## Declaration

```objectivec
- (PDFSelection *) selectionFromPage:(PDFPage *) startPage atCharacterIndex:(NSUInteger) startCharacter toPage:(PDFPage *) endPage atCharacterIndex:(NSUInteger) endCharacter;
```

<a id="Discussion"></a>

## Discussion

The selection begins at `startChar` on `startPage` and ends at `endChar` on `endPage`. The starting and ending index values must be in the range of the number of characters (as returned by [numberOfCharacters](../pdfpage/numberofcharacters.md)) within the respective `PDFPage` objects.

## See Also

### Working with Selections and Searches

- [selectionFromPage:atPoint:toPage:atPoint:](selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](../search-operations.md): Find and search in PDFs.
