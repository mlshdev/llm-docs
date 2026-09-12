> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest/supportedsymbologies()](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest/supportedsymbologies())

# supportedSymbologies() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the barcode symbologies that the request supports.

## Declaration

```swift
func supportedSymbologies() throws -> [VNBarcodeSymbology]
```

<a id="return-value"></a>

## Return Value

An array of symbologies.

## See Also

### Specifying Symbologies

- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

# supportedSymbologiesAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the barcode symbologies that the request supports.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedSymbologiesAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An array of symbologies. On failure, this method returns `nil`.

## See Also

### Specifying Symbologies

- [symbologies](symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](../vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.
