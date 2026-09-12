> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/options](https://developer.apple.com/documentation/foundation/nslinguistictagger/options)

# NSLinguisticTagger.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [omitWords](options/omitwords.md): Omit tokens of type [word](../nslinguistictag/word.md) (items considered to be words).
- [omitPunctuation](options/omitpunctuation.md): Omit tokens of type [punctuation](../nslinguistictag/punctuation.md) (all punctuation).
- [omitWhitespace](options/omitwhitespace.md): Omit tokens of type [whitespace](../nslinguistictag/whitespace.md) (whitespace of all sorts).
- [omitOther](options/omitother.md): Omit tokens of type [other](../nslinguistictag/other.md) (non-linguistic items, such as symbols).
- [joinNames](options/joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger. If this option is set, then multiple-word names will be joined together and returned as a single token.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

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

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTags(in:scheme:options:using:)](enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTags(for:range:unit:scheme:options:orthography:using:)](enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.

# NSLinguisticTaggerOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

## Declaration

```objectivec
enum NSLinguisticTaggerOptions : NSUInteger;
```

## Topics

### Constants

- [NSLinguisticTaggerOmitWords](options/omitwords.md): Omit tokens of type [NSLinguisticTagWord](../nslinguistictag/word.md) (items considered to be words).
- [NSLinguisticTaggerOmitPunctuation](options/omitpunctuation.md): Omit tokens of type [NSLinguisticTagPunctuation](../nslinguistictag/punctuation.md) (all punctuation).
- [NSLinguisticTaggerOmitWhitespace](options/omitwhitespace.md): Omit tokens of type [NSLinguisticTagWhitespace](../nslinguistictag/whitespace.md) (whitespace of all sorts).
- [NSLinguisticTaggerOmitOther](options/omitother.md): Omit tokens of type [NSLinguisticTagOther](../nslinguistictag/other.md) (non-linguistic items, such as symbols).
- [NSLinguisticTaggerJoinNames](options/joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger. If this option is set, then multiple-word names will be joined together and returned as a single token.

## See Also

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTagsInRange:scheme:options:usingBlock:](enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTagsForString:range:unit:scheme:options:orthography:usingBlock:](enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
