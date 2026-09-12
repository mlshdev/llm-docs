> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/barcodeanchor](https://developer.apple.com/documentation/arkit/barcodeanchor)

# BarcodeAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A barcode’s position in a person’s surroundings.

## Declaration

```swift
struct BarcodeAnchor
```

<a id="overview"></a>

## Overview

A `BarcodeAnchor` describes a barcode that ARKit detects in a person’s surroundings. A barcode anchor has exactly one [BarcodeSymbology](../vision/barcodesymbology.md) that indicates which type of barcode the framework detects. It also includes properties, such as the barcode’s payload data,  which is a decoded string value of that data.

## Topics

### Getting barcode information

- [extent](barcodeanchor/extent.md): The extent of the detected barcode’s bounds.
- [originFromAnchorTransform](barcodeanchor/originfromanchortransform.md): The transform from the barcode anchor to the origin coordinate system.
- [payloadData](barcodeanchor/payloaddata.md): The encoded payload data of the detected barcode.
- [payloadString](barcodeanchor/payloadstring.md): The decoded payload string value of the detected barcode.
- [symbology](barcodeanchor/symbology-swift.property.md): The symbology of the detected barcode.
- [BarcodeAnchor.Symbology](barcodeanchor/symbology-swift.enum.md): Values that describe specific kinds of barcodes.
- [id](barcodeanchor/id.md): The unique identifier of an anchor.

### Instance Properties

- [description](barcodeanchor/description.md): A textual representation of this anchor.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](barcodeanchor/arkitcoordinatespaceproviding-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Barcode detection

- [BarcodeDetectionProvider](barcodedetectionprovider.md): An object that provides the real-time position of barcodes the framework detects in a person’s environment.
