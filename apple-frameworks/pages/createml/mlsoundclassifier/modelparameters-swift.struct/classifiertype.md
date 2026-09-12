> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/classifiertype](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/classifiertype)

# MLSoundClassifier.ModelParameters.ClassifierType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The classifier options for a sound classifier training algorithm.

## Declaration

```swift
enum ClassifierType
```

## Topics

### Designating an algorithm’s classifier

- [MLSoundClassifier.ModelParameters.ClassifierType.logisticRegressor](classifiertype/logisticregressor.md): A statistical model that uses logistic regression to classify an input vector into a category.
- [MLSoundClassifier.ModelParameters.ClassifierType.multilayerPerceptron(layerSizes:)](classifiertype/multilayerperceptron%28layersizes_%29.md): A neural network model that uses three or more layers to classify an input into a category.

### Describing a classifier type

- [description](classifiertype/description.md): A text representation of the classifier type.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLSoundClassifier.ModelParameters.ValidationData](validationdata.md): The source of a validation dataset for a sound classifier.
- [MLSoundClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The algorithm options to train a sound classifier.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType](featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](featureprinttype.md): The type options for an Audio Feature Print feature extractor.
