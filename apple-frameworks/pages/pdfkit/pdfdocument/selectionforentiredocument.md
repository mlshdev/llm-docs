> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/selectionforentiredocument](https://developer.apple.com/documentation/pdfkit/pdfdocument/selectionforentiredocument)

# selectionForEntireDocument (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a selection representing the textual content of the entire document.

## Declaration

```swift
var selectionForEntireDocument: PDFSelection? { get }
```

## See Also

### Working with Selections and Searches

- [selection(from:atCharacterIndex:to:atCharacterIndex:)](selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selection(from:at:to:at:)](selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [Search Operations](../search-operations.md): Find and search in PDFs.

# selectionForEntireDocument (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a selection representing the textual content of the entire document.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PDFSelection * selectionForEntireDocument;
```

## See Also

### Working with Selections and Searches

- [selectionFromPage:atCharacterIndex:toPage:atCharacterIndex:](selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selectionFromPage:atPoint:toPage:atPoint:](selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [Search Operations](../search-operations.md): Find and search in PDFs.
