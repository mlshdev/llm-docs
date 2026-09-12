> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodefeature](https://developer.apple.com/documentation/coreimage/ciqrcodefeature)

# CIQRCodeFeature (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Information about a Quick Response code detected in a still or video image.

## Declaration

```swift
class CIQRCodeFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNDetectBarcodesRequest](../vision/vndetectbarcodesrequest.md))

A QR code is a two-dimensional barcode using the ISO/IEC 18004:2006 standard. The properties of a CIQRCodeFeature object identify the corners of the barcode in the image perspective and provide the decoded message.

To detect QR codes in an image or video, choose [CIDetectorTypeQRCode](cidetectortypeqrcode.md) type when initializing a [CIDetector](cidetector.md) object.

## Topics

### Locating a Detected Feature

- [bounds](ciqrcodefeature/bounds-swift.property.md): A rectangle that indicates the position and extent of the QR code feature in image coordinates.

### Decoding a Detected Barcode

- [messageString](ciqrcodefeature/messagestring.md): The string decoded from the detected barcode.
- [symbolDescriptor](ciqrcodefeature/symboldescriptor-swift.property.md): An abstract representation of a QR Code symbol.

### Identifying the Corners of a Detected Barcode

- [bottomLeft](ciqrcodefeature/bottomleft-swift.property.md): The image coordinate of the lower-left corner of the detected QR code.
- [bottomRight](ciqrcodefeature/bottomright-swift.property.md): The image coordinate of the lower-right corner of the detected QR code.
- [topLeft](ciqrcodefeature/topleft-swift.property.md): The image coordinate of the upper-left corner of the detected QR code.
- [topRight](ciqrcodefeature/topright-swift.property.md): The image coordinate of the upper-right corner of the detected QR code.

### Initializers

- [init(coder:)](ciqrcodefeature/init%28coder_%29.md)

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

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

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.

# CIQRCodeFeature (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Information about a Quick Response code detected in a still or video image.

## Declaration

```objectivec
@interface CIQRCodeFeature : CIFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNDetectBarcodesRequest](../vision/vndetectbarcodesrequest.md))

A QR code is a two-dimensional barcode using the ISO/IEC 18004:2006 standard. The properties of a CIQRCodeFeature object identify the corners of the barcode in the image perspective and provide the decoded message.

To detect QR codes in an image or video, choose [CIDetectorTypeQRCode](cidetectortypeqrcode.md) type when initializing a [CIDetector](cidetector.md) object.

## Topics

### Locating a Detected Feature

- [bounds](ciqrcodefeature/bounds-swift.property.md): A rectangle that indicates the position and extent of the QR code feature in image coordinates.

### Decoding a Detected Barcode

- [messageString](ciqrcodefeature/messagestring.md): The string decoded from the detected barcode.
- [symbolDescriptor](ciqrcodefeature/symboldescriptor-swift.property.md): An abstract representation of a QR Code symbol.

### Identifying the Corners of a Detected Barcode

- [bottomLeft](ciqrcodefeature/bottomleft-swift.property.md): The image coordinate of the lower-left corner of the detected QR code.
- [bottomRight](ciqrcodefeature/bottomright-swift.property.md): The image coordinate of the lower-right corner of the detected QR code.
- [topLeft](ciqrcodefeature/topleft-swift.property.md): The image coordinate of the upper-left corner of the detected QR code.
- [topRight](ciqrcodefeature/topright-swift.property.md): The image coordinate of the upper-right corner of the detected QR code.

### Instance Variables

- [bottomLeft](ciqrcodefeature/bottomleft-c.ivar.md)
- [bottomRight](ciqrcodefeature/bottomright-c.ivar.md)
- [bounds](ciqrcodefeature/bounds-c.ivar.md)
- [symbolDescriptor](ciqrcodefeature/symboldescriptor-c.ivar.md)
- [topLeft](ciqrcodefeature/topleft-c.ivar.md)
- [topRight](ciqrcodefeature/topright-c.ivar.md)

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
