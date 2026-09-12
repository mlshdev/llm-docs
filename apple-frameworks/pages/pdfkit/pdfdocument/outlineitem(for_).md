> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/outlineitem(for:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/outlineitem(for:))

# outlineItem(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the most likely parent PDF outline object for the selection.

## Declaration

```swift
func outlineItem(for selection: PDFSelection) -> PDFOutline?
```

## Parameters

- `selection`: The area of the document currently selected by the user. A selection can span multiple outline items, but only the point representing the first character is considered.

<a id="return-value"></a>

## Return Value

The PDF outline object that is the most likely parent of the specified selection. Note that only the point representing the first character of the selection is considered in this method.

<a id="Discussion"></a>

## Discussion

Typically, outlines represent structural items such as chapters. You can use this method to identify the chapter that a selection falls within.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# outlineItemForSelection: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the most likely parent PDF outline object for the selection.

## Declaration

```objectivec
- (PDFOutline *) outlineItemForSelection:(PDFSelection *) selection;
```

## Parameters

- `selection`: The area of the document currently selected by the user. A selection can span multiple outline items, but only the point representing the first character is considered.

<a id="return-value"></a>

## Return Value

The PDF outline object that is the most likely parent of the specified selection. Note that only the point representing the first character of the selection is considered in this method.

<a id="Discussion"></a>

## Discussion

Typically, outlines represent structural items such as chapters. You can use this method to identify the chapter that a selection falls within.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
