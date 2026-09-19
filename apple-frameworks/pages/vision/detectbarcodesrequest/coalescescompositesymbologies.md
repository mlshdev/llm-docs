> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/detectbarcodesrequest/coalescescompositesymbologies

# coalescesCompositeSymbologies

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A Boolean value that indicates whether the request coalesces multiple codes into one.

## Declaration

```swift
var coalescesCompositeSymbologies: Bool
```

<a id="Discussion"></a>

## Discussion

The default value for this property is `false`.

## See Also

### Configuring a request

- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [supportedSymbologies](supportedsymbologies.md): The collection of barcode symbologies that the request can recognize.
- [BarcodeSymbology](../barcodesymbology.md): The barcode symbologies that the framework detects.
