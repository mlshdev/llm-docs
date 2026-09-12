> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfoperatorcallback](https://developer.apple.com/documentation/coregraphics/cgpdfoperatorcallback)

# CGPDFOperatorCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom processing for PDF operators.

## Declaration

```swift
typealias CGPDFOperatorCallback = (CGPDFScannerRef, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `scanner`: A CGPDFScanner object. Core Graphics passes the scanner to your callback function. The scanner contains the PDF content stream that has the PDF operator that corresponds to this callback.
- `info`: A pointer to data passed to the callback.

<a id="Discussion"></a>

## Discussion

Your callback function takes any action that’s appropriate for your application. For example, if you want to count the number of inline images in a PDF but ignore the image data, you would set a callback for the `EI` operator. In your callback you would increment a counter for each call.

# CGPDFOperatorCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom processing for PDF operators.

## Declaration

```objectivec
typedef void (*)(struct CGPDFScanner *, void *) CGPDFOperatorCallback;
```

## Parameters

- `scanner`: A CGPDFScanner object. Core Graphics passes the scanner to your callback function. The scanner contains the PDF content stream that has the PDF operator that corresponds to this callback.
- `info`: A pointer to data passed to the callback.

<a id="Discussion"></a>

## Discussion

Your callback function takes any action that’s appropriate for your application. For example, if you want to count the number of inline images in a PDF but ignore the image data, you would set a callback for the `EI` operator. In your callback you would increment a counter for each call.
