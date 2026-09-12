> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeview/printdocumentview()](https://developer.apple.com/documentation/webkit/webframeview/printdocumentview())

# printDocumentView() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Prints the receiver.

## Declaration

```swift
func printDocumentView()
```

<a id="Discussion"></a>

## Discussion

This method is invoked if the [documentViewShouldHandlePrint](documentviewshouldhandleprint.md) method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperation(with:)](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.

# printDocumentView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Prints the receiver.

## Declaration

```objectivec
- (void) printDocumentView;
```

<a id="Discussion"></a>

## Discussion

This method is invoked if the [documentViewShouldHandlePrint](documentviewshouldhandleprint.md) method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperationWithPrintInfo:](printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
