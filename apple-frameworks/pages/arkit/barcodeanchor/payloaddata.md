> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/barcodeanchor/payloaddata](https://developer.apple.com/documentation/arkit/barcodeanchor/payloaddata)

# payloadData

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The encoded payload data of the detected barcode.

## Declaration

```swift
var payloadData: Data { get }
```

## See Also

### Getting barcode information

- [extent](extent.md): The extent of the detected barcode’s bounds.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the barcode anchor to the origin coordinate system.
- [payloadString](payloadstring.md): The decoded payload string value of the detected barcode.
- [symbology](symbology-swift.property.md): The symbology of the detected barcode.
- [BarcodeAnchor.Symbology](symbology-swift.enum.md): Values that describe specific kinds of barcodes.
- [id](id.md): The unique identifier of an anchor.
