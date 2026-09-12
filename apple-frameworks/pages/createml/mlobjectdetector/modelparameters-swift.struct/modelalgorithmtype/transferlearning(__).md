> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/modelalgorithmtype/transferlearning(_:)](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/modelalgorithmtype/transferlearning(_:))

# MLObjectDetector.ModelParameters.ModelAlgorithmType.transferLearning(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

An algorithm that leverages the knowledge of a general purpose model built into the operating system.

## Declaration

```swift
case transferLearning(MLObjectDetector.ModelParameters.FeatureExtractorType)
```

<a id="discussion"></a>

## Discussion

You typically use this transfer-learning algorithm to train an object detector in these situations:

- Your training dataset has a limited number of examples.
- You prefer your object detector’s Core ML model file to be as small as possible.

## See Also

### Designating an algorithm

- [MLObjectDetector.ModelParameters.ModelAlgorithmType.darknetYolo](darknetyolo.md): An algorithm that trains a full neural network with your training data.
- [MLObjectDetector.ModelParameters.FeatureExtractorType](../featureextractortype.md): The underlying base model that extracts image features for an object-detector training session.
