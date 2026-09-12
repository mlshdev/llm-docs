> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/sentenceembedding(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/sentenceembedding(for:))

# sentenceEmbedding(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves a sentence embedding for a given language.

## Declaration

```swift
class func sentenceEmbedding(for language: NLLanguage) -> NLEmbedding?
```

## Parameters

- `language`: The language of the sentence embedding, such as [french](../nllanguage/french.md). For possible values, see [NLLanguage](../nllanguage.md).

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## Mentioned In

- [Finding similarities between pieces of text](../finding-similarities-between-pieces-of-text.md)

## See Also

### Creating a sentence embedding

- [sentenceEmbedding(for:revision:)](sentenceembedding%28for_revision_%29.md): Retrieves a sentence embedding for a given language and revision.

# sentenceEmbeddingForLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves a sentence embedding for a given language.

## Declaration

```objectivec
+ (NLEmbedding *) sentenceEmbeddingForLanguage:(NLLanguage) language;
```

## Parameters

- `language`: The language of the sentence embedding, such as [NLLanguageFrench](../nllanguage/french.md). For possible values, see [NLLanguage](../nllanguage.md).

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## Mentioned In

- [Finding similarities between pieces of text](../finding-similarities-between-pieces-of-text.md)

## See Also

### Creating a sentence embedding

- [sentenceEmbeddingForLanguage:revision:](sentenceembedding%28for_revision_%29.md): Retrieves a sentence embedding for a given language and revision.
