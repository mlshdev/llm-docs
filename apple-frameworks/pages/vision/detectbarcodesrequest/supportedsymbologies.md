> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectbarcodesrequest/supportedsymbologies](https://developer.apple.com/documentation/vision/detectbarcodesrequest/supportedsymbologies)

# supportedSymbologies

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The collection of barcode symbologies that the request can recognize.

## Declaration

```swift
var supportedSymbologies: [BarcodeSymbology] { get }
```

<a id="Discussion"></a>

## Discussion

Using this property could be a potentially expensive operation.

## See Also

### Configuring a request

- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [BarcodeSymbology](../barcodesymbology.md): The barcode symbologies that the framework detects.
- [coalescesCompositeSymbologies](coalescescompositesymbologies.md): A Boolean value that indicates whether the request coalesces multiple codes into one.
