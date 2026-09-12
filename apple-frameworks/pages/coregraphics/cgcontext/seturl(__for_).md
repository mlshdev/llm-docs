> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/seturl(_:for:)](https://developer.apple.com/documentation/coregraphics/cgcontext/seturl(_:for:))

# setURL(\_:for:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the URL associated with a rectangle in a PDF graphics context.

## Declaration

```swift
func setURL(_ url: CFURL, for rect: CGRect)
```

## Parameters

- `url`: A URL that specifies the destination of the contents associated with the rectangle.
- `rect`: A rectangle specified in default user space (not device space).

## See Also

### Managing a PDF Graphics Context

- [beginPDFPage(\_:)](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [endPDFPage()](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setDestination(\_:for:)](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [addDocumentMetadata(\_:)](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [closePDF()](closepdf%28%29.md): Closes a PDF document.

# CGPDFContextSetURLForRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the URL associated with a rectangle in a PDF graphics context.

## Declaration

```objectivec
extern void CGPDFContextSetURLForRect(CGContextRef context, CFURLRef url, CGRect rect);
```

## Parameters

- `context`: A PDF graphics context.
- `url`: A URL that specifies the destination of the contents associated with the rectangle.
- `rect`: A rectangle specified in default user space (not device space).

## See Also

### Managing a PDF Graphics Context

- [CGPDFContextBeginPage](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [CGPDFContextEndPage](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetDestinationForRect](setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [CGPDFContextAddDocumentMetadata](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [CGPDFContextClose](closepdf%28%29.md): Closes a PDF document.
