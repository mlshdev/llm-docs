> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizergototokenatindex(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringtokenizergototokenatindex(_:_:))

# CFStringTokenizerGoToTokenAtIndex(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds a token that includes the character at a given index, and set it as the current token.

## Declaration

```swift
func CFStringTokenizerGoToTokenAtIndex(_ tokenizer: CFStringTokenizer!, _ index: CFIndex) -> CFStringTokenizerTokenType
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `index`: The index of a character in the string for `tokenizer`.

<a id="return-value"></a>

## Return Value

The type of the token if the tokenizer succeeded in finding a token and setting it as the current token. Returns `kCFStringTokenizerTokenNone` if the tokenizer failed to find a token. For possible values, see [CFStringTokenizerTokenType](cfstringtokenizertokentype.md).

<a id="Discussion"></a>

## Discussion

You can obtain the range and attribute of the token calling [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md) and [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md). If the token is a compound (with type `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`), you can obtain its subtokens and (or) derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Changing the Location

- [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md): Advances the tokenizer to the next token and sets that as the current token.

# CFStringTokenizerGoToTokenAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds a token that includes the character at a given index, and set it as the current token.

## Declaration

```objectivec
extern CFStringTokenizerTokenType CFStringTokenizerGoToTokenAtIndex(CFStringTokenizerRef tokenizer, CFIndex index);
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `index`: The index of a character in the string for `tokenizer`.

<a id="return-value"></a>

## Return Value

The type of the token if the tokenizer succeeded in finding a token and setting it as the current token. Returns `kCFStringTokenizerTokenNone` if the tokenizer failed to find a token. For possible values, see [CFStringTokenizerTokenType](cfstringtokenizertokentype.md).

<a id="Discussion"></a>

## Discussion

You can obtain the range and attribute of the token calling [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md) and [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md). If the token is a compound (with type `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`), you can obtain its subtokens and (or) derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Changing the Location

- [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md): Advances the tokenizer to the next token and sets that as the current token.
