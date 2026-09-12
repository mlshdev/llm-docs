> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltag](https://developer.apple.com/documentation/naturallanguage/nltag)

# NLTag (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A token type, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

## Declaration

```swift
struct NLTag
```

<a id="Overview"></a>

## Overview

When you create a linguistic tagger, you specify one or more [NLTagScheme](nltagscheme.md) constants that correspond to the kind of information you want to know about a selection of natural language text. When working with linguistic tags using the methods described in Getting linguistic tags and Enumerating linguistic tags in [NLTagger](nltagger.md), the returned value depends on the specified scheme. The [NLTag](nltag.md) type represents the constant values that can be returned for certain [NLTagScheme](nltagscheme.md) values.

## Topics

### Token types

Constants representing the token type of a tag with the [tokenType](nltagscheme/tokentype.md) scheme.

- [word](nltag/word.md): A tag indicating that the token is a word.
- [punctuation](nltag/punctuation.md): A tag indicating that the token is punctuation.
- [whitespace](nltag/whitespace.md): A tag indicating that the token is white space of any sort.
- [other](nltag/other.md): A tag indicating that the token is a non-linguistic item, such as a symbol.

### Lexical classes

Constants specifying the lexical class of a tag with the [lexicalClass](nltagscheme/lexicalclass.md) or [nameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md) scheme.

- [noun](nltag/noun.md): A tag indicating that the token is a noun.
- [verb](nltag/verb.md): A tag indicating that the token is a verb.
- [adjective](nltag/adjective.md): A tag indicating that the token is an adjective
- [adverb](nltag/adverb.md): A tag indicating that the token is an adverb.
- [pronoun](nltag/pronoun.md): A tag indicating that the token is a pronoun.
- [determiner](nltag/determiner.md): A tag indicating that the token is a determiner.
- [particle](nltag/particle.md): A tag indicating that the token is a particle.
- [preposition](nltag/preposition.md): A tag indicating that the token is a preposition.
- [number](nltag/number.md): A tag indicating that the token is a number.
- [conjunction](nltag/conjunction.md): A tag indicating that the token is a conjunction.
- [interjection](nltag/interjection.md): A tag indicating that the token is an interjection.
- [classifier](nltag/classifier.md): A tag indicating that the token is a classifier.
- [idiom](nltag/idiom.md): A tag indicating that the token is an idiom.
- [otherWord](nltag/otherword.md): A tag indicating that the token is a word other than a kind described by other lexical classes (noun, verb, adjective, adverb, pronoun, determiner, particle, preposition, number, conjunction, interjection, classifier, and idiom).
- [sentenceTerminator](nltag/sentenceterminator.md): A tag indicating that the token is punctuation at the end of a sentence.
- [openQuote](nltag/openquote.md): A tag indicating that the token is an open quote.
- [closeQuote](nltag/closequote.md): A tag indicating that the token is a close quote.
- [openParenthesis](nltag/openparenthesis.md): A tag indicating that the token is an open parenthesis.
- [closeParenthesis](nltag/closeparenthesis.md): A tag indicating that the token is a close parenthesis.
- [wordJoiner](nltag/wordjoiner.md): A tag indicating that the token is a word joiner, signifying that two tokens on each side should not be broken up.
- [dash](nltag/dash.md): A tag indicating that the token is a dash.
- [otherPunctuation](nltag/otherpunctuation.md): A tag indicating that the token is punctuation other than a kind described by other lexical classes (sentence terminator, open or close quote, open or close parenthesis, word joiner, and dash).
- [paragraphBreak](nltag/paragraphbreak.md): A tag indicating that the token is a paragraph break.
- [otherWhitespace](nltag/otherwhitespace.md): A tag indicating that the token is whitespace other than a kind described by other lexical classes (paragraph break).

### Name types

Constants specifying the name type of a tag with the [nameType](nltagscheme/nametype.md) or [nameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md) scheme.

- [personalName](nltag/personalname.md): A tag indicating that the token is a personal name.
- [organizationName](nltag/organizationname.md): A tag indicating that the token is an organization name.
- [placeName](nltag/placename.md): A tag indicating that the token is a place name.

### Initializers

- [init(\_:)](nltag/init%28__%29.md): Creates a new tag.
- [init(rawValue:)](nltag/init%28rawvalue_%29.md): Creates a new tag from the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerating linguistic tags

- [enumerateTags(in:unit:scheme:options:using:)](nltagger/enumeratetags%28in_unit_scheme_options_using_%29.md): Enumerates a block over the tagger’s string, given a range, token unit, and tag scheme.
- [NLTagger.Options](nltagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

# NLTag (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A token type, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

## Declaration

```objectivec
typedef NSString * NLTag;
```

<a id="Overview"></a>

## Overview

When you create a linguistic tagger, you specify one or more [NLTagScheme](nltagscheme.md) constants that correspond to the kind of information you want to know about a selection of natural language text. When working with linguistic tags using the methods described in Getting linguistic tags and Enumerating linguistic tags in [NLTagger](nltagger.md), the returned value depends on the specified scheme. The [NLTag](nltag.md) type represents the constant values that can be returned for certain [NLTagScheme](nltagscheme.md) values.

## Topics

### Token types

Constants representing the token type of a tag with the [NLTagSchemeTokenType](nltagscheme/tokentype.md) scheme.

- [NLTagWord](nltag/word.md): A tag indicating that the token is a word.
- [NLTagPunctuation](nltag/punctuation.md): A tag indicating that the token is punctuation.
- [NLTagWhitespace](nltag/whitespace.md): A tag indicating that the token is white space of any sort.
- [NLTagOther](nltag/other.md): A tag indicating that the token is a non-linguistic item, such as a symbol.

### Lexical classes

Constants specifying the lexical class of a tag with the [NLTagSchemeLexicalClass](nltagscheme/lexicalclass.md) or [NLTagSchemeNameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md) scheme.

- [NLTagNoun](nltag/noun.md): A tag indicating that the token is a noun.
- [NLTagVerb](nltag/verb.md): A tag indicating that the token is a verb.
- [NLTagAdjective](nltag/adjective.md): A tag indicating that the token is an adjective
- [NLTagAdverb](nltag/adverb.md): A tag indicating that the token is an adverb.
- [NLTagPronoun](nltag/pronoun.md): A tag indicating that the token is a pronoun.
- [NLTagDeterminer](nltag/determiner.md): A tag indicating that the token is a determiner.
- [NLTagParticle](nltag/particle.md): A tag indicating that the token is a particle.
- [NLTagPreposition](nltag/preposition.md): A tag indicating that the token is a preposition.
- [NLTagNumber](nltag/number.md): A tag indicating that the token is a number.
- [NLTagConjunction](nltag/conjunction.md): A tag indicating that the token is a conjunction.
- [NLTagInterjection](nltag/interjection.md): A tag indicating that the token is an interjection.
- [NLTagClassifier](nltag/classifier.md): A tag indicating that the token is a classifier.
- [NLTagIdiom](nltag/idiom.md): A tag indicating that the token is an idiom.
- [NLTagOtherWord](nltag/otherword.md): A tag indicating that the token is a word other than a kind described by other lexical classes (noun, verb, adjective, adverb, pronoun, determiner, particle, preposition, number, conjunction, interjection, classifier, and idiom).
- [NLTagSentenceTerminator](nltag/sentenceterminator.md): A tag indicating that the token is punctuation at the end of a sentence.
- [NLTagOpenQuote](nltag/openquote.md): A tag indicating that the token is an open quote.
- [NLTagCloseQuote](nltag/closequote.md): A tag indicating that the token is a close quote.
- [NLTagOpenParenthesis](nltag/openparenthesis.md): A tag indicating that the token is an open parenthesis.
- [NLTagCloseParenthesis](nltag/closeparenthesis.md): A tag indicating that the token is a close parenthesis.
- [NLTagWordJoiner](nltag/wordjoiner.md): A tag indicating that the token is a word joiner, signifying that two tokens on each side should not be broken up.
- [NLTagDash](nltag/dash.md): A tag indicating that the token is a dash.
- [NLTagOtherPunctuation](nltag/otherpunctuation.md): A tag indicating that the token is punctuation other than a kind described by other lexical classes (sentence terminator, open or close quote, open or close parenthesis, word joiner, and dash).
- [NLTagParagraphBreak](nltag/paragraphbreak.md): A tag indicating that the token is a paragraph break.
- [NLTagOtherWhitespace](nltag/otherwhitespace.md): A tag indicating that the token is whitespace other than a kind described by other lexical classes (paragraph break).

### Name types

Constants specifying the name type of a tag with the [NLTagSchemeNameType](nltagscheme/nametype.md) or [NLTagSchemeNameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md) scheme.

- [NLTagPersonalName](nltag/personalname.md): A tag indicating that the token is a personal name.
- [NLTagOrganizationName](nltag/organizationname.md): A tag indicating that the token is an organization name.
- [NLTagPlaceName](nltag/placename.md): A tag indicating that the token is a place name.

## See Also

### Enumerating linguistic tags

- [enumerateTagsInRange:unit:scheme:options:usingBlock:](nltagger/enumeratetagsinrange_unit_scheme_options_usingblock_.md): Enumerates a block over the tagger’s string, given a range, token unit, and tag scheme.
- [NLTaggerOptions](nltagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.
