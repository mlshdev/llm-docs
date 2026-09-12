> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/vectorforstring:](https://developer.apple.com/documentation/naturallanguage/nlembedding/vectorforstring:)

# vectorForString:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests the vector for the given term.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) vectorForString:(NSString *) string;
```

## Parameters

- `string`: The term to find in the word embedding.

<a id="return-value"></a>

## Return Value

A vector represented as an array of doubles if present in the word embedding, otherwise `nil`.

## See Also

### Inspecting the vocabulary of an embedding

- [dimension](dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [containsString:](contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [getVector:forString:](getvector_forstring_.md): Copies a vector into the given a pointer to a float array.
- [revision](revision.md): The revision of the word embedding.
