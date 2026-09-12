> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpixelbufferobservation](https://developer.apple.com/documentation/vision/vnpixelbufferobservation)

# VNPixelBufferObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents an image that an image-analysis request produces.

## Declaration

```swift
class VNPixelBufferObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model that has an image-to-image processing role. For example, this observation might result from a model that analyzes the style of one image and then transfers that style to a different image.

Vision infers that an [MLModel](../coreml/mlmodel.md) object is an image-to-image model if that model includes an image. Its [modelDescription](../coreml/mlmodel/modeldescription.md) object includes an image-typed feature description in its [outputDescriptionsByName](../coreml/mlmodeldescription/outputdescriptionsbyname.md) dictionary.

## Topics

### Parsing Observation Content

- [pixelBuffer](vnpixelbufferobservation/pixelbuffer.md): The image that results from a request with image output.
- [featureName](vnpixelbufferobservation/featurename.md): A feature name that the CoreML model defines.

### Getting the supported pixel formats

- [supportedOutputPixelFormats()](vngeneratepersonsegmentationrequest/supportedoutputpixelformats%28%29.md): Returns a list of output pixel formats that the request supports.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNSaliencyImageObservation](vnsaliencyimageobservation.md)

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
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

# VNPixelBufferObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents an image that an image-analysis request produces.

## Declaration

```objectivec
@interface VNPixelBufferObservation : VNObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [VNCoreMLRequest](vncoremlrequest.md) image analysis with a Core ML model that has an image-to-image processing role. For example, this observation might result from a model that analyzes the style of one image and then transfers that style to a different image.

Vision infers that an [MLModel](../coreml/mlmodel.md) object is an image-to-image model if that model includes an image. Its [modelDescription](../coreml/mlmodel/modeldescription.md) object includes an image-typed feature description in its [outputDescriptionsByName](../coreml/mlmodeldescription/outputdescriptionsbyname.md) dictionary.

## Topics

### Parsing Observation Content

- [pixelBuffer](vnpixelbufferobservation/pixelbuffer.md): The image that results from a request with image output.
- [featureName](vnpixelbufferobservation/featurename.md): A feature name that the CoreML model defines.

### Getting the supported pixel formats

- [supportedOutputPixelFormatsAndReturnError:](vngeneratepersonsegmentationrequest/supportedoutputpixelformats%28%29.md): Returns a list of output pixel formats that the request supports.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNSaliencyImageObservation](vnsaliencyimageobservation.md)

## See Also

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.
