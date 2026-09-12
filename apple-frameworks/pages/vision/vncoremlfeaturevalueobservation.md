> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlfeaturevalueobservation](https://developer.apple.com/documentation/vision/vncoremlfeaturevalueobservation)

# VNCoreMLFeatureValueObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents a collection of key-value information that a Core ML image-analysis request produces.

## Declaration

```swift
class VNCoreMLFeatureValueObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model whose role is prediction rather than classification or image-to-image processing.

Vision infers that an [MLModel](../coreml/mlmodel.md) object is a predictor model if that model predicts multiple features. You can tell that a model predicts multiple features when its [modelDescription](../coreml/mlmodel/modeldescription.md) object has a `nil` value for its [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) property, or when it inserts its output in an [outputDescriptionsByName](../coreml/mlmodeldescription/outputdescriptionsbyname.md) dictionary.

## Topics

### Obtaining Feature Values

- [featureValue](vncoremlfeaturevalueobservation/featurevalue.md): The feature result of a [VNCoreMLRequest](vncoremlrequest.md) that outputs neither a classification nor an image.
- [featureName](vncoremlfeaturevalueobservation/featurename.md): The name used in the model description of the CoreML model that produced this observation.

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
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.

# VNCoreMLFeatureValueObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents a collection of key-value information that a Core ML image-analysis request produces.

## Declaration

```objectivec
@interface VNCoreMLFeatureValueObservation : VNObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model whose role is prediction rather than classification or image-to-image processing.

Vision infers that an [MLModel](../coreml/mlmodel.md) object is a predictor model if that model predicts multiple features. You can tell that a model predicts multiple features when its [modelDescription](../coreml/mlmodel/modeldescription.md) object has a `nil` value for its [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) property, or when it inserts its output in an [outputDescriptionsByName](../coreml/mlmodeldescription/outputdescriptionsbyname.md) dictionary.

## Topics

### Obtaining Feature Values

- [featureValue](vncoremlfeaturevalueobservation/featurevalue.md): The feature result of a [VNCoreMLRequest](vncoremlrequest.md) that outputs neither a classification nor an image.
- [featureName](vncoremlfeaturevalueobservation/featurename.md): The name used in the model description of the CoreML model that produced this observation.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
