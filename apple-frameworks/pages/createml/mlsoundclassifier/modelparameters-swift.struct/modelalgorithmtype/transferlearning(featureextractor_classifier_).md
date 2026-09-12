> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/modelalgorithmtype/transferlearning(featureextractor:classifier:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/modelalgorithmtype/transferlearning(featureextractor:classifier:))

# MLSoundClassifier.ModelParameters.ModelAlgorithmType.transferLearning(featureExtractor:classifier:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

An algorithm that leverages the knowledge of a general-purpose model built into the operating system.

## Declaration

```swift
case transferLearning(featureExtractor: MLSoundClassifier.ModelParameters.FeatureExtractorType, classifier: MLSoundClassifier.ModelParameters.ClassifierType)
```

## Parameters

- `featureExtractor`: The extractor type the algorithm uses to detect features from the audio data.
- `classifier`: The model type the algorithm uses to classify audio data.

<a id="discussion"></a>

## Discussion

You typically use this transfer-learning algorithm to train an object detector in these situations:

- Your training dataset has a limited number of examples.
- You prefer your object detector’s Core ML model file to be as small as possible.

## See Also

### Designating an algorithm

- [MLSoundClassifier.ModelParameters.FeatureExtractorType](../featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.ClassifierType](../classifiertype.md): The classifier options for a sound classifier training algorithm.
