> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizergetcurrentsubtokens(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringtokenizergetcurrentsubtokens(_:_:_:_:))

# CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the subtokens or derived subtokens contained in the compound token.

## Declaration

```swift
func CFStringTokenizerGetCurrentSubTokens(_ tokenizer: CFStringTokenizer!, _ ranges: UnsafeMutablePointer<CFRange>!, _ maxRangeLength: CFIndex, _ derivedSubTokens: CFMutableArray!) -> CFIndex
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `ranges`: Upon return, an array of CFRanges containing the ranges of subtokens. The ranges are relative to the string specified to CFStringTokenizerCreate. This parameter can be `NULL`.
- `maxRangeLength`: The maximum number of ranges to return.
- `derivedSubTokens`: A CFMutableArray to which the derived subtokens are to be added. This parameter can be `NULL`.

<a id="return-value"></a>

## Return Value

The number of ranges returned.

<a id="Discussion"></a>

## Discussion

If token type is `kCFStringTokenizerTokenNone`, the `ranges` array and `derivedSubTokens` array are untouched and the return value is `0`.

If token type is `kCFStringTokenizerTokenNormal`, the `ranges` array has one item filled in with the entire range of the token (if `maxRangeLength` \>= 1) and a string taken from the entire token range is added to the `derivedSubTokens` array and the return value is `1`.

If token type is `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`, the ranges array is filled in with as many items as there are subtokens (up to a limit of `maxRangeLength`).

The `derivedSubTokens` array will have sub tokens added even when the sub token is a substring of the token. If token type is `kCFStringTokenizerTokenHasSubTokensMask`, the ordinary non-derived subtokens are added to the `derivedSubTokens` array.

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.

# CFStringTokenizerGetCurrentSubTokens (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the subtokens or derived subtokens contained in the compound token.

## Declaration

```objectivec
extern CFIndex CFStringTokenizerGetCurrentSubTokens(CFStringTokenizerRef tokenizer, CFRange *ranges, CFIndex maxRangeLength, CFMutableArrayRef derivedSubTokens);
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `ranges`: Upon return, an array of CFRanges containing the ranges of subtokens. The ranges are relative to the string specified to CFStringTokenizerCreate. This parameter can be `NULL`.
- `maxRangeLength`: The maximum number of ranges to return.
- `derivedSubTokens`: A CFMutableArray to which the derived subtokens are to be added. This parameter can be `NULL`.

<a id="return-value"></a>

## Return Value

The number of ranges returned.

<a id="Discussion"></a>

## Discussion

If token type is `kCFStringTokenizerTokenNone`, the `ranges` array and `derivedSubTokens` array are untouched and the return value is `0`.

If token type is `kCFStringTokenizerTokenNormal`, the `ranges` array has one item filled in with the entire range of the token (if `maxRangeLength` \>= 1) and a string taken from the entire token range is added to the `derivedSubTokens` array and the return value is `1`.

If token type is `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`, the ranges array is filled in with as many items as there are subtokens (up to a limit of `maxRangeLength`).

The `derivedSubTokens` array will have sub tokens added even when the sub token is a substring of the token. If token type is `kCFStringTokenizerTokenHasSubTokensMask`, the ordinary non-derived subtokens are added to the `derivedSubTokens` array.

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.
