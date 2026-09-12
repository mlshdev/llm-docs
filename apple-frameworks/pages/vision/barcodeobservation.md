> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/barcodeobservation](https://developer.apple.com/documentation/vision/barcodeobservation)

# BarcodeObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents barcode information that an image-analysis request detects.

## Declaration

```swift
struct BarcodeObservation
```

## Topics

### Creating an observation

- [init(\_:)](barcodeobservation/init%28__%29.md): Creates a barcode observation.

### Getting the bounding region

- [boundingRegion](barcodeobservation/boundingregion.md): The bounding region of the barcode.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [isColorInverted](barcodeobservation/iscolorinverted.md): A Boolean value that indicates whether the barcode is color inverted.
- [isGS1DataCarrier](barcodeobservation/isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

### Getting the payload

- [payloadData](barcodeobservation/payloaddata.md): The raw data representation of the barcode’s payload.
- [payloadString](barcodeobservation/payloadstring.md): A string value that represents the barcode payload.
- [supplementalPayloadData](barcodeobservation/supplementalpayloaddata.md): The raw data representation of the barcode’s supplemental payload.
- [supplementalPayloadString](barcodeobservation/supplementalpayloadstring.md): The supplemental code decoded as a string value.

### Getting the symbology

- [symbology](barcodeobservation/symbology.md): The symbology of the observed barcode.
- [BarcodeSymbology](barcodesymbology.md): The barcode symbologies that the framework detects.

### Getting the composite type

- [supplementalCompositeType](barcodeobservation/supplementalcompositetype.md): The supplemental composite type.
- [BarcodeObservation.CompositeType](barcodeobservation/compositetype.md): Composite types for barcode requests.

## Relationships

### Conforms To

- [BoundingBoxProviding](boundingboxproviding.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [QuadrilateralProviding](quadrilateralproviding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
