> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassificationobservation](https://developer.apple.com/documentation/vision/vnclassificationobservation)

# VNClassificationObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents classification information that an image-analysis request produces.

## Declaration

```swift
class VNClassificationObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model whose role is classification (rather than prediction or image-to-image processing). Vision infers that an [MLModel](../coreml/mlmodel.md) object is a classifier model if that model predicts a single feature. That is, the model’s [modelDescription](../coreml/mlmodel/modeldescription.md) object has a non-`nil` value for its [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) property.

## Topics

### Determining Classification

- [identifier](vnclassificationobservation/identifier.md): Classification label identifying the type of observation.

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](vnclassificationobservation/hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumPrecision(\_:forRecall:)](vnclassificationobservation/hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.
- [hasMinimumRecall(\_:forPrecision:)](vnclassificationobservation/hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

# VNClassificationObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents classification information that an image-analysis request produces.

## Declaration

```objectivec
@interface VNClassificationObservation : VNObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model whose role is classification (rather than prediction or image-to-image processing). Vision infers that an [MLModel](../coreml/mlmodel.md) object is a classifier model if that model predicts a single feature. That is, the model’s [modelDescription](../coreml/mlmodel/modeldescription.md) object has a non-`nil` value for its [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) property.

## Topics

### Determining Classification

- [identifier](vnclassificationobservation/identifier.md): Classification label identifying the type of observation.

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](vnclassificationobservation/hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumPrecision:forRecall:](vnclassificationobservation/hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.
- [hasMinimumRecall:forPrecision:](vnclassificationobservation/hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.
