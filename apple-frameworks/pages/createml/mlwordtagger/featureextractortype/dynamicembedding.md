> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/featureextractortype/dynamicembedding

# MLWordTagger.FeatureExtractorType.dynamicEmbedding

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+ (deprecated in 14.0)

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

- [MLWordTagger.FeatureExtractorType.bertEmbedding](bertembedding.md): A feature extractor that provides BERT contextual word embeddings.
- [MLWordTagger.FeatureExtractorType.elmoEmbedding](elmoembedding.md): A feature extractor that provides ELMo contextual word embeddings.
