> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodecompositetype](https://developer.apple.com/documentation/vision/vnbarcodecompositetype)

# VNBarcodeCompositeType (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Composite types for barcode requests.

## Declaration

```swift
@frozen enum VNBarcodeCompositeType
```

## Topics

### Composite Types

- [VNBarcodeCompositeType.gs1TypeA](vnbarcodecompositetype/gs1typea.md): A type that represents trade items in bulk.
- [VNBarcodeCompositeType.gs1TypeB](vnbarcodecompositetype/gs1typeb.md): A type that represents trade items by piece.
- [VNBarcodeCompositeType.gs1TypeC](vnbarcodecompositetype/gs1typec.md): A type that represents trade items in varying quantity.
- [VNBarcodeCompositeType.linked](vnbarcodecompositetype/linked.md): A type that represents a linked composite type.
- [VNBarcodeCompositeType.none](vnbarcodecompositetype/none.md): A type that represents no composite type.

### Creating a Composite Type

- [init(rawValue:)](vnbarcodecompositetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Barcode detection

- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md): A request that detects barcodes in an image.

# VNBarcodeCompositeType (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Composite types for barcode requests.

## Declaration

```objectivec
enum VNBarcodeCompositeType : NSInteger;
```

## Topics

### Composite Types

- [VNBarcodeCompositeTypeGS1TypeA](vnbarcodecompositetype/gs1typea.md): A type that represents trade items in bulk.
- [VNBarcodeCompositeTypeGS1TypeB](vnbarcodecompositetype/gs1typeb.md): A type that represents trade items by piece.
- [VNBarcodeCompositeTypeGS1TypeC](vnbarcodecompositetype/gs1typec.md): A type that represents trade items in varying quantity.
- [VNBarcodeCompositeTypeLinked](vnbarcodecompositetype/linked.md): A type that represents a linked composite type.
- [VNBarcodeCompositeTypeNone](vnbarcodecompositetype/none.md): A type that represents no composite type.

## See Also

### Barcode detection

- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md): A request that detects barcodes in an image.
