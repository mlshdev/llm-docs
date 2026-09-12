> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizertokentype/hasderivedsubtokensmask](https://developer.apple.com/documentation/corefoundation/cfstringtokenizertokentype/hasderivedsubtokensmask)

# hasDerivedSubTokensMask (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compound token which may contain derived subtokens.

## Declaration

```swift
static var hasDerivedSubTokensMask: CFStringTokenizerTokenType { get }
```

<a id="Discussion"></a>

## Discussion

You can obtain subtokens and derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](../cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Constants

- [normal](normal.md): Has a normal token.
- [hasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [hasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [hasNonLettersMask](hasnonlettersmask.md): Contains punctuation, symbols, and so on.
- [isCJWordMask](iscjwordmask.md): Contains kana and/or ideographs.

# kCFStringTokenizerTokenHasDerivedSubTokensMask (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compound token which may contain derived subtokens.

## Declaration

```objectivec
kCFStringTokenizerTokenHasDerivedSubTokensMask
```

<a id="Discussion"></a>

## Discussion

You can obtain subtokens and derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens](../cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Constants

- [kCFStringTokenizerTokenNone](kcfstringtokenizertokennone.md): Has no token.
- [kCFStringTokenizerTokenNormal](normal.md): Has a normal token.
- [kCFStringTokenizerTokenHasSubTokensMask](hassubtokensmask.md): Compound token which may contain subtokens but with no derived subtokens.
- [kCFStringTokenizerTokenHasHasNumbersMask](hashasnumbersmask.md): Appears to contain a number.
- [kCFStringTokenizerTokenHasNonLettersMask](hasnonlettersmask.md): Contains punctuation, symbols, and so on.
- [kCFStringTokenizerTokenIsCJWordMask](iscjwordmask.md): Contains kana and/or ideographs.
