> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(validation:maxiterations:augmentation:algorithm:)](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(validation:maxiterations:augmentation:algorithm:))

# init(validation:maxIterations:augmentation:algorithm:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates model training parameters.

## Declaration

```swift
init(validation: MLImageClassifier.ModelParameters.ValidationData = __Defaults.validation, maxIterations: Int = __Defaults.maximumIterations, augmentation: MLImageClassifier.ImageAugmentationOptions, algorithm: MLImageClassifier.ModelParameters.ModelAlgorithmType = __Defaults.algorithm)
```

## Parameters

- `validation`: Labeled data that the model evaluates on for validation. The default is `.split(strategy: .automatic)`.
- `maxIterations`: The maximum number of training iterations to use during training. The default is 25.
- `augmentation`: The image augmentation options to use to increase the training data variety. If no data augmentation needs to be applied, use `[]` as input. Otherwise, inputs take the form `[.crop, .blur]`.
- `algorithm`: The type of model algorithm to use for training. The default is a logistic regression classifier with a `sceneprint(revision: 1)` feature extractor.

## See Also

### Creating parameters

- [init(featureExtractor:validation:maxIterations:augmentationOptions:)](init%28featureextractor_validation_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of training parameters for an image classifier with a validation dataset.
- [init(featureExtractor:validationData:maxIterations:augmentationOptions:)](init%28featureextractor_validationdata_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of image classifier parameters with validation data represented by a data source.
- [MLImageClassifier.ModelParameters.ClassifierType](classifiertype.md): Type of classifier to be used.
- [MLImageClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The model algorithm to use for training an image classifier.
