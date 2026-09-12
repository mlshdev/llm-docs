> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdestination/init(page:at:)](https://developer.apple.com/documentation/pdfkit/pdfdestination/init(page:at:))

# init(page:at:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes the destination.

## Declaration

```swift
init(page: PDFPage, at point: CGPoint)
```

```swift
init(page: PDFPage, at point: NSPoint)
```

## Parameters

- `page`: The page of the destination.
- `point`: The point of the destination, in page space.

<a id="return-value"></a>

## Return Value

An initialized `PDFDestination` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Specify `point` in page space. Typically, there’s no need to initialize destinations. Instead, you get them from [PDFAnnotationLink](../pdfannotationlink.md), [PDFOutline](../pdfoutline.md), or [PDFView](../pdfview.md) objects.

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

# initWithPage:atPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes the destination.

## Declaration

```objectivec
- (instancetype) initWithPage:(PDFPage *) page atPoint:(CGPoint) point;
```

```objectivec
- (instancetype) initWithPage:(PDFPage *) page atPoint:(NSPoint) point;
```

## Parameters

- `page`: The page of the destination.
- `point`: The point of the destination, in page space.

<a id="return-value"></a>

## Return Value

An initialized `PDFDestination` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Specify `point` in page space. Typically, there’s no need to initialize destinations. Instead, you get them from [PDFAnnotationLink](../pdfannotationlink.md), [PDFOutline](../pdfoutline.md), or [PDFView](../pdfview.md) objects.

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.
