> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/barcodeanchor/originfromanchortransform](https://developer.apple.com/documentation/arkit/barcodeanchor/originfromanchortransform)

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The transform from the barcode anchor to the origin coordinate system.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Getting barcode information

- [extent](extent.md): The extent of the detected barcode’s bounds.
- [payloadData](payloaddata.md): The encoded payload data of the detected barcode.
- [payloadString](payloadstring.md): The decoded payload string value of the detected barcode.
- [symbology](symbology-swift.property.md): The symbology of the detected barcode.
- [BarcodeAnchor.Symbology](symbology-swift.enum.md): Values that describe specific kinds of barcodes.
- [id](id.md): The unique identifier of an anchor.
