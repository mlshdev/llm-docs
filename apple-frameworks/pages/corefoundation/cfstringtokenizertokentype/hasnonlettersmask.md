> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizertokentype/hasnonlettersmask](https://developer.apple.com/documentation/corefoundation/cfstringtokenizertokentype/hasnonlettersmask)

# hasNonLettersMask (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains punctuation, symbols, and so on.

## Declaration

```swift
static var hasNonLettersMask: CFStringTokenizerTokenType { get }
```

<a id="Discussion"></a>

## Discussion

Given the way Unicode word break works, this means it is a standalone punctuation or symbol character, or a string of such.

## See Also

### Constants

- [normal](normal.md): Has a normal token.
- [hasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [hasDerivedSubTokensMask](hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [hasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [isCJWordMask](iscjwordmask.md): Contains kana and/or ideographs.

# kCFStringTokenizerTokenHasNonLettersMask (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains punctuation, symbols, and so on.

## Declaration

```objectivec
kCFStringTokenizerTokenHasNonLettersMask
```

<a id="Discussion"></a>

## Discussion

Given the way Unicode word break works, this means it is a standalone punctuation or symbol character, or a string of such.

## See Also

### Constants

- [kCFStringTokenizerTokenNone](kcfstringtokenizertokennone.md): Has no token.
- [kCFStringTokenizerTokenNormal](normal.md): Has a normal token.
- [kCFStringTokenizerTokenHasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [kCFStringTokenizerTokenHasDerivedSubTokensMask](hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [kCFStringTokenizerTokenHasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [kCFStringTokenizerTokenIsCJWordMask](iscjwordmask.md): Contains kana and/or ideographs.
