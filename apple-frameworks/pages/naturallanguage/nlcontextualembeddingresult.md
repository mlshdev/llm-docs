> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingresult](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult)

# NLContextualEmbeddingResult (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents the embedding vector result from applying a contextual embedding to a string.

## Declaration

```swift
class NLContextualEmbeddingResult
```

<a id="overview"></a>

## Overview

This object returns embeddings at the subword level, meaning a single word may generate multiple vectors, especially for rare or complex terms. If you need to work with whole-word embeddings or create single representations for entire text inputs, pool or combine subword vectors.

## Topics

### Inspecting the result

- [language](nlcontextualembeddingresult/language.md): The language that the framework identified or used when processing the input string.
- [sequenceLength](nlcontextualembeddingresult/sequencelength.md): The number of embedding vectors the request generates.
- [string](nlcontextualembeddingresult/string.md): A copy of the input string used to generate the embedding vectors.

### Enumerating the vectors

- [enumerateTokenVectors(in:using:)](nlcontextualembeddingresult/enumeratetokenvectors%28in_using_%29.md): Iterates over the embedding vectors corresponding to the subword tokens within the specified range of the input string.
- [tokenVector(at:)](nlcontextualembeddingresult/tokenvector%28at_%29.md): Gets a token vector at the index you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Applying an embedding

- [embeddingResult(for:language:)](nlcontextualembedding/embeddingresult%28for_language_%29.md): Applies an embedding to a string and obtains the resulting embedding vectors.

# NLContextualEmbeddingResult (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents the embedding vector result from applying a contextual embedding to a string.

## Declaration

```objectivec
@interface NLContextualEmbeddingResult : NSObject
```

<a id="overview"></a>

## Overview

This object returns embeddings at the subword level, meaning a single word may generate multiple vectors, especially for rare or complex terms. If you need to work with whole-word embeddings or create single representations for entire text inputs, pool or combine subword vectors.

## Topics

### Inspecting the result

- [language](nlcontextualembeddingresult/language.md): The language that the framework identified or used when processing the input string.
- [sequenceLength](nlcontextualembeddingresult/sequencelength.md): The number of embedding vectors the request generates.
- [string](nlcontextualembeddingresult/string.md): A copy of the input string used to generate the embedding vectors.

### Enumerating the vectors

- [enumerateTokenVectorsInRange:usingBlock:](nlcontextualembeddingresult/enumeratetokenvectorsinrange_usingblock_.md): Iterates over the embedding vectors corresponding to the subword tokens within the specified range of the input string.
- [tokenVectorAtIndex:tokenRange:](nlcontextualembeddingresult/tokenvectoratindex_tokenrange_.md): Returns a token vector at the specified character index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Applying an embedding

- [embeddingResultForString:language:error:](nlcontextualembedding/embeddingresult%28for_language_%29.md): Applies an embedding to a string and obtains the resulting embedding vectors.
