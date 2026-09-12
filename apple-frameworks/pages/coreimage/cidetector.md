> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetector](https://developer.apple.com/documentation/coreimage/cidetector)

# CIDetector (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

An image processor that identifies notable features, such as faces and barcodes, in a still image or video.

## Declaration

```swift
class CIDetector
```

<a id="overview"></a>

## Overview

> **Note**

>  In macOS 10.13, iOS 11, and tvOS 11 or later, the [Vision](../vision.md) framework replaces these classes for identifying and analyzing image features. See [VNRequest](../vision/vnrequest.md).

A `CIDetector` object uses image processing to search for and identify notable features (faces, rectangles, and barcodes) in a still image or video. Detected features are represented by [CIFeature](cifeature.md) objects that provide more information about each feature.

This class can maintain many state variables that can impact performance. So for best performance, reuse `CIDetector` instances instead of creating new ones.

## Topics

### Creating a Detector Object

- [init(ofType:context:options:)](cidetector/init%28oftype_context_options_%29.md): Creates and returns a configured detector.

### Using a Detector Object to Find Features

- [features(in:)](cidetector/features%28in_%29.md): Searches for features in an image.
- [features(in:options:)](cidetector/features%28in_options_%29.md): Searches for features in an image based on the specified image orientation.

### Constants

- [Detector Types](detector-types.md): Strings used to declare the detector for which you are interested.
- [Detector Configuration Keys](detector-configuration-keys.md): Keys used in the options dictionary to configure a detector.
- [Detector Accuracy Options](detector-accuracy-options.md): Value options used to specify the desired accuracy of the detector.
- [Feature Detection Keys](feature-detection-keys.md): Keys used in the options dictionary for [features(in:options:)](cidetector/features%28in_options_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image Feature Detection

- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.

# CIDetector (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

An image processor that identifies notable features, such as faces and barcodes, in a still image or video.

## Declaration

```objectivec
@interface CIDetector : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  In macOS 10.13, iOS 11, and tvOS 11 or later, the [Vision](../vision.md) framework replaces these classes for identifying and analyzing image features. See [VNRequest](../vision/vnrequest.md).

A `CIDetector` object uses image processing to search for and identify notable features (faces, rectangles, and barcodes) in a still image or video. Detected features are represented by [CIFeature](cifeature.md) objects that provide more information about each feature.

This class can maintain many state variables that can impact performance. So for best performance, reuse `CIDetector` instances instead of creating new ones.

## Topics

### Creating a Detector Object

- [detectorOfType:context:options:](cidetector/init%28oftype_context_options_%29.md): Creates and returns a configured detector.

### Using a Detector Object to Find Features

- [featuresInImage:](cidetector/features%28in_%29.md): Searches for features in an image.
- [featuresInImage:options:](cidetector/features%28in_options_%29.md): Searches for features in an image based on the specified image orientation.

### Constants

- [Detector Types](detector-types.md): Strings used to declare the detector for which you are interested.
- [Detector Configuration Keys](detector-configuration-keys.md): Keys used in the options dictionary to configure a detector.
- [Detector Accuracy Options](detector-accuracy-options.md): Value options used to specify the desired accuracy of the detector.
- [Feature Detection Keys](feature-detection-keys.md): Keys used in the options dictionary for [featuresInImage:options:](cidetector/features%28in_options_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image Feature Detection

- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIFaceFeature](cifacefeature.md): Information about a face detected in a still or video image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.
