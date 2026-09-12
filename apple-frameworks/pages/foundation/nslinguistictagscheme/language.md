> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagscheme/language](https://developer.apple.com/documentation/foundation/nslinguistictagscheme/language)

# language (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Supplies the language for a token, if one can be determined.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
static let language: NSLinguisticTagScheme
```

<a id="Discussion"></a>

## Discussion

Each value for this tag scheme is a BCP-47 language identifier. For example, the language identifier for English is “en” and the identifier for Chinese written using the Simplified Chinese script is “zh-Hans”. The identifier “und” is used if a specific language cannot be determined.

The tagger generally attempts to determine the language of text at the level of an entire sentence, paragraph, or document, rather than word by word.

## See Also

### Schemes

- [tokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [script](script.md): Deprecated. Supplies the script for a token, if one can be determined.

# NSLinguisticTagSchemeLanguage (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Supplies the language for a token, if one can be determined.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
extern NSLinguisticTagScheme const NSLinguisticTagSchemeLanguage;
```

<a id="Discussion"></a>

## Discussion

Each value for this tag scheme is a BCP-47 language identifier. For example, the language identifier for English is “en” and the identifier for Chinese written using the Simplified Chinese script is “zh-Hans”. The identifier “und” is used if a specific language cannot be determined.

The tagger generally attempts to determine the language of text at the level of an entire sentence, paragraph, or document, rather than word by word.

## See Also

### Schemes

- [NSLinguisticTagSchemeTokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NSLinguisticTagSchemeLexicalClass](lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NSLinguisticTagSchemeNameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [NSLinguisticTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [NSLinguisticTagSchemeNameType](nametype.md), and classifies all other tokens according to [NSLinguisticTagSchemeLexicalClass](lexicalclass.md).
- [NSLinguisticTagSchemeLemma](lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [NSLinguisticTagSchemeScript](script.md): Deprecated. Supplies the script for a token, if one can be determined.
