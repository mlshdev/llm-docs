> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/dimension](https://developer.apple.com/documentation/naturallanguage/nlembedding/dimension)

# dimension (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of dimensions in the vocabulary’s vector space.

## Declaration

```swift
var dimension: Int { get }
```

## See Also

### Inspecting the vocabulary of an embedding

- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [contains(\_:)](contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [vector(for:)](vector%28for_%29.md): Requests the vector for the given term.
- [revision](revision.md): The revision of the word embedding.

# dimension (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of dimensions in the vocabulary’s vector space.

## Declaration

```objectivec
@property (readonly) NSUInteger dimension;
```

## See Also

### Inspecting the vocabulary of an embedding

- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [containsString:](contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [vectorForString:](vectorforstring_.md): Requests the vector for the given term.
- [getVector:forString:](getvector_forstring_.md): Copies a vector into the given a pointer to a float array.
- [revision](revision.md): The revision of the word embedding.
