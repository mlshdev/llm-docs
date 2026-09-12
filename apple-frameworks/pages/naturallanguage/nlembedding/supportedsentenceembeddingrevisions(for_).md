> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/supportedsentenceembeddingrevisions(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/supportedsentenceembeddingrevisions(for:))

# supportedSentenceEmbeddingRevisions(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves all version numbers of a sentence embedding for the given language.

## Declaration

```swift
class func supportedSentenceEmbeddingRevisions(for language: NLLanguage) -> IndexSet
```

## Parameters

- `language`: A language supported by the Natural Language framework. For possible values, see [NLLanguage](../nllanguage.md).

<a id="return-value"></a>

## Return Value

An index set representing all of the supported version numbers of the sentence embedding.

## See Also

### Checking for Natural Language support

- [currentRevision(for:)](currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [supportedRevisions(for:)](supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevision(for:)](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.

# supportedSentenceEmbeddingRevisionsForLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Retrieves all version numbers of a sentence embedding for the given language.

## Declaration

```objectivec
+ (NSIndexSet *) supportedSentenceEmbeddingRevisionsForLanguage:(NLLanguage) language;
```

## Parameters

- `language`: A language supported by the Natural Language framework. For possible values, see [NLLanguage](../nllanguage.md).

<a id="return-value"></a>

## Return Value

An index set representing all of the supported version numbers of the sentence embedding.

## See Also

### Checking for Natural Language support

- [currentRevisionForLanguage:](currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [supportedRevisionsForLanguage:](supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevisionForLanguage:](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
