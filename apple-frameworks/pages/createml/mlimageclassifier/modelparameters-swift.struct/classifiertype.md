> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/classifiertype](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/classifiertype)

# MLImageClassifier.ModelParameters.ClassifierType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Type of classifier to be used.

## Declaration

```swift
enum ClassifierType
```

## Topics

### Designating an algorithm’s classifier

- [MLImageClassifier.ModelParameters.ClassifierType.logisticRegressor](classifiertype/logisticregressor.md): Logistic regression is a statistical model that classifies input feature vector into different categories.
- [MLImageClassifier.ModelParameters.ClassifierType.multilayerPerceptron(layerSizes:)](classifiertype/multilayerperceptron%28layersizes_%29.md): Multilayer perceptron, layerSizes holds a list of positive integers that represent the number of hidden units in each layer. An additional fully connected layer with a Softmax activation output will be added that maps to probabilities of sound categories.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating parameters

- [init(validation:maxIterations:augmentation:algorithm:)](init%28validation_maxiterations_augmentation_algorithm_%29.md): Creates model training parameters.
- [init(featureExtractor:validation:maxIterations:augmentationOptions:)](init%28featureextractor_validation_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of training parameters for an image classifier with a validation dataset.
- [init(featureExtractor:validationData:maxIterations:augmentationOptions:)](init%28featureextractor_validationdata_maxiterations_augmentationoptions_%29.md): Deprecated. Creates a new set of image classifier parameters with validation data represented by a data source.
- [MLImageClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The model algorithm to use for training an image classifier.
