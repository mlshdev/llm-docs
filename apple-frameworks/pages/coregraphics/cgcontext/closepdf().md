> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/closepdf()](https://developer.apple.com/documentation/coregraphics/cgcontext/closepdf())

# closePDF() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes a PDF document.

## Declaration

```swift
func closePDF()
```

<a id="Discussion"></a>

## Discussion

After closing the context, all pending data is written to the context destination, and the PDF file is completed. No additional data can be written to the destination context after the PDF document is closed.

## See Also

### Managing a PDF Graphics Context

- [beginPDFPage(\_:)](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [endPDFPage()](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setDestination(\_:for:)](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [setURL(\_:for:)](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [addDocumentMetadata(\_:)](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.

# CGPDFContextClose (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes a PDF document.

## Declaration

```objectivec
extern void CGPDFContextClose(CGContextRef context);
```

## Parameters

- `context`: A PDF graphics context.

<a id="Discussion"></a>

## Discussion

After closing the context, all pending data is written to the context destination, and the PDF file is completed. No additional data can be written to the destination context after the PDF document is closed.

## See Also

### Managing a PDF Graphics Context

- [CGPDFContextBeginPage](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [CGPDFContextEndPage](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetDestinationForRect](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [CGPDFContextSetURLForRect](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [CGPDFContextAddDocumentMetadata](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
