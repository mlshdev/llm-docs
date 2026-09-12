> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/featureextractortype/staticembedding](https://developer.apple.com/documentation/createml/mltextclassifier/featureextractortype/staticembedding)

# MLTextClassifier.FeatureExtractorType.staticEmbedding

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

A feature extractor that uses the standard, built-in word embeddings.

## Declaration

```swift
case staticEmbedding
```

<a id="discussion"></a>

## Discussion

The standard word embeddings are the same as those that [NLEmbedding](../../../naturallanguage/nlembedding.md) provides with its [wordEmbedding(for:)](../../../naturallanguage/nlembedding/wordembedding%28for_%29.md) method.

## See Also

### Selecting a feature extractor type

- [MLTextClassifier.FeatureExtractorType.customEmbedding(\_:)](customembedding%28__%29.md): A feature extractor that uses a custom embedding contained in a CoreML model file.
- [MLTextClassifier.FeatureExtractorType.bertEmbedding](bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.elmoEmbedding](elmoembedding.md): A feature extractor that provides ELMo contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.dynamicEmbedding](dynamicembedding.md): Deprecated. A feature extractor that provides embeddings for words, based on their in-context use.
