> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionremotegoto/init(pageindex:at:fileurl:)](https://developer.apple.com/documentation/pdfkit/pdfactionremotegoto/init(pageindex:at:fileurl:))

# init(pageIndex:at:fileURL:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the remote go-to action with the specified page index, point, and document URL.

## Declaration

```swift
init(pageIndex: Int, at point: CGPoint, fileURL url: URL)
```

```swift
init(pageIndex: Int, at point: NSPoint, fileURL url: URL)
```

## Parameters

- `pageIndex`: The page index of the remote document.
- `point`: The point on the page in the remote document.
- `url`: The URL of the remote PDF document.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionRemoteGoTo` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

The `PDFActionRemoteGoTo` object uses a zero-based page index, not a `PDFPage` object. This simplifies the handling of remote destinations for documents that may not be instantiated yet.

# initWithPageIndex:atPoint:fileURL: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the remote go-to action with the specified page index, point, and document URL.

## Declaration

```objectivec
- (instancetype) initWithPageIndex:(NSUInteger) pageIndex atPoint:(CGPoint) point fileURL:(NSURL *) url;
```

```objectivec
- (instancetype) initWithPageIndex:(NSUInteger) pageIndex atPoint:(NSPoint) point fileURL:(NSURL *) url;
```

## Parameters

- `pageIndex`: The page index of the remote document.
- `point`: The point on the page in the remote document.
- `url`: The URL of the remote PDF document.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionRemoteGoTo` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

The `PDFActionRemoteGoTo` object uses a zero-based page index, not a `PDFPage` object. This simplifies the handling of remote destinations for documents that may not be instantiated yet.
