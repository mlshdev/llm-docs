> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfimagerep/bounds](https://developer.apple.com/documentation/appkit/nspdfimagerep/bounds)

# bounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image representation’s bounding rectangle.

## Declaration

```swift
var bounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This value is equivalent to the crop box specified by the PDF data.

## See Also

### Getting Data

- [currentPage](currentpage.md): The page currently displayed by the image representation.
- [pageCount](pagecount.md): The number of pages in the image representation.
- [pdfRepresentation](pdfrepresentation.md): The PDF representation of the representation’s image.

# bounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image representation’s bounding rectangle.

## Declaration

```objectivec
@property (readonly) NSRect bounds;
```

<a id="Discussion"></a>

## Discussion

This value is equivalent to the crop box specified by the PDF data.

## See Also

### Getting Data

- [currentPage](currentpage.md): The page currently displayed by the image representation.
- [pageCount](pagecount.md): The number of pages in the image representation.
- [PDFRepresentation](pdfrepresentation.md): The PDF representation of the representation’s image.
