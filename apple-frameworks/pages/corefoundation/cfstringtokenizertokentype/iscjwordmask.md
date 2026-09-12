> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizertokentype/iscjwordmask](https://developer.apple.com/documentation/corefoundation/cfstringtokenizertokentype/iscjwordmask)

# isCJWordMask (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains kana and/or ideographs.

## Declaration

```swift
static var isCJWordMask: CFStringTokenizerTokenType { get }
```

## See Also

### Constants

- [normal](normal.md): Has a normal token.
- [hasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [hasDerivedSubTokensMask](hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [hasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [hasNonLettersMask](hasnonlettersmask.md): Contains punctuation, symbols, and so on.

# kCFStringTokenizerTokenIsCJWordMask (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains kana and/or ideographs.

## Declaration

```objectivec
kCFStringTokenizerTokenIsCJWordMask
```

## See Also

### Constants

- [kCFStringTokenizerTokenNone](kcfstringtokenizertokennone.md): Has no token.
- [kCFStringTokenizerTokenNormal](normal.md): Has a normal token.
- [kCFStringTokenizerTokenHasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [kCFStringTokenizerTokenHasDerivedSubTokensMask](hasderivedsubtokensmask.md): Compound token which may contain derived subtokens.
- [kCFStringTokenizerTokenHasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [kCFStringTokenizerTokenHasNonLettersMask](hasnonlettersmask.md): Contains punctuation, symbols, and so on.
