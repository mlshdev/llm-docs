> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/options](https://developer.apple.com/documentation/naturallanguage/nltagger/options)

# NLTagger.Options (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [omitWords](options/omitwords.md): Omit tokens of type [word](../nltag/word.md) (items considered to be words).
- [omitPunctuation](options/omitpunctuation.md): Omit tokens of type [punctuation](../nltag/punctuation.md) (all punctuation).
- [omitWhitespace](options/omitwhitespace.md): Omit tokens of type [whitespace](../nltag/whitespace.md) (whitespace of all sorts).
- [omitOther](options/omitother.md): Omit tokens of type [other](../nltag/other.md) (non-linguistic items, such as symbols).
- [joinNames](options/joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.
- [joinContractions](options/joincontractions.md): Contractions will be returned as one token.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md): Creates the option with a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerating linguistic tags

- [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md): Enumerates a block over the tagger’s string, given a range, token unit, and tag scheme.
- [NLTag](../nltag.md): A token type, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

# NLTaggerOptions (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

## Declaration

```objectivec
enum NLTaggerOptions : NSUInteger;
```

## Topics

### Constants

- [NLTaggerOmitWords](options/omitwords.md): Omit tokens of type [NLTagWord](../nltag/word.md) (items considered to be words).
- [NLTaggerOmitPunctuation](options/omitpunctuation.md): Omit tokens of type [NLTagPunctuation](../nltag/punctuation.md) (all punctuation).
- [NLTaggerOmitWhitespace](options/omitwhitespace.md): Omit tokens of type [NLTagWhitespace](../nltag/whitespace.md) (whitespace of all sorts).
- [NLTaggerOmitOther](options/omitother.md): Omit tokens of type [NLTagOther](../nltag/other.md) (non-linguistic items, such as symbols).
- [NLTaggerJoinNames](options/joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.
- [NLTaggerJoinContractions](options/joincontractions.md): Contractions will be returned as one token.

## See Also

### Enumerating linguistic tags

- [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetagsinrange_unit_scheme_options_usingblock_.md): Enumerates a block over the tagger’s string, given a range, token unit, and tag scheme.
- [NLTag](../nltag.md): A token type, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.
