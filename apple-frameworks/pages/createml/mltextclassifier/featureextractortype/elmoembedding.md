> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/featureextractortype/elmoembedding](https://developer.apple.com/documentation/createml/mltextclassifier/featureextractortype/elmoembedding)

# MLTextClassifier.FeatureExtractorType.elmoEmbedding

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A feature extractor that provides ELMo contextual word embeddings.

## Declaration

```swift
case elmoEmbedding
```

## Mentioned In

- [Creating a text classifier model](../../creating-a-text-classifier-model.md)

<a id="discussion"></a>

## Discussion

ELMo embeddings requires certain downloadable assets to be present on device at training time. Training will throw an error if the specified language is unavailable at runtime. Asset downloads are managed in the background automatically by the OS when a new language is configured in device settings, such as when adding a new keyboard language or changing the preferred language.

## See Also

### Selecting a feature extractor type

- [MLTextClassifier.FeatureExtractorType.customEmbedding(\_:)](customembedding%28__%29.md): A feature extractor that uses a custom embedding contained in a CoreML model file.
- [MLTextClassifier.FeatureExtractorType.staticEmbedding](staticembedding.md): A feature extractor that uses the standard, built-in word embeddings.
- [MLTextClassifier.FeatureExtractorType.bertEmbedding](bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.dynamicEmbedding](dynamicembedding.md): Deprecated. A feature extractor that provides embeddings for words, based on their in-context use.
