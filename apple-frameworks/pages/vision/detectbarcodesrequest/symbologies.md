> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectbarcodesrequest/symbologies](https://developer.apple.com/documentation/vision/detectbarcodesrequest/symbologies)

# symbologies

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The barcode symbologies that the request detects in an image.

## Declaration

```swift
var symbologies: [BarcodeSymbology]
```

<a id="Discussion"></a>

## Discussion

By default, a request scans for all symbologies. Specify a subset of symbologies to limit the request’s detection range.

## See Also

### Configuring a request

- [supportedSymbologies](supportedsymbologies.md): The collection of barcode symbologies that the request can recognize.
- [BarcodeSymbology](../barcodesymbology.md): The barcode symbologies that the framework detects.
- [coalescesCompositeSymbologies](coalescescompositesymbologies.md): A Boolean value that indicates whether the request coalesces multiple codes into one.
