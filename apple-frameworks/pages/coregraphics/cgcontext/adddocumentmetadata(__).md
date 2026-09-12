> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/adddocumentmetadata(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/adddocumentmetadata(_:))

# addDocumentMetadata(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates custom metadata with the PDF document.

## Declaration

```swift
func addDocumentMetadata(_ metadata: CFData?)
```

## Parameters

- `metadata`: A stream of XML data that is formatted according to the Extensible Metadata Platform, as described in section 10.2.2., “Metadata Streams”, of the PDF 1.7 specification.

## See Also

### Managing a PDF Graphics Context

- [beginPDFPage(\_:)](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [endPDFPage()](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setDestination(\_:for:)](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [setURL(\_:for:)](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [closePDF()](closepdf%28%29.md): Closes a PDF document.

# CGPDFContextAddDocumentMetadata (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates custom metadata with the PDF document.

## Declaration

```objectivec
extern void CGPDFContextAddDocumentMetadata(CGContextRef context, CFDataRef metadata);
```

## Parameters

- `context`: A PDF graphics context.
- `metadata`: A stream of XML data that is formatted according to the Extensible Metadata Platform, as described in section 10.2.2., “Metadata Streams”, of the PDF 1.7 specification.

## See Also

### Managing a PDF Graphics Context

- [CGPDFContextBeginPage](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [CGPDFContextEndPage](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetDestinationForRect](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [CGPDFContextSetURLForRect](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [CGPDFContextClose](closepdf%28%29.md): Closes a PDF document.
