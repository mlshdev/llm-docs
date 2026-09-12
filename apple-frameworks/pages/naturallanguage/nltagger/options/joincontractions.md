> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/options/joincontractions](https://developer.apple.com/documentation/naturallanguage/nltagger/options/joincontractions)

# joinContractions (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Contractions will be returned as one token.

## Declaration

```swift
static var joinContractions: NLTagger.Options { get }
```

## See Also

### Constants

- [omitWords](omitwords.md): Omit tokens of type [word](../../nltag/word.md) (items considered to be words).
- [omitPunctuation](omitpunctuation.md): Omit tokens of type [punctuation](../../nltag/punctuation.md) (all punctuation).
- [omitWhitespace](omitwhitespace.md): Omit tokens of type [whitespace](../../nltag/whitespace.md) (whitespace of all sorts).
- [omitOther](omitother.md): Omit tokens of type [other](../../nltag/other.md) (non-linguistic items, such as symbols).
- [joinNames](joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.

# NLTaggerJoinContractions (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Contractions will be returned as one token.

## Declaration

```objectivec
NLTaggerJoinContractions
```

## See Also

### Constants

- [NLTaggerOmitWords](omitwords.md): Omit tokens of type [NLTagWord](../../nltag/word.md) (items considered to be words).
- [NLTaggerOmitPunctuation](omitpunctuation.md): Omit tokens of type [NLTagPunctuation](../../nltag/punctuation.md) (all punctuation).
- [NLTaggerOmitWhitespace](omitwhitespace.md): Omit tokens of type [NLTagWhitespace](../../nltag/whitespace.md) (whitespace of all sorts).
- [NLTaggerOmitOther](omitother.md): Omit tokens of type [NLTagOther](../../nltag/other.md) (non-linguistic items, such as symbols).
- [NLTaggerJoinNames](joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.
