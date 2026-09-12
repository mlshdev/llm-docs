> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct/enabled](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct/enabled)

# enabled

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Boolean value that indicates whether to detect barcodes in the document.

## Declaration

```swift
var enabled: Bool
```

<a id="discussion"></a>

## Discussion

The value is unavailable by default. To enable barcode detection, set the property value to `true`.

## See Also

### Getting the symbology

- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether the request combines multiple codes.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
