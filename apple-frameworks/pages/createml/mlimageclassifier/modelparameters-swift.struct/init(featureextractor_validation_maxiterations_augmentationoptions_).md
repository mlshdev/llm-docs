> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(featureextractor:validation:maxiterations:augmentationoptions:)](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/init(featureextractor:validation:maxiterations:augmentationoptions:))

# init(featureExtractor:validation:maxIterations:augmentationOptions:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 11.0) · visionOS 1.0+

Creates a new set of training parameters for an image classifier with a validation dataset.

> Use featureExtractor in ModelAlgorithm Type instead.

## Declaration

```swift
init(featureExtractor: MLImageClassifier.FeatureExtractorType = .scenePrint(revision: 1), validation: MLImageClassifier.ModelParameters.ValidationData = .split(strategy: .automatic), maxIterations: Int = 25, augmentationOptions: MLImageClassifier.ImageAugmentationOptions = [])
```

## Parameters

- `featureExtractor`: The feature extractor you want Create ML to use during the training session.
- `validation`: A validation dataset.
- `maxIterations`: The maximum number of training iterations to use during training. The default is 25.
- `augmentationOptions`: The image augmentation options to use to increase the training data variety.

## See Also

### Creating parameters

- [init(validation:maxIterations:augmentation:algorithm:)](init%28validation_maxiterations_augmentation_algorithm_%29.md): Creates model training parameters.
- [init(featureExtractor:validationData:maxIterations:augmentationOptions:)](init%28featureextractor_validationdata_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of image classifier parameters with validation data represented by a data source.
- [MLImageClassifier.ModelParameters.ClassifierType](classifiertype.md): Type of classifier to be used.
- [MLImageClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The model algorithm to use for training an image classifier.
