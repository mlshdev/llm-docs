> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/barcodeanchor/extent](https://developer.apple.com/documentation/arkit/barcodeanchor/extent)

# extent

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The extent of the detected barcode’s bounds.

## Declaration

```swift
var extent: SIMD3<Float> { get }
```

<a id="Discussion"></a>

## Discussion

The width of the detected barcode is the length along the X-axis, prior to rotation about the Y-axis.

The height of the detected barcode is the length along the Z-axis, prior to rotation about the Y-axis.

## See Also

### Getting barcode information

- [originFromAnchorTransform](originfromanchortransform.md): The transform from the barcode anchor to the origin coordinate system.
- [payloadData](payloaddata.md): The encoded payload data of the detected barcode.
- [payloadString](payloadstring.md): The decoded payload string value of the detected barcode.
- [symbology](symbology-swift.property.md): The symbology of the detected barcode.
- [BarcodeAnchor.Symbology](symbology-swift.enum.md): Values that describe specific kinds of barcodes.
- [id](id.md): The unique identifier of an anchor.
