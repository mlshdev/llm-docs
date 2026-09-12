> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifeature](https://developer.apple.com/documentation/coreimage/cifeature)

# CIFeature (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The abstract superclass for objects representing notable features detected in an image.

## Declaration

```swift
class CIFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNObservation](../vision/vnobservation.md))

A `CIFeature` object represents a portion of an image that a detector believes matches its criteria. Subclasses of CIFeature holds additional information specific to the detector that discovered the feature.

## Topics

### Feature Properties

- [bounds](cifeature/bounds.md): The rectangle that holds discovered feature.
- [type](cifeature/type.md): The type of feature that was discovered.

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIFaceFeature](cifacefeature.md)
- [CIQRCodeFeature](ciqrcodefeature.md)
- [CIRectangleFeature](cirectanglefeature.md)
- [CITextFeature](citextfeature.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.

# CIFeature (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The abstract superclass for objects representing notable features detected in an image.

## Declaration

```objectivec
@interface CIFeature : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNObservation](../vision/vnobservation.md))

A `CIFeature` object represents a portion of an image that a detector believes matches its criteria. Subclasses of CIFeature holds additional information specific to the detector that discovered the feature.

## Topics

### Feature Properties

- [bounds](cifeature/bounds.md): The rectangle that holds discovered feature.
- [type](cifeature/type.md): The type of feature that was discovered.

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIFaceFeature](cifacefeature.md)
- [CIQRCodeFeature](ciqrcodefeature.md)
- [CIRectangleFeature](cirectanglefeature.md)
- [CITextFeature](citextfeature.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.
