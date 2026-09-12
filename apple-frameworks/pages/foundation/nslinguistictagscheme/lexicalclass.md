> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagscheme/lexicalclass](https://developer.apple.com/documentation/foundation/nslinguistictagscheme/lexicalclass)

# lexicalClass (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Classifies tokens according to class:  part of speech, type of punctuation, or whitespace.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
static let lexicalClass: NSLinguisticTagScheme
```

## Mentioned In

- [Identifying Parts of Speech](../identifying-parts-of-speech.md)

<a id="Discussion"></a>

## Discussion

For possible values, see Lexical Classes.

The lexical class of a tag is a further distinction of its token type. Token types and lexical classes have the following correspondence:

| Token type | Lexical classes |
| --- | --- |
| [word](../nslinguistictag/word.md) | [noun](../nslinguistictag/noun.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [verb](../nslinguistictag/verb.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [adjective](../nslinguistictag/adjective.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [adverb](../nslinguistictag/adverb.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [pronoun](../nslinguistictag/pronoun.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [determiner](../nslinguistictag/determiner.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [particle](../nslinguistictag/particle.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [preposition](../nslinguistictag/preposition.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [number](../nslinguistictag/number.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [conjunction](../nslinguistictag/conjunction.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [interjection](../nslinguistictag/interjection.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [classifier](../nslinguistictag/classifier.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [idiom](../nslinguistictag/idiom.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [otherWord](../nslinguistictag/otherword.md) |
| [punctuation](../nslinguistictag/punctuation.md) | [sentenceTerminator](../nslinguistictag/sentenceterminator.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [openQuote](../nslinguistictag/openquote.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [closeQuote](../nslinguistictag/closequote.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [openParenthesis](../nslinguistictag/openparenthesis.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [closeParenthesis](../nslinguistictag/closeparenthesis.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [wordJoiner](../nslinguistictag/wordjoiner.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [dash](../nslinguistictag/dash.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [otherPunctuation](../nslinguistictag/otherpunctuation.md) |
| [whitespace](../nslinguistictag/whitespace.md) | [paragraphBreak](../nslinguistictag/paragraphbreak.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [otherWhitespace](../nslinguistictag/otherwhitespace.md) |
| [other](../nslinguistictag/other.md) | *None* |

## See Also

### Schemes

- [tokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [nameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [language](language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [script](script.md): Deprecated. Supplies the script for a token, if one can be determined.

# NSLinguisticTagSchemeLexicalClass (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Classifies tokens according to class:  part of speech, type of punctuation, or whitespace.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
extern NSLinguisticTagScheme const NSLinguisticTagSchemeLexicalClass;
```

## Mentioned In

- [Identifying Parts of Speech](../identifying-parts-of-speech.md)

<a id="Discussion"></a>

## Discussion

For possible values, see Lexical Classes.

The lexical class of a tag is a further distinction of its token type. Token types and lexical classes have the following correspondence:

| Token type | Lexical classes |
| --- | --- |
| [NSLinguisticTagWord](../nslinguistictag/word.md) | [NSLinguisticTagNoun](../nslinguistictag/noun.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagVerb](../nslinguistictag/verb.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagAdjective](../nslinguistictag/adjective.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagAdverb](../nslinguistictag/adverb.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagPronoun](../nslinguistictag/pronoun.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagDeterminer](../nslinguistictag/determiner.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagParticle](../nslinguistictag/particle.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagPreposition](../nslinguistictag/preposition.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagNumber](../nslinguistictag/number.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagConjunction](../nslinguistictag/conjunction.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagInterjection](../nslinguistictag/interjection.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagClassifier](../nslinguistictag/classifier.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagIdiom](../nslinguistictag/idiom.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagOtherWord](../nslinguistictag/otherword.md) |
| [NSLinguisticTagPunctuation](../nslinguistictag/punctuation.md) | [NSLinguisticTagSentenceTerminator](../nslinguistictag/sentenceterminator.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagOpenQuote](../nslinguistictag/openquote.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagCloseQuote](../nslinguistictag/closequote.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagOpenParenthesis](../nslinguistictag/openparenthesis.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagCloseParenthesis](../nslinguistictag/closeparenthesis.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagWordJoiner](../nslinguistictag/wordjoiner.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagDash](../nslinguistictag/dash.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagOtherPunctuation](../nslinguistictag/otherpunctuation.md) |
| [NSLinguisticTagWhitespace](../nslinguistictag/whitespace.md) | [NSLinguisticTagParagraphBreak](../nslinguistictag/paragraphbreak.md) ![](https://developer.apple.com/images/com.apple.foundation/spacer.png) [NSLinguisticTagOtherWhitespace](../nslinguistictag/otherwhitespace.md) |
| [NSLinguisticTagOther](../nslinguistictag/other.md) | *None* |

## See Also

### Schemes

- [NSLinguisticTagSchemeTokenType](tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NSLinguisticTagSchemeNameType](nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [NSLinguisticTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [NSLinguisticTagSchemeNameType](nametype.md), and classifies all other tokens according to [NSLinguisticTagSchemeLexicalClass](lexicalclass.md).
- [NSLinguisticTagSchemeLemma](lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [NSLinguisticTagSchemeLanguage](language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [NSLinguisticTagSchemeScript](script.md): Deprecated. Supplies the script for a token, if one can be determined.
