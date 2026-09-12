> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/featureextractortype](https://developer.apple.com/documentation/createml/mltextclassifier/featureextractortype)

# MLTextClassifier.FeatureExtractorType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

The text feature extractor type.

## Declaration

```swift
enum FeatureExtractorType
```

## Mentioned In

- [Creating a text classifier model](../creating-a-text-classifier-model.md)

## Topics

### Selecting a feature extractor type

- [MLTextClassifier.FeatureExtractorType.customEmbedding(\_:)](featureextractortype/customembedding%28__%29.md): A feature extractor that uses a custom embedding contained in a CoreML model file.
- [MLTextClassifier.FeatureExtractorType.staticEmbedding](featureextractortype/staticembedding.md): A feature extractor that uses the standard, built-in word embeddings.
- [MLTextClassifier.FeatureExtractorType.bertEmbedding](featureextractortype/bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.elmoEmbedding](featureextractortype/elmoembedding.md): A feature extractor that provides ELMo contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.dynamicEmbedding](featureextractortype/dynamicembedding.md): Deprecated. A feature extractor that provides embeddings for words, based on their in-context use.

### Describing a feature extractor type

- [description](featureextractortype/description.md): A text representation of a feature extractor type.
- [debugDescription](featureextractortype/debugdescription.md): A text representation of the feature extractor type that’s suitable for output during debugging.
- [playgroundDescription](featureextractortype/playgrounddescription.md): A description of the feature extractor type shown in a playground.

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
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLTextClassifier.ModelAlgorithmType](modelalgorithmtype.md): The type of algorithm that a text classifier uses.
