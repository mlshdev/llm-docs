> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/wordembedding(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/wordembedding(for:))

# wordEmbedding(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a word embedding for a given language.

## Declaration

```swift
class func wordEmbedding(for language: NLLanguage) -> NLEmbedding?
```

## Parameters

- `language`: The language of the word embedding, such as [french](../nllanguage/french.md).

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## Mentioned In

- [Finding similarities between pieces of text](../finding-similarities-between-pieces-of-text.md)

## See Also

### Creating a word embedding

- [wordEmbedding(for:revision:)](wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates a word embedding from a model file.

# wordEmbeddingForLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a word embedding for a given language.

## Declaration

```objectivec
+ (NLEmbedding *) wordEmbeddingForLanguage:(NLLanguage) language;
```

## Parameters

- `language`: The language of the word embedding, such as [NLLanguageFrench](../nllanguage/french.md).

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## Mentioned In

- [Finding similarities between pieces of text](../finding-similarities-between-pieces-of-text.md)

## See Also

### Creating a word embedding

- [wordEmbeddingForLanguage:revision:](wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.
- [embeddingWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a word embedding from a model file.
