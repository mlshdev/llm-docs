> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelalgorithmtype/transferlearning(_:revision:)](https://developer.apple.com/documentation/createml/mltextclassifier/modelalgorithmtype/transferlearning(_:revision:))

# MLTextClassifier.ModelAlgorithmType.transferLearning(\_:revision:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

A text classification algorithm that uses transfer learning by leveraging a feature extractor to generate embeddings.

## Declaration

```swift
case transferLearning(MLTextClassifier.FeatureExtractorType, revision: Int?)
```

## Parameters

- `_`: Feature extractor to be used by the transfer learning algorithm.
- `revision`: The algorithm version. The only supported version is 1. If `nil` defaults to the latest version.

## Mentioned In

- [Creating a text classifier model](../../creating-a-text-classifier-model.md)

## See Also

### Selecting an algorithm type

- [MLTextClassifier.ModelAlgorithmType.crf(revision:)](crf%28revision_%29.md): A text classification algorithm that uses a statistical model of transition probabilities between words.
- [MLTextClassifier.ModelAlgorithmType.maxEnt(revision:)](maxent%28revision_%29.md): A text classification algorithm that uses multinomial logistic regression based on the frequencies of words, independent of context.
- [MLTextClassifier.FeatureExtractorType](../featureextractortype.md): The text feature extractor type.
