> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setdestination(_:for:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setdestination(_:for:))

# setDestination(\_:for:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a destination to jump to when a rectangle in the current PDF page is clicked.

## Declaration

```swift
func setDestination(_ name: CFString, for rect: CGRect)
```

## Parameters

- `name`: A destination name.
- `rect`: A rectangle that specifies an area of the current page of a PDF graphics context. The rectangle is specified in default user space (not device space).

## See Also

### Managing a PDF Graphics Context

- [beginPDFPage(\_:)](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [endPDFPage()](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setURL(\_:for:)](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [addDocumentMetadata(\_:)](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [closePDF()](closepdf%28%29.md): Closes a PDF document.

# CGPDFContextSetDestinationForRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a destination to jump to when a rectangle in the current PDF page is clicked.

## Declaration

```objectivec
extern void CGPDFContextSetDestinationForRect(CGContextRef context, CFStringRef name, CGRect rect);
```

## Parameters

- `context`: A PDF graphics context.
- `name`: A destination name.
- `rect`: A rectangle that specifies an area of the current page of a PDF graphics context. The rectangle is specified in default user space (not device space).

## See Also

### Managing a PDF Graphics Context

- [CGPDFContextBeginPage](beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [CGPDFContextEndPage](endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetURLForRect](seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [CGPDFContextAddDocumentMetadata](adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [CGPDFContextClose](closepdf%28%29.md): Closes a PDF document.
