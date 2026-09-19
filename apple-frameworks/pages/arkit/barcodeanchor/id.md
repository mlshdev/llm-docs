> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/barcodeanchor/id

# id

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The unique identifier of an anchor.

## Declaration

```swift
var id: UUID { get }
```

## See Also

### Getting barcode information

- [extent](extent.md): The extent of the detected barcode’s bounds.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the barcode anchor to the origin coordinate system.
- [payloadData](payloaddata.md): The encoded payload data of the detected barcode.
- [payloadString](payloadstring.md): The decoded payload string value of the detected barcode.
- [symbology](symbology-swift.property.md): The symbology of the detected barcode.
- [BarcodeAnchor.Symbology](symbology-swift.enum.md): Values that describe specific kinds of barcodes.
