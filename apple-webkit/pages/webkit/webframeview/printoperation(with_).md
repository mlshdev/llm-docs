> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeview/printoperation(with:)](https://developer.apple.com/documentation/webkit/webframeview/printoperation(with:))

# printOperation(with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a print operation object to print this frame.

## Declaration

```swift
func printOperation(with printInfo: NSPrintInfo!) -> NSPrintOperation!
```

## Parameters

- `printInfo`: Information about the print settings needed to print this frame. See [NSPrintInfo](https://developer.apple.com/documentation/appkit/nsprintinfo) for more information about this object.

<a id="return-value"></a>

## Return Value

An `NSPrintOperation` object set up to print this frame. See [NSPrintOperation](https://developer.apple.com/documentation/appkit/nsprintoperation) for more information about this object.

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView()](printdocumentview%28%29.md): Deprecated. Prints the receiver.

# printOperationWithPrintInfo: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a print operation object to print this frame.

## Declaration

```objectivec
- (NSPrintOperation *) printOperationWithPrintInfo:(NSPrintInfo *) printInfo;
```

## Parameters

- `printInfo`: Information about the print settings needed to print this frame. See [NSPrintInfo](https://developer.apple.com/documentation/appkit/nsprintinfo) for more information about this object.

<a id="return-value"></a>

## Return Value

An `NSPrintOperation` object set up to print this frame. See [NSPrintOperation](https://developer.apple.com/documentation/appkit/nsprintoperation) for more information about this object.

## See Also

### Printing Views

- [canPrintHeadersAndFooters](canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [documentViewShouldHandlePrint](documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView](printdocumentview%28%29.md): Deprecated. Prints the receiver.
