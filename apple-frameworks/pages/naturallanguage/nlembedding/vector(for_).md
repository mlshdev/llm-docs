> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/vector(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/vector(for:))

# vector(for:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests the vector for the given term.

## Declaration

```swift
@nonobjc func vector(for string: String) -> [Double]?
```

## Parameters

- `string`: The term to find in the word embedding.

<a id="return-value"></a>

## Return Value

A vector represented as an array of doubles if present in the word embedding, otherwise `nil`.

## Mentioned In

- [Finding similarities between pieces of text](../finding-similarities-between-pieces-of-text.md)

<a id="discussion"></a>

## Discussion

> **Important**

> This method isn’t safe to call concurrently on a shared [NLEmbedding](../nlembedding.md) instance. Calling it from multiple threads, queues, or tasks at the same time can corrupt the embedding’s state and crash your app. Serialize calls into a shared instance, or give each thread its own instance.

## See Also

### Inspecting the vocabulary of an embedding

- [dimension](dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](vocabularysize.md): The number of words in the vocabulary.
- [language](language.md): The language of the text in the word embedding.
- [contains(\_:)](contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [revision](revision.md): The revision of the word embedding.
