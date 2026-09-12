> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest/coalescecompositesymbologies](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest/coalescecompositesymbologies)

# coalesceCompositeSymbologies (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether to coalesce multiple codes based on the symbology.

## Declaration

```swift
var coalesceCompositeSymbologies: Bool { get set }
```

## See Also

### Specifying Symbologies

- [supportedSymbologies()](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

# coalesceCompositeSymbologies (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether to coalesce multiple codes based on the symbology.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL coalesceCompositeSymbologies;
```

## See Also

### Specifying Symbologies

- [supportedSymbologiesAndReturnError:](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.
