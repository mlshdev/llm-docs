> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest/supportedsymbologies](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest/supportedsymbologies)

# supportedSymbologies (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · tvOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The array of barcode symbologies that the request supports.

> Use [supportedSymbologies()](supportedsymbologies%28%29.md) instead.

## Declaration

```swift
class var supportedSymbologies: [VNBarcodeSymbology] { get }
```

<a id="Discussion"></a>

## Discussion

Calling this method can be an expensive operation.

## See Also

### Specifying Symbologies

- [supportedSymbologies()](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.

# supportedSymbologies (Objective-C)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · tvOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The array of barcode symbologies that the request supports.

> Use [supportedSymbologiesAndReturnError:](supportedsymbologies%28%29.md) instead.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) NSArray<NSString *> * supportedSymbologies;
```

<a id="Discussion"></a>

## Discussion

Calling this method can be an expensive operation.

## See Also

### Specifying Symbologies

- [supportedSymbologiesAndReturnError:](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
