> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nlembedding/writeembeddingfordictionary:language:revision:tourl:error:

# writeEmbeddingForDictionary:language:revision:toURL:error:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Exports the word embedding contained within a Core ML model file at the given URL.

## Declaration

```objectivec
+ (BOOL) writeEmbeddingForDictionary:(NSDictionary<NSString *,NSArray<NSNumber *> *> *) dictionary language:(NLLanguage) language revision:(NSUInteger) revision toURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `dictionary`: A dictionary of terms, and their vectors, which are represented by an array of doubles.
- `language`: The language of the text in the word embedding.
- `revision`: The revision of the word embedding.
- `url`: The location in the file system to write the file to.
