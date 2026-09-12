> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme/tokentype](https://developer.apple.com/documentation/naturallanguage/nltagscheme/tokentype)

# tokenType (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.

## Declaration

```swift
static let tokenType: NLTagScheme
```

<a id="Discussion"></a>

## Discussion

For possible values, see Token types in [NLTag](../nltag.md).

To classify tokens by a more specific type, for example, distinguishing words between nouns and verbs, use the [lexicalClass](lexicalclass.md) scheme.

## See Also

### Schemes

- [lexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [language](language.md): A scheme that supplies the language for a token, if it can determine one.
- [script](script.md): A scheme that supplies the script for a token, if it can determine one.
- [sentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

# NLTagSchemeTokenType (Objective-C)

**Framework:** Natural Language  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.

## Declaration

```objectivec
extern NLTagScheme const NLTagSchemeTokenType;
```

<a id="Discussion"></a>

## Discussion

For possible values, see Token types in [NLTag](../nltag.md).

To classify tokens by a more specific type, for example, distinguishing words between nouns and verbs, use the [NLTagSchemeLexicalClass](lexicalclass.md) scheme.

## See Also

### Schemes

- [NLTagSchemeLexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NLTagSchemeNameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](lexicalclass.md).
- [NLTagSchemeLemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [NLTagSchemeLanguage](language.md): A scheme that supplies the language for a token, if it can determine one.
- [NLTagSchemeScript](script.md): A scheme that supplies the script for a token, if it can determine one.
- [NLTagSchemeSentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.
