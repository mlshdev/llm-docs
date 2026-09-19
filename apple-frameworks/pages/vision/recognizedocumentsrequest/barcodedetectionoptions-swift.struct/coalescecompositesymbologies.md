> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct/coalescecompositesymbologies

# coalesceCompositeSymbologies

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the request combines multiple codes.

## Declaration

```swift
var coalesceCompositeSymbologies: Bool
```

<a id="discussion"></a>

## Discussion

The default value for this property is `false`.

## See Also

### Getting the symbology

- [enabled](enabled.md): Boolean value that indicates whether to detect barcodes in the document.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
