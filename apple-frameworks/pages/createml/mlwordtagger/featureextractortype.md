> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/featureextractortype](https://developer.apple.com/documentation/createml/mlwordtagger/featureextractortype)

# MLWordTagger.FeatureExtractorType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

The feature extractors that are available to train a word tagger using with the transfer-learning algorithm option.

## Declaration

```swift
enum FeatureExtractorType
```

## Topics

### Selecting a feature extractor type

- [MLWordTagger.FeatureExtractorType.bertEmbedding](featureextractortype/bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLWordTagger.FeatureExtractorType.elmoEmbedding](featureextractortype/elmoembedding.md): A feature extractor that provides ELMo contextual word embeddings.
- [MLWordTagger.FeatureExtractorType.dynamicEmbedding](featureextractortype/dynamicembedding.md): Deprecated. A feature extractor that provides embeddings for words, based on their in-context use.

### Describing a feature extractor type

- [description](featureextractortype/description.md): A text representation of a feature extractor type.
- [debugDescription](featureextractortype/debugdescription.md): A text representation of the feature extractor that’s suitable for output during debugging.
- [playgroundDescription](featureextractortype/playgrounddescription.md): A description of the feature extractor in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](featureextractortype/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](featureextractortype/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](featureextractortype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLWordTagger.ModelAlgorithmType](modelalgorithmtype.md): The algorithm type.
