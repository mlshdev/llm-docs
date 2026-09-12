> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/modelalgorithmtype)

# MLSoundClassifier.ModelParameters.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The algorithm options to train a sound classifier.

## Declaration

```swift
enum ModelAlgorithmType
```

## Topics

### Designating an algorithm

- [MLSoundClassifier.ModelParameters.ModelAlgorithmType.transferLearning(featureExtractor:classifier:)](modelalgorithmtype/transferlearning%28featureextractor_classifier_%29.md): An algorithm that leverages the knowledge of a general-purpose model built into the operating system.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType](featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.ClassifierType](classifiertype.md): The classifier options for a sound classifier training algorithm.

### Describing an algorithm

- [description](modelalgorithmtype/description.md): A text representation of the training algorithm.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLSoundClassifier.ModelParameters.ValidationData](validationdata.md): The source of a validation dataset for a sound classifier.
- [MLSoundClassifier.ModelParameters.ClassifierType](classifiertype.md): The classifier options for a sound classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType](featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](featureprinttype.md): The type options for an Audio Feature Print feature extractor.
