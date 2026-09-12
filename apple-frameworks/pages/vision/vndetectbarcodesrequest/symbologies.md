> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest/symbologies](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest/symbologies)

# symbologies (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The barcode symbologies that the request detects in an image.

## Declaration

```swift
var symbologies: [VNBarcodeSymbology] { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a request scans for all symbologies. Specify a subset of symbologies to limit the request’s detection range.

> **Note**

>  Setting a revision on the request resets the symbologies to all symbologies for the specified revision.

## See Also

### Specifying Symbologies

- [supportedSymbologies()](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

# symbologies (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The barcode symbologies that the request detects in an image.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSString *> * symbologies;
```

<a id="Discussion"></a>

## Discussion

By default, a request scans for all symbologies. Specify a subset of symbologies to limit the request’s detection range.

> **Note**

>  Setting a revision on the request resets the symbologies to all symbologies for the specified revision.

## See Also

### Specifying Symbologies

- [supportedSymbologiesAndReturnError:](supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.
