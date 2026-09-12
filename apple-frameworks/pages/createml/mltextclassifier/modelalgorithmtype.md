> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelalgorithmtype](https://developer.apple.com/documentation/createml/mltextclassifier/modelalgorithmtype)

# MLTextClassifier.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

The type of algorithm that a text classifier uses.

## Declaration

```swift
enum ModelAlgorithmType
```

## Mentioned In

- [Creating a text classifier model](../creating-a-text-classifier-model.md)
- [Improving Your Model’s Accuracy](../improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

Typically, `maxEnt` is the fastest training algorithm. If the text classifier’s performance isn’t good enough, consider the `transferLearning` algorithm.

## Topics

### Selecting an algorithm type

- [MLTextClassifier.ModelAlgorithmType.crf(revision:)](modelalgorithmtype/crf%28revision_%29.md): A text classification algorithm that uses a statistical model of transition probabilities between words.
- [MLTextClassifier.ModelAlgorithmType.maxEnt(revision:)](modelalgorithmtype/maxent%28revision_%29.md): A text classification algorithm that uses multinomial logistic regression based on the frequencies of words, independent of context.
- [MLTextClassifier.ModelAlgorithmType.transferLearning(\_:revision:)](modelalgorithmtype/transferlearning%28__revision_%29.md): A text classification algorithm that uses transfer learning by leveraging a feature extractor to generate embeddings.
- [MLTextClassifier.FeatureExtractorType](featureextractortype.md): The text feature extractor type.

### Describing an algorithm type

- [description](modelalgorithmtype/description.md): A text representation of the algorithm type.
- [debugDescription](modelalgorithmtype/debugdescription.md): A text representation of the algorithm type that’s suitable for output during debugging.
- [playgroundDescription](modelalgorithmtype/playgrounddescription.md): A description of the algorithm type shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelalgorithmtype/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelalgorithmtype/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelalgorithmtype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLTextClassifier.FeatureExtractorType](featureextractortype.md): The text feature extractor type.
