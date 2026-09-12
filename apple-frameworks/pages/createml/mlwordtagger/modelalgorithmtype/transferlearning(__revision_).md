> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelalgorithmtype/transferlearning(_:revision:)](https://developer.apple.com/documentation/createml/mlwordtagger/modelalgorithmtype/transferlearning(_:revision:))

# MLWordTagger.ModelAlgorithmType.transferLearning(\_:revision:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

A transfer-learning algorithm.

## Declaration

```swift
case transferLearning(MLWordTagger.FeatureExtractorType, revision: Int = 1)
```

## See Also

### Selecting an algorithm type

- [MLWordTagger.ModelAlgorithmType.crf(revision:)](crf%28revision_%29.md): A conditional random field algorithm.
- [MLWordTagger.FeatureExtractorType](../featureextractortype.md): The feature extractors that are available to train a word tagger using with the transfer-learning algorithm option.
