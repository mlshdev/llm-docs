> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeview/canprintheadersandfooters](https://developer.apple.com/documentation/webkit/webframeview/canprintheadersandfooters)

# canPrintHeadersAndFooters (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean value indicating whether the receiver can print headers and footers.

## Declaration

```swift
var canPrintHeadersAndFooters: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver can print headers and footers; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Printing Views

- [printOperation(with:)](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView()](printdocumentview%28%29.md): Deprecated. Prints the receiver.

# canPrintHeadersAndFooters (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean value indicating whether the receiver can print headers and footers.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canPrintHeadersAndFooters;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver can print headers and footers; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Printing Views

- [printOperationWithPrintInfo:](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView](printdocumentview%28%29.md): Deprecated. Prints the receiver.
