> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/imageaugmentationoptions](https://developer.apple.com/documentation/createml/mlimageclassifier/imageaugmentationoptions)

# MLImageClassifier.ImageAugmentationOptions

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

The variations that the training process can use to generate more training data from the training data you provide.

## Declaration

```swift
struct ImageAugmentationOptions
```

<a id="overview"></a>

## Overview

Augmentation generates new images from the training data you supply to increase the amount of training data available to the model.

See [Improving Your Model’s Accuracy](../improving-your-model-s-accuracy.md) for a discussion about when to use augmentation.

## Topics

### Selecting augmentation options

- [crop](imageaugmentationoptions/crop.md): An option for augmenting training data by creating cropped versions of each image.
- [rotation](imageaugmentationoptions/rotation.md): An option for augmenting training data by rotating each image.
- [blur](imageaugmentationoptions/blur.md): An option for augmenting training data by blurring each image.
- [exposure](imageaugmentationoptions/exposure.md): An option for augmenting training data by lightening or darkening each image.
- [noise](imageaugmentationoptions/noise.md): An option for augmenting training data by adding random amounts of noise to each image.
- [flip](imageaugmentationoptions/flip.md): An option for augmenting training data by flipping each image along the horizontal and vertical axes.

### Creating augmentation options

- [init(rawValue:)](imageaugmentationoptions/init%28rawvalue_%29.md): Creates an augmentation set with the given raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting types

- [MLImageClassifier.DataSource](datasource.md): A data source for an image classifier.
- [MLImageClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training an image classifier model.
- [MLImageClassifier.FeatureExtractorType](featureextractortype.md): The underlying base model that extracts image features for image classifier training session.
- [MLImageClassifier.CustomFeatureExtractor](customfeatureextractor.md): A custom feature extractor a training session uses to train an image classifier.
