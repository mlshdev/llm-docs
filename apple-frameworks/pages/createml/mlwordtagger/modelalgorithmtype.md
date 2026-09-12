> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlwordtagger/modelalgorithmtype)

# MLWordTagger.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

The algorithm type.

## Declaration

```swift
enum ModelAlgorithmType
```

## Topics

### Selecting an algorithm type

- [MLWordTagger.ModelAlgorithmType.crf(revision:)](modelalgorithmtype/crf%28revision_%29.md): A conditional random field algorithm.
- [MLWordTagger.ModelAlgorithmType.transferLearning(\_:revision:)](modelalgorithmtype/transferlearning%28__revision_%29.md): A transfer-learning algorithm.
- [MLWordTagger.FeatureExtractorType](featureextractortype.md): The feature extractors that are available to train a word tagger using with the transfer-learning algorithm option.

### Describing an algorithm type

- [description](modelalgorithmtype/description.md): A text representation of the model algorithm type.
- [debugDescription](modelalgorithmtype/debugdescription.md): A text representation of the algorithm type that’s suitable for output during debugging.
- [playgroundDescription](modelalgorithmtype/playgrounddescription.md): A description of the algorithm type in a playground.

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

- [MLWordTagger.FeatureExtractorType](featureextractortype.md): The feature extractors that are available to train a word tagger using with the transfer-learning algorithm option.
