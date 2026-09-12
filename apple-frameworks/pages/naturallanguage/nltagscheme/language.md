> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme/language](https://developer.apple.com/documentation/naturallanguage/nltagscheme/language)

# language (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that supplies the language for a token, if it can determine one.

## Declaration

```swift
static let language: NLTagScheme
```

<a id="Discussion"></a>

## Discussion

Each value for this tag scheme is listed in [NLLanguage](../nllanguage.md).

The tagger generally attempts to determine the language of text at the level of an entire sentence, paragraph, or document, rather than word by word.

## See Also

### Schemes

- [tokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [script](script.md): A scheme that supplies the script for a token, if it can determine one.
- [sentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

# NLTagSchemeLanguage (Objective-C)

**Framework:** Natural Language  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that supplies the language for a token, if it can determine one.

## Declaration

```objectivec
extern NLTagScheme const NLTagSchemeLanguage;
```

<a id="Discussion"></a>

## Discussion

Each value for this tag scheme is listed in [NLLanguage](../nllanguage.md).

The tagger generally attempts to determine the language of text at the level of an entire sentence, paragraph, or document, rather than word by word.

## See Also

### Schemes

- [NLTagSchemeTokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NLTagSchemeLexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NLTagSchemeNameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](lexicalclass.md).
- [NLTagSchemeLemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [NLTagSchemeScript](script.md): A scheme that supplies the script for a token, if it can determine one.
- [NLTagSchemeSentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.
