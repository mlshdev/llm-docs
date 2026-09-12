> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/string](https://developer.apple.com/documentation/pdfkit/pdfdocument/string)

# string (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A string representing the textual content for the entire document.

## Declaration

```swift
var string: String? { get }
```

<a id="return-value"></a>

## Return Value

A string that represents the textual content of the entire document.

<a id="Discussion"></a>

## Discussion

Pages are delimited with linefeed characters.

This is a convenience method, equivalent to creating a selection object for the entire document and then invoking the `PDFSelection` class’s [string](../pdfselection/string.md) method.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# string (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A string representing the textual content for the entire document.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * string;
```

<a id="return-value"></a>

## Return Value

A string that represents the textual content of the entire document.

<a id="Discussion"></a>

## Discussion

Pages are delimited with linefeed characters.

This is a convenience method, equivalent to creating a selection object for the entire document and then invoking the `PDFSelection` class’s [string](../pdfselection/string.md) method.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
