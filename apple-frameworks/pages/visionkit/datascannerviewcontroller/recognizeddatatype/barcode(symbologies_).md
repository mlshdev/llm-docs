> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/recognizeddatatype/barcode(symbologies:)](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/recognizeddatatype/barcode(symbologies:))

# barcode(symbologies:)

**Framework:** VisionKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Creates a data type for barcodes the use the specified symbologies.

## Declaration

```swift
static func barcode(symbologies: [VNBarcodeSymbology] = []) -> DataScannerViewController.RecognizedDataType
```

## Parameters

- `symbologies`: The barcode symbologies that the scanner recognizes.

<a id="return-value"></a>

## Return Value

A barcode data type for the specified symbologies.
