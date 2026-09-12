> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation/barcodedescriptor](https://developer.apple.com/documentation/vision/vnbarcodeobservation/barcodedescriptor)

# barcodeDescriptor (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that describes the low-level details about the barcode and its data.

## Declaration

```swift
var barcodeDescriptor: CIBarcodeDescriptor? { get }
```

<a id="Discussion"></a>

## Discussion

Use this object to have Core Image regenerate the observed barcode.

# barcodeDescriptor (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that describes the low-level details about the barcode and its data.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CIBarcodeDescriptor * barcodeDescriptor;
```

<a id="Discussion"></a>

## Discussion

Use this object to have Core Image regenerate the observed barcode.
