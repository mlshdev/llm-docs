> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlrequest](https://developer.apple.com/documentation/vision/vncoremlrequest)

# VNCoreMLRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that uses a Core ML model to process images.

## Declaration

```swift
class VNCoreMLRequest
```

<a id="overview"></a>

## Overview

The results array of a Core ML-based image analysis request contains a different observation type, depending on the kind of [MLModel](../coreml/mlmodel.md) object you use:

- If the model predicts a single feature, the model’s [modelDescription](../coreml/mlmodel/modeldescription.md) object has a non-`nil` value for [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) and Vision treats the model as a classifier. The results are [VNClassificationObservation](vnclassificationobservation.md) objects.
- If the model’s outputs include at least one output with a feature type of [MLFeatureType.image](../coreml/mlfeaturetype/image.md), Vision treats that model as an image-to-image model. The results are [VNPixelBufferObservation](vnpixelbufferobservation.md) objects.
- Otherwise, Vision treats the model as a general predictor model. The results are [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md) objects.

> **Note**

>  Vision forwards all [confidence](vnobservation/confidence.md) values from Core ML models as-is and doesn’t normalize them to `[0, 1]`.

## Topics

### Initializing with a Core ML Model

- [init(model:)](vncoremlrequest/init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [init(model:completionHandler:)](vncoremlrequest/init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [model](vncoremlrequest/model.md): The model to base the image analysis request on.
- [VNCoreMLModel](vncoremlmodel.md): A container for the model to use with Vision requests.

### Configuring Image Options

- [imageCropAndScaleOption](vncoremlrequest/imagecropandscaleoption.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [VNImageCropAndScaleOption](vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

### Identifying Request Revisions

- [VNCoreMLRequestRevision1](vncoremlrequestrevision1.md): A constant for specifying revision 1 of a Core ML request.

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

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

# VNCoreMLRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that uses a Core ML model to process images.

## Declaration

```objectivec
@interface VNCoreMLRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

The results array of a Core ML-based image analysis request contains a different observation type, depending on the kind of [MLModel](../coreml/mlmodel.md) object you use:

- If the model predicts a single feature, the model’s [modelDescription](../coreml/mlmodel/modeldescription.md) object has a non-`nil` value for [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) and Vision treats the model as a classifier. The results are [VNClassificationObservation](vnclassificationobservation.md) objects.
- If the model’s outputs include at least one output with a feature type of [MLFeatureTypeImage](../coreml/mlfeaturetype/image.md), Vision treats that model as an image-to-image model. The results are [VNPixelBufferObservation](vnpixelbufferobservation.md) objects.
- Otherwise, Vision treats the model as a general predictor model. The results are [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md) objects.

> **Note**

>  Vision forwards all [confidence](vnobservation/confidence.md) values from Core ML models as-is and doesn’t normalize them to `[0, 1]`.

## Topics

### Initializing with a Core ML Model

- [initWithModel:](vncoremlrequest/init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [initWithModel:completionHandler:](vncoremlrequest/init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [model](vncoremlrequest/model.md): The model to base the image analysis request on.
- [VNCoreMLModel](vncoremlmodel.md): A container for the model to use with Vision requests.

### Configuring Image Options

- [imageCropAndScaleOption](vncoremlrequest/imagecropandscaleoption.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [VNImageCropAndScaleOption](vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

### Identifying Request Revisions

- [VNCoreMLRequestRevision1](vncoremlrequestrevision1.md): A constant for specifying revision 1 of a Core ML request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.
