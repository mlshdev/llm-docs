> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/options/omitwhitespace](https://developer.apple.com/documentation/foundation/nslinguistictagger/options/omitwhitespace)

# omitWhitespace (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Omit tokens of type [whitespace](../../nslinguistictag/whitespace.md) (whitespace of all sorts).

## Declaration

```swift
static var omitWhitespace: NSLinguisticTagger.Options { get }
```

## See Also

### Constants

- [omitWords](omitwords.md): Omit tokens of type [word](../../nslinguistictag/word.md) (items considered to be words).
- [omitPunctuation](omitpunctuation.md): Omit tokens of type [punctuation](../../nslinguistictag/punctuation.md) (all punctuation).
- [omitOther](omitother.md): Omit tokens of type [other](../../nslinguistictag/other.md) (non-linguistic items, such as symbols).
- [joinNames](joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger. If this option is set, then multiple-word names will be joined together and returned as a single token.

# NSLinguisticTaggerOmitWhitespace (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Omit tokens of type [NSLinguisticTagWhitespace](../../nslinguistictag/whitespace.md) (whitespace of all sorts).

## Declaration

```objectivec
NSLinguisticTaggerOmitWhitespace
```

## See Also

### Constants

- [NSLinguisticTaggerOmitWords](omitwords.md): Omit tokens of type [NSLinguisticTagWord](../../nslinguistictag/word.md) (items considered to be words).
- [NSLinguisticTaggerOmitPunctuation](omitpunctuation.md): Omit tokens of type [NSLinguisticTagPunctuation](../../nslinguistictag/punctuation.md) (all punctuation).
- [NSLinguisticTaggerOmitOther](omitother.md): Omit tokens of type [NSLinguisticTagOther](../../nslinguistictag/other.md) (non-linguistic items, such as symbols).
- [NSLinguisticTaggerJoinNames](joinnames.md): Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger. If this option is set, then multiple-word names will be joined together and returned as a single token.
