> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/supportedrevisions(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/supportedrevisions(for:))

# supportedRevisions(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves all version numbers of a word embedding for the given language.

## Declaration

```swift
class func supportedRevisions(for language: NLLanguage) -> IndexSet
```

## Parameters

- `language`: A language supported by the Natural Language framework.

<a id="return-value"></a>

## Return Value

An index set.

## See Also

### Checking for Natural Language support

- [currentRevision(for:)](currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [currentSentenceEmbeddingRevision(for:)](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisions(for:)](supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.

# supportedRevisionsForLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves all version numbers of a word embedding for the given language.

## Declaration

```objectivec
+ (NSIndexSet *) supportedRevisionsForLanguage:(NLLanguage) language;
```

## Parameters

- `language`: A language supported by the Natural Language framework.

<a id="return-value"></a>

## Return Value

An index set.

## See Also

### Checking for Natural Language support

- [currentRevisionForLanguage:](currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [currentSentenceEmbeddingRevisionForLanguage:](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisionsForLanguage:](supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.
