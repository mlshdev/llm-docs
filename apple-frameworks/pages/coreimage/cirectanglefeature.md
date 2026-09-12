> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirectanglefeature](https://developer.apple.com/documentation/coreimage/cirectanglefeature)

# CIRectangleFeature (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Information about a rectangular region detected in a still or video image.

## Declaration

```swift
class CIRectangleFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNDetectFaceRectanglesRequest](../vision/vndetectfacerectanglesrequest.md))

A detected rectangle feature is not necessarily rectangular in the plane of the image; rather, the feature identifies a shape that may be rectangular in space (for example a book on a desk) but which appears as a four-sided polygon in the image. The properties of a `CIRectangleFeature` object identify its four corners in image coordinates.

You can use rectangle feature detection together with the `CIPerspectiveCorrection` filter to transform the feature to a normal orientation.

To detect rectangles in an image or video, choose [CIDetectorTypeRectangle](cidetectortyperectangle.md) when initializing a [CIDetector](cidetector.md) object, and use the `CIDetectorAspectRatio` and `CIDetectorFocalLength` options to specify the approximate shape of rectangular features to search for. The detector returns at most one rectangle feature, the most prominent found in the image.

## Topics

### Locating a Detected Feature

- [bounds](cirectanglefeature/bounds-swift.property.md): A rectangle indicating the position and extent of the feature in image coordinates.

### Identifying the Corners of a Detected Rectangle

- [bottomLeft](cirectanglefeature/bottomleft-swift.property.md): The lower-left corner of the detected rectangle, in image coordinates.
- [bottomRight](cirectanglefeature/bottomright-swift.property.md): The lower-right corner of the detected rectangle, in image coordinates.
- [topLeft](cirectanglefeature/topleft-swift.property.md): The upper-left corner of the detected rectangle, in image coordinates.
- [topRight](cirectanglefeature/topright-swift.property.md): The upper-right corner of the detected rectangle, in image coordinates.

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

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
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.

# CIRectangleFeature (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Information about a rectangular region detected in a still or video image.

## Declaration

```objectivec
@interface CIRectangleFeature : CIFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces these classes for identifying and analyzing image features. See [VNDetectFaceRectanglesRequest](../vision/vndetectfacerectanglesrequest.md))

A detected rectangle feature is not necessarily rectangular in the plane of the image; rather, the feature identifies a shape that may be rectangular in space (for example a book on a desk) but which appears as a four-sided polygon in the image. The properties of a `CIRectangleFeature` object identify its four corners in image coordinates.

You can use rectangle feature detection together with the `CIPerspectiveCorrection` filter to transform the feature to a normal orientation.

To detect rectangles in an image or video, choose [CIDetectorTypeRectangle](cidetectortyperectangle.md) when initializing a [CIDetector](cidetector.md) object, and use the `CIDetectorAspectRatio` and `CIDetectorFocalLength` options to specify the approximate shape of rectangular features to search for. The detector returns at most one rectangle feature, the most prominent found in the image.

## Topics

### Locating a Detected Feature

- [bounds](cirectanglefeature/bounds-swift.property.md): A rectangle indicating the position and extent of the feature in image coordinates.

### Identifying the Corners of a Detected Rectangle

- [bottomLeft](cirectanglefeature/bottomleft-swift.property.md): The lower-left corner of the detected rectangle, in image coordinates.
- [bottomRight](cirectanglefeature/bottomright-swift.property.md): The lower-right corner of the detected rectangle, in image coordinates.
- [topLeft](cirectanglefeature/topleft-swift.property.md): The upper-left corner of the detected rectangle, in image coordinates.
- [topRight](cirectanglefeature/topright-swift.property.md): The upper-right corner of the detected rectangle, in image coordinates.

### Instance Variables

- [bottomLeft](cirectanglefeature/bottomleft-c.ivar.md)
- [bottomRight](cirectanglefeature/bottomright-c.ivar.md)
- [bounds](cirectanglefeature/bounds-c.ivar.md)
- [topLeft](cirectanglefeature/topleft-c.ivar.md)
- [topRight](cirectanglefeature/topright-c.ivar.md)

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.
