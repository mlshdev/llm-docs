> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeview/documentviewshouldhandleprint](https://developer.apple.com/documentation/webkit/webframeview/documentviewshouldhandleprint)

# documentViewShouldHandlePrint (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean value indicating whether the document view should handle a print operation.

## Declaration

```swift
var documentViewShouldHandlePrint: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this method returns [false](https://developer.apple.com/documentation/swift/false), the application terminates its print operation and sends [printDocumentView()](printdocumentview%28%29.md) to the web frame view.

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperation(with:)](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [printDocumentView()](printdocumentview%28%29.md): Deprecated. Prints the receiver.

# documentViewShouldHandlePrint (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean value indicating whether the document view should handle a print operation.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL documentViewShouldHandlePrint;
```

<a id="Discussion"></a>

## Discussion

If this method returns [false](https://developer.apple.com/documentation/swift/false), the application terminates its print operation and sends [printDocumentView](printdocumentview%28%29.md) to the web frame view.

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperationWithPrintInfo:](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [printDocumentView](printdocumentview%28%29.md): Deprecated. Prints the receiver.
