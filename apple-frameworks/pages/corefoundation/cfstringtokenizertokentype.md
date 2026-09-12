> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizertokentype](https://developer.apple.com/documentation/corefoundation/cfstringtokenizertokentype)

# CFStringTokenizerTokenType (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Token types returned by [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md).

## Declaration

```swift
struct CFStringTokenizerTokenType
```

<a id="overview"></a>

## Overview

See [http://www.unicode.org/reports/tr29/#Word_Boundaries](http://www.unicode.org/reports/tr29/#Word_Boundaries) for a detailed description of word boundaries.

## Topics

### Constants

- [normal](cfstringtokenizertokentype/normal.md): Has a normal token.
- [hasSubTokensMask](cfstringtokenizertokentype/hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [hasDerivedSubTokensMask](cfstringtokenizertokentype/hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [hasHasNumbersMask](cfstringtokenizertokentype/hashasnumbersmask.md): Appears to contain a number.
- [hasNonLettersMask](cfstringtokenizertokentype/hasnonlettersmask.md): Contains punctuation, symbols, and so on.
- [isCJWordMask](cfstringtokenizertokentype/iscjwordmask.md): Contains kana and/or ideographs.

### Initializers

- [init(rawValue:)](cfstringtokenizertokentype/init%28rawvalue_%29.md)

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

### Constants

- [Tokenization Modifiers](1588024-tokenization-modifiers.md): Tokenization options are used with [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized

# CFStringTokenizerTokenType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Token types returned by [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md).

## Declaration

```objectivec
enum CFStringTokenizerTokenType : CFOptionFlags;
```

<a id="overview"></a>

## Overview

See [http://www.unicode.org/reports/tr29/#Word_Boundaries](http://www.unicode.org/reports/tr29/#Word_Boundaries) for a detailed description of word boundaries.

## Topics

### Constants

- [kCFStringTokenizerTokenNone](cfstringtokenizertokentype/kcfstringtokenizertokennone.md): Has no token.
- [kCFStringTokenizerTokenNormal](cfstringtokenizertokentype/normal.md): Has a normal token.
- [kCFStringTokenizerTokenHasSubTokensMask](cfstringtokenizertokentype/hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [kCFStringTokenizerTokenHasDerivedSubTokensMask](cfstringtokenizertokentype/hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [kCFStringTokenizerTokenHasHasNumbersMask](cfstringtokenizertokentype/hashasnumbersmask.md): Appears to contain a number.
- [kCFStringTokenizerTokenHasNonLettersMask](cfstringtokenizertokentype/hasnonlettersmask.md): Contains punctuation, symbols, and so on.
- [kCFStringTokenizerTokenIsCJWordMask](cfstringtokenizertokentype/iscjwordmask.md): Contains kana and/or ideographs.

## See Also

### Constants

- [Tokenization Modifiers](1588024-tokenization-modifiers.md): Tokenization options are used with [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized
