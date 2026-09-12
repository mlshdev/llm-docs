> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/featureextractortype/dynamicembedding](https://developer.apple.com/documentation/createml/mltextclassifier/featureextractortype/dynamicembedding)

# MLTextClassifier.FeatureExtractorType.dynamicEmbedding

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · visionOS 1.0+

A feature extractor that provides embeddings for words, based on their in-context use.

## Declaration

```swift
case dynamicEmbedding
```

<a id="discussion"></a>

## Discussion

Dynamic embedding requires certain downloadable assets to be present on device at training time. Training will throw an error if the specified language is unavailable at runtime. Asset downloads are managed in the background automatically by the OS when a new language is configured in device settings, such as when adding a new keyboard language or changing the preferred language.

## See Also

### Selecting a feature extractor type

- [MLTextClassifier.FeatureExtractorType.customEmbedding(\_:)](customembedding%28__%29.md): A feature extractor that uses a custom embedding contained in a CoreML model file.
- [MLTextClassifier.FeatureExtractorType.staticEmbedding](staticembedding.md): A feature extractor that uses the standard, built-in word embeddings.
- [MLTextClassifier.FeatureExtractorType.bertEmbedding](bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLTextClassifier.FeatureExtractorType.elmoEmbedding](elmoembedding.md): A feature extractor that provides ELMo contextual word embeddings.
