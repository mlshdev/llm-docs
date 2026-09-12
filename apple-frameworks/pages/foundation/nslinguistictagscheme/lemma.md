> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagscheme/lemma](https://developer.apple.com/documentation/foundation/nslinguistictagscheme/lemma)

# lemma (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Supplies a stem form of a word token, if known.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
static let lemma: NSLinguisticTagScheme
```

<a id="Discussion"></a>

## Discussion

For example, the stem of the English word “reading” is “read”.

## See Also

### Schemes

- [tokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [language](language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [script](script.md): Deprecated. Supplies the script for a token, if one can be determined.

# NSLinguisticTagSchemeLemma (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Supplies a stem form of a word token, if known.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
extern NSLinguisticTagScheme const NSLinguisticTagSchemeLemma;
```

<a id="Discussion"></a>

## Discussion

For example, the stem of the English word “reading” is “read”.

## See Also

### Schemes

- [NSLinguisticTagSchemeTokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NSLinguisticTagSchemeLexicalClass](lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NSLinguisticTagSchemeNameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [NSLinguisticTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [NSLinguisticTagSchemeNameType](nametype.md), and classifies all other tokens according to [NSLinguisticTagSchemeLexicalClass](lexicalclass.md).
- [NSLinguisticTagSchemeLanguage](language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [NSLinguisticTagSchemeScript](script.md): Deprecated. Supplies the script for a token, if one can be determined.
