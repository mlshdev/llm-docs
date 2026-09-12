> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct)

# MLImageClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Parameters that affect the process of training an image classifier model.

## Declaration

```swift
struct ModelParameters
```

<a id="overview"></a>

## Overview

Use this structure to configure the model training session. With it you can:

- Set a limit to the number of training iterations the session can use
- Provide your own validation dataset. See [MLImageClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md).
- Enable specific image augmentations. See [MLImageClassifier.ImageAugmentationOptions](imageaugmentationoptions.md).
- Designate a custom feature extractor. See [MLImageClassifier.FeatureExtractorType.custom(\_:)](featureextractortype/custom%28__%29.md).

Once you configure an [MLImageClassifier.ModelParameters](modelparameters-swift.struct.md) instance, use it to configure a training session with one of the applicable [MLImageClassifier](../mlimageclassifier.md) asynchronous type methods or synchronous initializers.

## Topics

### Creating parameters

- [init(validation:maxIterations:augmentation:algorithm:)](modelparameters-swift.struct/init%28validation_maxiterations_augmentation_algorithm_%29.md): Creates model training parameters.
- [init(featureExtractor:validation:maxIterations:augmentationOptions:)](modelparameters-swift.struct/init%28featureextractor_validation_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of training parameters for an image classifier with a validation dataset.
- [init(featureExtractor:validationData:maxIterations:augmentationOptions:)](modelparameters-swift.struct/init%28featureextractor_validationdata_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of image classifier parameters with validation data represented by a data source.
- [MLImageClassifier.ModelParameters.ClassifierType](modelparameters-swift.struct/classifiertype.md): Type of classifier to be used.
- [MLImageClassifier.ModelParameters.ModelAlgorithmType](modelparameters-swift.struct/modelalgorithmtype.md): The model algorithm to use for training an image classifier.

### Accessing the training parameters

- [algorithm](modelparameters-swift.struct/algorithm.md): Model algorithm to be used
- [featureExtractor](modelparameters-swift.struct/featureextractor.md): Deprecated. The underlying base model the training session uses to extract image features as it trains an image classifier.
- [validation](modelparameters-swift.struct/validation.md): The image classifier’s validation dataset.
- [maxIterations](modelparameters-swift.struct/maxiterations.md): The maximum number of iterations the training session can use.
- [augmentationOptions](modelparameters-swift.struct/augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. A set of images that the training process uses for validation.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the model parameters shown in a playground.

### Supporting types

- [MLImageClassifier.FeatureExtractorType](featureextractortype.md): The underlying base model that extracts image features for image classifier training session.
- [MLImageClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): The source of a validation dataset for an image classifier.
- [MLImageClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): The variations that the training process can use to generate more training data from the training data you provide.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Supporting types

- [MLImageClassifier.DataSource](datasource.md): A data source for an image classifier.
- [MLImageClassifier.FeatureExtractorType](featureextractortype.md): The underlying base model that extracts image features for image classifier training session.
- [MLImageClassifier.CustomFeatureExtractor](customfeatureextractor.md): A custom feature extractor a training session uses to train an image classifier.
- [MLImageClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): The variations that the training process can use to generate more training data from the training data you provide.
