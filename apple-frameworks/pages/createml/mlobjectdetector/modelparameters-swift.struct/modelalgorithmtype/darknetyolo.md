> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/modelalgorithmtype/darknetyolo](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/modelalgorithmtype/darknetyolo)

# MLObjectDetector.ModelParameters.ModelAlgorithmType.darknetYolo

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

An algorithm that trains a full neural network with your training data.

## Declaration

```swift
case darknetYolo
```

<a id="discussion"></a>

## Discussion

Use this algorithm when your training dataset has a significant number of examples.

## See Also

### Designating an algorithm

- [MLObjectDetector.ModelParameters.ModelAlgorithmType.transferLearning(\_:)](transferlearning%28__%29.md): An algorithm that leverages the knowledge of a general purpose model built into the operating system.
- [MLObjectDetector.ModelParameters.FeatureExtractorType](../featureextractortype.md): The underlying base model that extracts image features for an object-detector training session.
