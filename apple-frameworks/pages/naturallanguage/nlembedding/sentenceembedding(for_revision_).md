> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/sentenceembedding(for:revision:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/sentenceembedding(for:revision:))

# sentenceEmbedding(for:revision:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves a sentence embedding for a given language and revision.

## Declaration

```swift
class func sentenceEmbedding(for language: NLLanguage, revision: Int) -> NLEmbedding?
```

## Parameters

- `language`: The language of the sentence embedding, such as [french](../nllanguage/french.md). For possible values, see [NLLanguage](../nllanguage.md).
- `revision`: The revision of the sentence embedding.

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## See Also

### Creating a sentence embedding

- [sentenceEmbedding(for:)](sentenceembedding%28for_%29.md): Retrieves a sentence embedding for a given language.

# sentenceEmbeddingForLanguage:revision: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves a sentence embedding for a given language and revision.

## Declaration

```objectivec
+ (NLEmbedding *) sentenceEmbeddingForLanguage:(NLLanguage) language revision:(NSUInteger) revision;
```

## Parameters

- `language`: The language of the sentence embedding, such as [NLLanguageFrench](../nllanguage/french.md). For possible values, see [NLLanguage](../nllanguage.md).
- `revision`: The revision of the sentence embedding.

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## See Also

### Creating a sentence embedding

- [sentenceEmbeddingForLanguage:](sentenceembedding%28for_%29.md): Retrieves a sentence embedding for a given language.
