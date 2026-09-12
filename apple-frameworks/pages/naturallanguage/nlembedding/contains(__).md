> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/contains(_:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/contains(_:))

# contains(\_:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests a Boolean value that indicates whether the term is in the vocabulary.

## Declaration

```swift
func contains(_ string: String) -> Bool
```

## Parameters

- `string`: The term to search for in the word embedding.

<a id="return-value"></a>

## Return Value

`true` if the term is in the word embedding’s vocabulary, otherwise `false`.

## See Also

### Inspecting the vocabulary of an embedding

- [dimension](dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [vector(for:)](vector%28for_%29.md): Requests the vector for the given term.
- [revision](revision.md): The revision of the word embedding.

# containsString: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests a Boolean value that indicates whether the term is in the vocabulary.

## Declaration

```objectivec
- (BOOL) containsString:(NSString *) string;
```

## Parameters

- `string`: The term to search for in the word embedding.

<a id="return-value"></a>

## Return Value

`true` if the term is in the word embedding’s vocabulary, otherwise `false`.

## See Also

### Inspecting the vocabulary of an embedding

- [dimension](dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [vectorForString:](vectorforstring_.md): Requests the vector for the given term.
- [getVector:forString:](getvector_forstring_.md): Copies a vector into the given a pointer to a float array.
- [revision](revision.md): The revision of the word embedding.
