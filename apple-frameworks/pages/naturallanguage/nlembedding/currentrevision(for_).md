> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/currentrevision(for:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/currentrevision(for:))

# currentRevision(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the current version of a word embedding for the given language.

## Declaration

```swift
class func currentRevision(for language: NLLanguage) -> Int
```

## Parameters

- `language`: A language supported by the Natural Language framework.

<a id="return-value"></a>

## Return Value

An integer.

## See Also

### Checking for Natural Language support

- [supportedRevisions(for:)](supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevision(for:)](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisions(for:)](supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.

# currentRevisionForLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the current version of a word embedding for the given language.

## Declaration

```objectivec
+ (NSUInteger) currentRevisionForLanguage:(NLLanguage) language;
```

## Parameters

- `language`: A language supported by the Natural Language framework.

<a id="return-value"></a>

## Return Value

An integer.

## See Also

### Checking for Natural Language support

- [supportedRevisionsForLanguage:](supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevisionForLanguage:](currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisionsForLanguage:](supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.
