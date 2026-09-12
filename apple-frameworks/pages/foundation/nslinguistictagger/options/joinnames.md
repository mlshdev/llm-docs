> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/options/joinnames](https://developer.apple.com/documentation/foundation/nslinguistictagger/options/joinnames)

# joinNames (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.  If this option is set, then multiple-word names will be joined together and returned as a single token.

## Declaration

```swift
static var joinNames: NSLinguisticTagger.Options { get }
```

## See Also

### Constants

- [omitWords](omitwords.md): Omit tokens of type [word](../../nslinguistictag/word.md) (items considered to be words).
- [omitPunctuation](omitpunctuation.md): Omit tokens of type [punctuation](../../nslinguistictag/punctuation.md) (all punctuation).
- [omitWhitespace](omitwhitespace.md): Omit tokens of type [whitespace](../../nslinguistictag/whitespace.md) (whitespace of all sorts).
- [omitOther](omitother.md): Omit tokens of type [other](../../nslinguistictag/other.md) (non-linguistic items, such as symbols).

# NSLinguisticTaggerJoinNames (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Typically, multiple-word names will be returned as multiple tokens, following the standard tokenization practice of the tagger.  If this option is set, then multiple-word names will be joined together and returned as a single token.

## Declaration

```objectivec
NSLinguisticTaggerJoinNames
```

## See Also

### Constants

- [NSLinguisticTaggerOmitWords](omitwords.md): Omit tokens of type [NSLinguisticTagWord](../../nslinguistictag/word.md) (items considered to be words).
- [NSLinguisticTaggerOmitPunctuation](omitpunctuation.md): Omit tokens of type [NSLinguisticTagPunctuation](../../nslinguistictag/punctuation.md) (all punctuation).
- [NSLinguisticTaggerOmitWhitespace](omitwhitespace.md): Omit tokens of type [NSLinguisticTagWhitespace](../../nslinguistictag/whitespace.md) (whitespace of all sorts).
- [NSLinguisticTaggerOmitOther](omitother.md): Omit tokens of type [NSLinguisticTagOther](../../nslinguistictag/other.md) (non-linguistic items, such as symbols).
