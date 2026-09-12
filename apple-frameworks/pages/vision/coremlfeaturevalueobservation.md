> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coremlfeaturevalueobservation](https://developer.apple.com/documentation/vision/coremlfeaturevalueobservation)

# CoreMLFeatureValueObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents a collection of key-value information that a Core ML image-analysis request produces.

## Declaration

```swift
struct CoreMLFeatureValueObservation
```

<a id="overview"></a>

## Overview

This type of observation results from performing a [CoreMLRequest](coremlrequest.md) image analysis with a [Core ML](../coreml.md) model whose role is prediction rather than classification or image-to-image processing.

The framework infers that an [MLModel](../coreml/mlmodel.md) object is a predictor model if that model predicts multiple features. You can tell that a model predicts multiple features when its [modelDescription](../coreml/mlmodel/modeldescription.md) object has a `nil` value for its [predictedFeatureName](../coreml/mlmodeldescription/predictedfeaturename.md) property, or when it inserts its output in an [outputDescriptionsByName](../coreml/mlmodeldescription/outputdescriptionsbyname.md) dictionary.

The confidence for these observations is always `1.0`.

## Topics

### Creating an observation

- [init(\_:)](coremlfeaturevalueobservation/init%28__%29.md): Creates a feature value observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.

### Getting the feature name and value

- [featureName](coremlfeaturevalueobservation/featurename.md): The name in the model description of the model that produces this observation.
- [featureValue](coremlfeaturevalueobservation/featurevalue.md): The feature result of a request that outputs neither a classification nor an image.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)

## See Also

### Understanding the result

- [PixelBufferObservation](pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [ClassificationObservation](classificationobservation.md): An object that represents classification information that an image-analysis request produces.
