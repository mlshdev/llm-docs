> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/contextualembeddings(forvalues:)

# contextualEmbeddings(forValues:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns contextual embedding models that match the specified language, script, or revision criteria.

## Declaration

```swift
class func contextualEmbeddings(forValues valuesDictionary: [NLContextualEmbeddingKey : Any]) -> [NLContextualEmbedding]
```

# contextualEmbeddingsForValues: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns contextual embedding models that match the specified language, script, or revision criteria.

## Declaration

```objectivec
+ (NSArray<NLContextualEmbedding *> *) contextualEmbeddingsForValues:(NSDictionary<NSString *,id> *) valuesDictionary;
```
