> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/getvector:forstring:](https://developer.apple.com/documentation/naturallanguage/nlembedding/getvector:forstring:)

# getVector:forString:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Copies a vector into the given a pointer to a float array.

## Declaration

```objectivec
- (BOOL) getVector:(float *) vector forString:(NSString *) string;
```

## Parameters

- `vector`: An array of floats the method copies the vector to. The array’s capacity must be at least [dimension](dimension.md).
- `string`: The term to find in the word embedding.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the method copied the vector.

## See Also

### Inspecting the vocabulary of an embedding

- [dimension](dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [containsString:](contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [vectorForString:](vectorforstring_.md): Requests the vector for the given term.
- [revision](revision.md): The revision of the word embedding.
