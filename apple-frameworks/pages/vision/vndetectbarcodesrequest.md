> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest)

# VNDetectBarcodesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A request that detects barcodes in an image.

## Declaration

```swift
class VNDetectBarcodesRequest
```

<a id="overview"></a>

## Overview

This request returns an array of [VNBarcodeObservation](vnbarcodeobservation.md) objects, one for each barcode it detects.

## Topics

### Specifying Symbologies

- [supportedSymbologies()](vndetectbarcodesrequest/supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](vndetectbarcodesrequest/symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](vndetectbarcodesrequest/coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](vndetectbarcodesrequest/supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

### Accessing the Results

- [results](vndetectbarcodesrequest/results.md): The results of a barcode detection request.
- [VNBarcodeObservation](vnbarcodeobservation.md): An object that represents barcode information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectBarcodesRequestRevision3](vndetectbarcodesrequestrevision3.md): A constant for specifying revision 3 of the barcode detection request.
- [VNDetectBarcodesRequestRevision2](vndetectbarcodesrequestrevision2.md): Deprecated. A constant for specifying revision 2 of the barcode detection request.
- [VNDetectBarcodesRequestRevision1](vndetectbarcodesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the barcode detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Barcode detection

- [VNBarcodeCompositeType](vnbarcodecompositetype.md): Composite types for barcode requests.

# VNDetectBarcodesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A request that detects barcodes in an image.

## Declaration

```objectivec
@interface VNDetectBarcodesRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This request returns an array of [VNBarcodeObservation](vnbarcodeobservation.md) objects, one for each barcode it detects.

## Topics

### Specifying Symbologies

- [supportedSymbologiesAndReturnError:](vndetectbarcodesrequest/supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](vndetectbarcodesrequest/symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](vndetectbarcodesrequest/coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [VNBarcodeSymbology](vnbarcodesymbology.md): The barcode symbologies that the framework detects.
- [supportedSymbologies](vndetectbarcodesrequest/supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

### Accessing the Results

- [results](vndetectbarcodesrequest/results.md): The results of a barcode detection request.
- [VNBarcodeObservation](vnbarcodeobservation.md): An object that represents barcode information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectBarcodesRequestRevision3](vndetectbarcodesrequestrevision3.md): A constant for specifying revision 3 of the barcode detection request.
- [VNDetectBarcodesRequestRevision2](vndetectbarcodesrequestrevision2.md): Deprecated. A constant for specifying revision 2 of the barcode detection request.
- [VNDetectBarcodesRequestRevision1](vndetectbarcodesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the barcode detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Barcode detection

- [VNBarcodeCompositeType](vnbarcodecompositetype.md): Composite types for barcode requests.
