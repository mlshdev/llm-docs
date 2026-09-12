> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/wordembedding(for:revision:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/wordembedding(for:revision:))

# wordEmbedding(for:revision:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a word embedding for a given language and revision.

## Declaration

```swift
class func wordEmbedding(for language: NLLanguage, revision: Int) -> NLEmbedding?
```

## Parameters

- `language`: The language of the word embedding, such as [french](../nllanguage/french.md).
- `revision`: The revision of the word embedding.

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## See Also

### Creating a word embedding

- [wordEmbedding(for:)](wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates a word embedding from a model file.

# wordEmbeddingForLanguage:revision: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a word embedding for a given language and revision.

## Declaration

```objectivec
+ (NLEmbedding *) wordEmbeddingForLanguage:(NLLanguage) language revision:(NSUInteger) revision;
```

## Parameters

- `language`: The language of the word embedding, such as [NLLanguageFrench](../nllanguage/french.md).
- `revision`: The revision of the word embedding.

<a id="return-value"></a>

## Return Value

An [NLEmbedding](../nlembedding.md) if available, otherwise `nil`.

## See Also

### Creating a word embedding

- [wordEmbeddingForLanguage:](wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [embeddingWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a word embedding from a model file.
