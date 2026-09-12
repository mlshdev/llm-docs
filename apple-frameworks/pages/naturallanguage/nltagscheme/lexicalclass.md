> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme/lexicalclass](https://developer.apple.com/documentation/naturallanguage/nltagscheme/lexicalclass)

# lexicalClass (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.

## Declaration

```swift
static let lexicalClass: NLTagScheme
```

## Mentioned In

- [Identifying parts of speech](../identifying-parts-of-speech.md)

<a id="Discussion"></a>

## Discussion

For possible values, see Lexical classes in [NLTag](../nltag.md).

The lexical class of a tag is a further distinction of its token type. Token types and lexical classes have the following correspondence:

| Token Type | Lexical classes |
| --- | --- |
| [word](../nltag/word.md) | [noun](../nltag/noun.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [verb](../nltag/verb.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [adjective](../nltag/adjective.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [adverb](../nltag/adverb.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [pronoun](../nltag/pronoun.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [determiner](../nltag/determiner.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [particle](../nltag/particle.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [preposition](../nltag/preposition.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [number](../nltag/number.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [conjunction](../nltag/conjunction.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [interjection](../nltag/interjection.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [classifier](../nltag/classifier.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [idiom](../nltag/idiom.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [otherWord](../nltag/otherword.md) |
| [punctuation](../nltag/punctuation.md) | [sentenceTerminator](../nltag/sentenceterminator.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [openQuote](../nltag/openquote.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [closeQuote](../nltag/closequote.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [openParenthesis](../nltag/openparenthesis.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [closeParenthesis](../nltag/closeparenthesis.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [wordJoiner](../nltag/wordjoiner.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [dash](../nltag/dash.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [otherPunctuation](../nltag/otherpunctuation.md) |
| [whitespace](../nltag/whitespace.md) | [paragraphBreak](../nltag/paragraphbreak.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [otherWhitespace](../nltag/otherwhitespace.md) |
| [other](../nltag/other.md) | *None* |

## See Also

### Schemes

- [tokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [nameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [language](language.md): A scheme that supplies the language for a token, if it can determine one.
- [script](script.md): A scheme that supplies the script for a token, if it can determine one.
- [sentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

# NLTagSchemeLexicalClass (Objective-C)

**Framework:** Natural Language  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.

## Declaration

```objectivec
extern NLTagScheme const NLTagSchemeLexicalClass;
```

## Mentioned In

- [Identifying parts of speech](../identifying-parts-of-speech.md)

<a id="Discussion"></a>

## Discussion

For possible values, see Lexical classes in [NLTag](../nltag.md).

The lexical class of a tag is a further distinction of its token type. Token types and lexical classes have the following correspondence:

| Token Type | Lexical classes |
| --- | --- |
| [NLTagWord](../nltag/word.md) | [NLTagNoun](../nltag/noun.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagVerb](../nltag/verb.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagAdjective](../nltag/adjective.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagAdverb](../nltag/adverb.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagPronoun](../nltag/pronoun.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagDeterminer](../nltag/determiner.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagParticle](../nltag/particle.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagPreposition](../nltag/preposition.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagNumber](../nltag/number.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagConjunction](../nltag/conjunction.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagInterjection](../nltag/interjection.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagClassifier](../nltag/classifier.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagIdiom](../nltag/idiom.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagOtherWord](../nltag/otherword.md) |
| [NLTagPunctuation](../nltag/punctuation.md) | [NLTagSentenceTerminator](../nltag/sentenceterminator.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagOpenQuote](../nltag/openquote.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagCloseQuote](../nltag/closequote.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagOpenParenthesis](../nltag/openparenthesis.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagCloseParenthesis](../nltag/closeparenthesis.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagWordJoiner](../nltag/wordjoiner.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagDash](../nltag/dash.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagOtherPunctuation](../nltag/otherpunctuation.md) |
| [NLTagWhitespace](../nltag/whitespace.md) | [NLTagParagraphBreak](../nltag/paragraphbreak.md) ![](https://developer.apple.com/images/com.apple.naturallanguage/spacer.png) [NLTagOtherWhitespace](../nltag/otherwhitespace.md) |
| [NLTagOther](../nltag/other.md) | *None* |

## See Also

### Schemes

- [NLTagSchemeTokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NLTagSchemeNameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](lexicalclass.md).
- [NLTagSchemeLemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [NLTagSchemeLanguage](language.md): A scheme that supplies the language for a token, if it can determine one.
- [NLTagSchemeScript](script.md): A scheme that supplies the script for a token, if it can determine one.
- [NLTagSchemeSentimentScore](sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.
