> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coremlrequest](https://developer.apple.com/documentation/vision/coremlrequest)

# CoreMLRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-analysis request that uses a Core ML model to process images.

## Declaration

```swift
struct CoreMLRequest
```

<a id="overview"></a>

## Overview

The results array of a [Core ML](../coreml.md)-based image-analysis request contain a different observation type, depending on the kind of `MLModel` object you use:

- If the model predicts a single feature and the model’s [MLModelDescription](../coreml/mlmodeldescription.md) object has a non-`nil` value for [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md), then Vision treats the model as a classifier. The results are [ClassificationObservation](classificationobservation.md) objects.
- If the model’s outputs include at least one output with a feature type of [MLFeatureType.image](../coreml/mlfeaturetype/image.md), Vision treats that model as an image-to-image model. The results are [PixelBufferObservation](pixelbufferobservation.md) objects.
- Otherwise, Vision treats the model as a general predictor model. The results are [CoreMLFeatureValueObservation](coremlfeaturevalueobservation.md) objects.

> **Note**

>  Vision forwards all confidence values from Core ML models as-is and doesn’t normalize them to \[0, 1\].

## Topics

### Creating a request

- [init(model:\_:)](coremlrequest/init%28model___%29.md): Creates a Core ML request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [PixelBufferObservation](pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [ClassificationObservation](classificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [CoreMLFeatureValueObservation](coremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

### Configuring a request

- [supportedIdentifiers](coremlrequest/supportedidentifiers.md): The classification identifiers supported by the request.
- [modelContainer](coremlrequest/modelcontainer.md): The model to base the image analysis request on.
- [CoreMLModelContainer](coremlmodelcontainer.md): A model container to use with an image-analysis request.
- [ComputeStage](computestage.md): Types that represent the compute stage.
- [cropAndScaleAction](coremlrequest/cropandscaleaction.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [ImageCropAndScaleAction](imagecropandscaleaction.md): A scale to apply to an input image before performing a request.

### Getting the revision

- [revision](coremlrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](coremlrequest/supportedrevisions.md): The collection of revisions the request supports.
- [CoreMLRequest.Revision](coremlrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)
