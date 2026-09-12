> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/modelalgorithmtype)

# MLImageClassifier.ModelParameters.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The model algorithm to use for training an image classifier.

## Declaration

```swift
enum ModelAlgorithmType
```

## Topics

### Designating an algorithm type

- [MLImageClassifier.ModelParameters.ModelAlgorithmType.transferLearning(featureExtractor:classifier:)](modelalgorithmtype/transferlearning%28featureextractor_classifier_%29.md): Train using a transfer-learning algorithm with a specified feature extractor and classifier.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating parameters

- [init(validation:maxIterations:augmentation:algorithm:)](init%28validation_maxiterations_augmentation_algorithm_%29.md): Creates model training parameters.
- [init(featureExtractor:validation:maxIterations:augmentationOptions:)](init%28featureextractor_validation_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of training parameters for an image classifier with a validation dataset.
- [init(featureExtractor:validationData:maxIterations:augmentationOptions:)](init%28featureextractor_validationdata_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of image classifier parameters with validation data represented by a data source.
- [MLImageClassifier.ModelParameters.ClassifierType](classifiertype.md): Type of classifier to be used.
