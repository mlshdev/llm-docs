> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictag](https://developer.apple.com/documentation/foundation/nslinguistictag)

# NSLinguisticTag (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

## Declaration

```swift
struct NSLinguisticTag
```

<a id="overview"></a>

## Overview

When you create a linguistic tagger, you specify one or more [NSLinguisticTagScheme](nslinguistictagscheme.md) constants that correspond to the kind of information you want to know about a selection of natural language text.  When working with linguistic tags using the methods described in Getting Linguistic Tags and Enumerating Linguistic Tags, the returned value depends on the specified scheme. The [NSLinguisticTag](nslinguistictag.md) type represents the constant values that can be returned for certain [NSLinguisticTagScheme](nslinguistictagscheme.md) values.

## Topics

### Token Types

Constants representing the token type of a tag with the [tokenType](nslinguistictagscheme/tokentype.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [word](nslinguistictag/word.md): Deprecated. The token indicates a word.
- [punctuation](nslinguistictag/punctuation.md): Deprecated. The token indicates punctuation.
- [whitespace](nslinguistictag/whitespace.md): Deprecated. The token indicates white space of any sort.
- [other](nslinguistictag/other.md): Deprecated. The token indicates a non-linguistic item, such as a symbol.

### Lexical Classes

Constants specifying the lexical class of a tag with the [lexicalClass](nslinguistictagscheme/lexicalclass.md) or [nameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [noun](nslinguistictag/noun.md): Deprecated. The token is a noun.
- [verb](nslinguistictag/verb.md): Deprecated. This token is a verb.
- [adjective](nslinguistictag/adjective.md): Deprecated. This token is an adjective
- [adverb](nslinguistictag/adverb.md): Deprecated. This token is an adverb.
- [pronoun](nslinguistictag/pronoun.md): Deprecated. This token is a pronoun.
- [determiner](nslinguistictag/determiner.md): Deprecated. This token is a determiner.
- [particle](nslinguistictag/particle.md): Deprecated. This token is a particle.
- [preposition](nslinguistictag/preposition.md): Deprecated. This token is a preposition.
- [number](nslinguistictag/number.md): Deprecated. This token is a number.
- [conjunction](nslinguistictag/conjunction.md): Deprecated. This token is a conjunction.
- [interjection](nslinguistictag/interjection.md): Deprecated. This token is an interjection.
- [classifier](nslinguistictag/classifier.md): Deprecated. This token is a classifier.
- [idiom](nslinguistictag/idiom.md): Deprecated. This token is an idiom.
- [otherWord](nslinguistictag/otherword.md): Deprecated. This token is a word other than a kind described by other lexical classes (noun, verb, adjective, adverb, pronoun, determiner, particle, preposition, number, conjunction, interjection, classifier, and idiom).
- [sentenceTerminator](nslinguistictag/sentenceterminator.md): Deprecated. This token is a sentence terminator.
- [openQuote](nslinguistictag/openquote.md): Deprecated. This token is an open quote.
- [closeQuote](nslinguistictag/closequote.md): Deprecated. This token is a close quote.
- [openParenthesis](nslinguistictag/openparenthesis.md): Deprecated. This token is an open parenthesis.
- [closeParenthesis](nslinguistictag/closeparenthesis.md): Deprecated. This token is a close parenthesis.
- [wordJoiner](nslinguistictag/wordjoiner.md): Deprecated. This token is a word joiner.
- [dash](nslinguistictag/dash.md): Deprecated. This token is a dash.
- [otherPunctuation](nslinguistictag/otherpunctuation.md): Deprecated. This token is punctuation other than a kind described by other lexical classes (sentence terminator, open or close quote, open or close parenthesis, word joiner, and dash).
- [paragraphBreak](nslinguistictag/paragraphbreak.md): Deprecated. This token is a paragraph break.
- [otherWhitespace](nslinguistictag/otherwhitespace.md): Deprecated. This token is whitespace other than a kind described by other lexical classes (paragraph break).

### Name Types

Constants specifying the name type of a tag with the [nameType](nslinguistictagscheme/nametype.md) or [nameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [personalName](nslinguistictag/personalname.md): Deprecated. This token is a personal name.
- [organizationName](nslinguistictag/organizationname.md): Deprecated. This token is an organization name.
- [placeName](nslinguistictag/placename.md): Deprecated. This token is a place name.

### Initializers

- [init(\_:)](nslinguistictag/init%28__%29.md)
- [init(rawValue:)](nslinguistictag/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.

# NSLinguisticTag (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

## Declaration

```objectivec
typedef NSString * NSLinguisticTag;
```

<a id="overview"></a>

## Overview

When you create a linguistic tagger, you specify one or more [NSLinguisticTagScheme](nslinguistictagscheme.md) constants that correspond to the kind of information you want to know about a selection of natural language text.  When working with linguistic tags using the methods described in Getting Linguistic Tags and Enumerating Linguistic Tags, the returned value depends on the specified scheme. The [NSLinguisticTag](nslinguistictag.md) type represents the constant values that can be returned for certain [NSLinguisticTagScheme](nslinguistictagscheme.md) values.

## Topics

### Token Types

Constants representing the token type of a tag with the [NSLinguisticTagSchemeTokenType](nslinguistictagscheme/tokentype.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [NSLinguisticTagWord](nslinguistictag/word.md): Deprecated. The token indicates a word.
- [NSLinguisticTagPunctuation](nslinguistictag/punctuation.md): Deprecated. The token indicates punctuation.
- [NSLinguisticTagWhitespace](nslinguistictag/whitespace.md): Deprecated. The token indicates white space of any sort.
- [NSLinguisticTagOther](nslinguistictag/other.md): Deprecated. The token indicates a non-linguistic item, such as a symbol.

### Lexical Classes

Constants specifying the lexical class of a tag with the [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md) or [NSLinguisticTagSchemeNameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [NSLinguisticTagNoun](nslinguistictag/noun.md): Deprecated. The token is a noun.
- [NSLinguisticTagVerb](nslinguistictag/verb.md): Deprecated. This token is a verb.
- [NSLinguisticTagAdjective](nslinguistictag/adjective.md): Deprecated. This token is an adjective
- [NSLinguisticTagAdverb](nslinguistictag/adverb.md): Deprecated. This token is an adverb.
- [NSLinguisticTagPronoun](nslinguistictag/pronoun.md): Deprecated. This token is a pronoun.
- [NSLinguisticTagDeterminer](nslinguistictag/determiner.md): Deprecated. This token is a determiner.
- [NSLinguisticTagParticle](nslinguistictag/particle.md): Deprecated. This token is a particle.
- [NSLinguisticTagPreposition](nslinguistictag/preposition.md): Deprecated. This token is a preposition.
- [NSLinguisticTagNumber](nslinguistictag/number.md): Deprecated. This token is a number.
- [NSLinguisticTagConjunction](nslinguistictag/conjunction.md): Deprecated. This token is a conjunction.
- [NSLinguisticTagInterjection](nslinguistictag/interjection.md): Deprecated. This token is an interjection.
- [NSLinguisticTagClassifier](nslinguistictag/classifier.md): Deprecated. This token is a classifier.
- [NSLinguisticTagIdiom](nslinguistictag/idiom.md): Deprecated. This token is an idiom.
- [NSLinguisticTagOtherWord](nslinguistictag/otherword.md): Deprecated. This token is a word other than a kind described by other lexical classes (noun, verb, adjective, adverb, pronoun, determiner, particle, preposition, number, conjunction, interjection, classifier, and idiom).
- [NSLinguisticTagSentenceTerminator](nslinguistictag/sentenceterminator.md): Deprecated. This token is a sentence terminator.
- [NSLinguisticTagOpenQuote](nslinguistictag/openquote.md): Deprecated. This token is an open quote.
- [NSLinguisticTagCloseQuote](nslinguistictag/closequote.md): Deprecated. This token is a close quote.
- [NSLinguisticTagOpenParenthesis](nslinguistictag/openparenthesis.md): Deprecated. This token is an open parenthesis.
- [NSLinguisticTagCloseParenthesis](nslinguistictag/closeparenthesis.md): Deprecated. This token is a close parenthesis.
- [NSLinguisticTagWordJoiner](nslinguistictag/wordjoiner.md): Deprecated. This token is a word joiner.
- [NSLinguisticTagDash](nslinguistictag/dash.md): Deprecated. This token is a dash.
- [NSLinguisticTagOtherPunctuation](nslinguistictag/otherpunctuation.md): Deprecated. This token is punctuation other than a kind described by other lexical classes (sentence terminator, open or close quote, open or close parenthesis, word joiner, and dash).
- [NSLinguisticTagParagraphBreak](nslinguistictag/paragraphbreak.md): Deprecated. This token is a paragraph break.
- [NSLinguisticTagOtherWhitespace](nslinguistictag/otherwhitespace.md): Deprecated. This token is whitespace other than a kind described by other lexical classes (paragraph break).

### Name Types

Constants specifying the name type of a tag with the [NSLinguisticTagSchemeNameType](nslinguistictagscheme/nametype.md) or [NSLinguisticTagSchemeNameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) scheme. In Objective-C you may use pointer equality to compare the values with tag constants.

- [NSLinguisticTagPersonalName](nslinguistictag/personalname.md): Deprecated. This token is a personal name.
- [NSLinguisticTagOrganizationName](nslinguistictag/organizationname.md): Deprecated. This token is an organization name.
- [NSLinguisticTagPlaceName](nslinguistictag/placename.md): Deprecated. This token is a place name.

## See Also

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.
