> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/beginpdfpage(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/beginpdfpage(_:))

# beginPDFPage(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a new page in a PDF graphics context.

## Declaration

```swift
func beginPDFPage(_ pageInfo: CFDictionary?)
```

## Parameters

- `pageInfo`: A dictionary that contains key-value pairs that define the page properties.

<a id="Discussion"></a>

## Discussion

You must call the function [endPDFPage()](endpdfpage%28%29.md) to signal the end of the page.

## See Also

### Managing a PDF Graphics Context

- [endPDFPage()](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setDestination(\_:for:)](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [setURL(\_:for:)](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [addDocumentMetadata(\_:)](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [closePDF()](closepdf%28%29.md): Closes a PDF document.

# CGPDFContextBeginPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a new page in a PDF graphics context.

## Declaration

```objectivec
extern void CGPDFContextBeginPage(CGContextRef context, CFDictionaryRef pageInfo);
```

## Parameters

- `context`: A PDF graphics context.
- `pageInfo`: A dictionary that contains key-value pairs that define the page properties.

<a id="Discussion"></a>

## Discussion

You must call the function [CGPDFContextEndPage](endpdfpage%28%29.md) to signal the end of the page.

## See Also

### Managing a PDF Graphics Context

- [CGPDFContextEndPage](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetDestinationForRect](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [CGPDFContextSetURLForRect](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [CGPDFContextAddDocumentMetadata](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [CGPDFContextClose](closepdf%28%29.md): Closes a PDF document.
