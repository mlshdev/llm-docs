> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/custompronunciation](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/custompronunciation)

# SFCustomLanguageModelData.CustomPronunciation

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A term to be introduced into the speech recognition model’s vocabulary.

## Declaration

```swift
struct CustomPronunciation
```

<a id="overview"></a>

## Overview

Attempts to add terms that are already in the model’s vocabulary will be ignored. Pronunciations that use X-SAMPA symbols that are not supported will be ignored; see [supportedPhonemes(locale:)](supportedphonemes%28locale_%29.md) for the set of supported symbols.

## Topics

### Creating a term

- [init(grapheme:phonemes:)](custompronunciation/init%28grapheme_phonemes_%29.md)

### Inspecting a term

- [grapheme](custompronunciation/grapheme.md): The written representation of the term, the way it is expected to appear in transcriptions.
- [phonemes](custompronunciation/phonemes.md): Zero or more phonetic representations of the term, given as X-SAMPA strings.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataInsertable](../datainsertable.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding terms

- [insert(term:)](insert%28term_%29.md): Add a custom term to the vocabulary.
- [supportedPhonemes(locale:)](supportedphonemes%28locale_%29.md): List the supported subset of X-SAMPA pronunciations supported by this locale for the Speech framework.
