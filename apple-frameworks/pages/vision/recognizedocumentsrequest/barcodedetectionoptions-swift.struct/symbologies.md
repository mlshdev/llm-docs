> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct/symbologies](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct/symbologies)

# symbologies

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The barcode symbologies that the request detects in an image.

## Declaration

```swift
var symbologies: [BarcodeSymbology]
```

<a id="discussion"></a>

## Discussion

By default, a request scans for all symbologies. Specify a subset of symbologies to limit the request’s detection range. To see the specific codes recognized refer to [supportedBarcodeSymbologies](../supportedbarcodesymbologies.md).

## See Also

### Getting the symbology

- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether the request combines multiple codes.
- [enabled](enabled.md): Boolean value that indicates whether to detect barcodes in the document.
