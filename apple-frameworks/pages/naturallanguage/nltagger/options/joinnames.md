> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/options/joinnames](https://developer.apple.com/documentation/naturallanguage/nltagger/options/joinnames)

# joinNames (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.

## Declaration

```swift
static var joinNames: NLTagger.Options { get }
```

<a id="Discussion"></a>

## Discussion

If this option is set, then multiple-word names will be joined together and returned as a single token.

## See Also

### Constants

- [omitWords](omitwords.md): Omit tokens of type [word](../../nltag/word.md) (items considered to be words).
- [omitPunctuation](omitpunctuation.md): Omit tokens of type [punctuation](../../nltag/punctuation.md) (all punctuation).
- [omitWhitespace](omitwhitespace.md): Omit tokens of type [whitespace](../../nltag/whitespace.md) (whitespace of all sorts).
- [omitOther](omitother.md): Omit tokens of type [other](../../nltag/other.md) (non-linguistic items, such as symbols).
- [joinContractions](joincontractions.md): Contractions will be returned as one token.

# NLTaggerJoinNames (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.

## Declaration

```objectivec
NLTaggerJoinNames
```

<a id="Discussion"></a>

## Discussion

If this option is set, then multiple-word names will be joined together and returned as a single token.

## See Also

### Constants

- [NLTaggerOmitWords](omitwords.md): Omit tokens of type [NLTagWord](../../nltag/word.md) (items considered to be words).
- [NLTaggerOmitPunctuation](omitpunctuation.md): Omit tokens of type [NLTagPunctuation](../../nltag/punctuation.md) (all punctuation).
- [NLTaggerOmitWhitespace](omitwhitespace.md): Omit tokens of type [NLTagWhitespace](../../nltag/whitespace.md) (whitespace of all sorts).
- [NLTaggerOmitOther](omitother.md): Omit tokens of type [NLTagOther](../../nltag/other.md) (non-linguistic items, such as symbols).
- [NLTaggerJoinContractions](joincontractions.md): Contractions will be returned as one token.
