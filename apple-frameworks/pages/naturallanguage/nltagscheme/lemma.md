> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme/lemma](https://developer.apple.com/documentation/naturallanguage/nltagscheme/lemma)

# lemma (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that supplies a stem form of a word token, if known.

## Declaration

```swift
static let lemma: NLTagScheme
```

<a id="Discussion"></a>

## Discussion

For example, the stem of the English word “reading” is “read”.

## See Also

### Schemes

- [tokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [language](language.md): A scheme that supplies the language for a token, if it can determine one.
- [script](script.md): A scheme that supplies the script for a token, if it can determine one.
- [sentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

# NLTagSchemeLemma (Objective-C)

**Framework:** Natural Language  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that supplies a stem form of a word token, if known.

## Declaration

```objectivec
extern NLTagScheme const NLTagSchemeLemma;
```

<a id="Discussion"></a>

## Discussion

For example, the stem of the English word “reading” is “read”.

## See Also

### Schemes

- [NLTagSchemeTokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NLTagSchemeLexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NLTagSchemeNameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](lexicalclass.md).
- [NLTagSchemeLanguage](language.md): A scheme that supplies the language for a token, if it can determine one.
- [NLTagSchemeScript](script.md): A scheme that supplies the script for a token, if it can determine one.
- [NLTagSchemeSentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.
