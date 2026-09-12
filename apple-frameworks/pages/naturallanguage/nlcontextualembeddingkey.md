> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingkey](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingkey)

# NLContextualEmbeddingKey (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

This class defines properties that you can filter or search for contextual embeddings.

## Declaration

```swift
struct NLContextualEmbeddingKey
```

<a id="overview"></a>

## Overview

The keys within this class provide filtering criteria that you can specify within your model. For example, you can use a defined key like [scripts](nlcontextualembeddingkey/scripts.md) and search for models that use a specfic script like `Latin`.

## Topics

### Getting embedding keys

- [languages](nlcontextualembeddingkey/languages.md): A key that identifies the supported languages in a contextual embedding.
- [revision](nlcontextualembeddingkey/revision.md): A key that identifies the version number the contextual embedding uses.
- [scripts](nlcontextualembeddingkey/scripts.md): A key that identifies the writing system that the language uses in a contextual embedding.

### Creating embedding keys

- [init(\_:)](nlcontextualembeddingkey/init%28__%29.md): Creates an embedding key with the given string.
- [init(rawValue:)](nlcontextualembeddingkey/init%28rawvalue_%29.md): Creates an embedding key with the given string as its raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Contextual embedding

- [NLContextualEmbedding](nlcontextualembedding.md): A model that computes sequences of embedding vectors for natural language utterances.
- [NLScript](nlscript.md): The writing scripts that the Natural Language framework supports.

# NLContextualEmbeddingKey (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

This class defines properties that you can filter or search for contextual embeddings.

## Declaration

```objectivec
typedef NSString * NLContextualEmbeddingKey;
```

<a id="overview"></a>

## Overview

The keys within this class provide filtering criteria that you can specify within your model. For example, you can use a defined key like [NLContextualEmbeddingKeyScripts](nlcontextualembeddingkey/scripts.md) and search for models that use a specfic script like `Latin`.

## Topics

### Getting embedding keys

- [NLContextualEmbeddingKeyLanguages](nlcontextualembeddingkey/languages.md): A key that identifies the supported languages in a contextual embedding.
- [NLContextualEmbeddingKeyRevision](nlcontextualembeddingkey/revision.md): A key that identifies the version number the contextual embedding uses.
- [NLContextualEmbeddingKeyScripts](nlcontextualembeddingkey/scripts.md): A key that identifies the writing system that the language uses in a contextual embedding.

## See Also

### Contextual embedding

- [NLContextualEmbedding](nlcontextualembedding.md): A model that computes sequences of embedding vectors for natural language utterances.
- [NLScript](nlscript.md): The writing scripts that the Natural Language framework supports.
