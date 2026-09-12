> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation](https://developer.apple.com/documentation/vision/vnbarcodeobservation)

# VNBarcodeObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents barcode information that an image analysis request detects.

## Declaration

```swift
class VNBarcodeObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectBarcodesRequest](vndetectbarcodesrequest.md). It contains information about the detected barcode, including parsed payload data for supported symbologies.

## Topics

### Parsing the Payload

- [payloadStringValue](vnbarcodeobservation/payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](vnbarcodeobservation/payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](vnbarcodeobservation/supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](vnbarcodeobservation/supplementalpayloaddata.md)
- [supplementalCompositeType](vnbarcodeobservation/supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](vnbarcodeobservation/isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

### Reading Barcode Descriptors

- [barcodeDescriptor](vnbarcodeobservation/barcodedescriptor.md): An object that describes the low-level details about the barcode and its data.

### Identifying Barcode Types

- [symbology](vnbarcodeobservation/symbology.md): The symbology of the observed barcode.

### Identifying Barcode Colors

- [isColorInverted](vnbarcodeobservation/iscolorinverted.md): A Boolean value that indicates whether the barcode is color inverted.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Accessing the Results

- [results](vndetectbarcodesrequest/results.md): The results of a barcode detection request.

# VNBarcodeObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents barcode information that an image analysis request detects.

## Declaration

```objectivec
@interface VNBarcodeObservation : VNRectangleObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectBarcodesRequest](vndetectbarcodesrequest.md). It contains information about the detected barcode, including parsed payload data for supported symbologies.

## Topics

### Parsing the Payload

- [payloadStringValue](vnbarcodeobservation/payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](vnbarcodeobservation/payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](vnbarcodeobservation/supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](vnbarcodeobservation/supplementalpayloaddata.md)
- [supplementalCompositeType](vnbarcodeobservation/supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](vnbarcodeobservation/isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

### Reading Barcode Descriptors

- [barcodeDescriptor](vnbarcodeobservation/barcodedescriptor.md): An object that describes the low-level details about the barcode and its data.

### Identifying Barcode Types

- [symbology](vnbarcodeobservation/symbology.md): The symbology of the observed barcode.

### Identifying Barcode Colors

- [isColorInverted](vnbarcodeobservation/iscolorinverted.md): A Boolean value that indicates whether the barcode is color inverted.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

## See Also

### Accessing the Results

- [results](vndetectbarcodesrequest/results.md): The results of a barcode detection request.
