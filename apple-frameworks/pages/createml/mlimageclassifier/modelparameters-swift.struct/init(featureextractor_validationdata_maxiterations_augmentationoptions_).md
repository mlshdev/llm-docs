> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(featureextractor:validationdata:maxiterations:augmentationoptions:)](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(featureextractor:validationdata:maxiterations:augmentationoptions:))

# init(featureExtractor:validationData:maxIterations:augmentationOptions:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

Creates a new set of image classifier parameters with validation data represented by a data source.

> Use the validation property instead.

## Declaration

```swift
init(featureExtractor: MLImageClassifier.FeatureExtractorType = .scenePrint(revision: 1), validationData: MLImageClassifier.DataSource, maxIterations: Int = 25, augmentationOptions: MLImageClassifier.ImageAugmentationOptions = [])
```

## Parameters

- `featureExtractor`: A versioned feature extractor.
- `validationData`: The validation datasource.
- `maxIterations`: The maximum number of training iterations to use during training. The default is 25.
- `augmentationOptions`: The image augmentation options to use to increase the training data variety.

## See Also

### Creating parameters

- [init(validation:maxIterations:augmentation:algorithm:)](init%28validation_maxiterations_augmentation_algorithm_%29.md): Creates model training parameters.
- [init(featureExtractor:validation:maxIterations:augmentationOptions:)](init%28featureextractor_validation_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of training parameters for an image classifier with a validation dataset.
- [MLImageClassifier.ModelParameters.ClassifierType](classifiertype.md): Type of classifier to be used.
- [MLImageClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The model algorithm to use for training an image classifier.
