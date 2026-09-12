> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizeradvancetonexttoken(_:)](https://developer.apple.com/documentation/corefoundation/cfstringtokenizeradvancetonexttoken(_:))

# CFStringTokenizerAdvanceToNextToken(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances the tokenizer to the next token and sets that as the current token.

## Declaration

```swift
func CFStringTokenizerAdvanceToNextToken(_ tokenizer: CFStringTokenizer!) -> CFStringTokenizerTokenType
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.

<a id="return-value"></a>

## Return Value

The type of the token if the tokenizer succeeded in finding a token and setting it as current token. Returns `kCFStringTokenizerTokenNone` if the tokenizer failed to find a token. For possible values, see [CFStringTokenizerTokenType](cfstringtokenizertokentype.md).

<a id="Discussion"></a>

## Discussion

If there is no preceding call to [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md) or [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md), the function finds the first token in the range specified by the [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md). If there is a preceding, successful, call to [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md) or [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md) and there is a current token, proceeds to the next token. If a token is found, it is set as the current token and the function returns `true`; otherwise the current token is invalidated and the function returns `false`.

You can obtain the range and attribute of the token calling [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md) and [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md). If the token is a compound (with type `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`), you can obtain its subtokens and (or) derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Changing the Location

- [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md): Finds a token that includes the character at a given index, and set it as the current token.

# CFStringTokenizerAdvanceToNextToken (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances the tokenizer to the next token and sets that as the current token.

## Declaration

```objectivec
extern CFStringTokenizerTokenType CFStringTokenizerAdvanceToNextToken(CFStringTokenizerRef tokenizer);
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.

<a id="return-value"></a>

## Return Value

The type of the token if the tokenizer succeeded in finding a token and setting it as current token. Returns `kCFStringTokenizerTokenNone` if the tokenizer failed to find a token. For possible values, see [CFStringTokenizerTokenType](cfstringtokenizertokentype.md).

<a id="Discussion"></a>

## Discussion

If there is no preceding call to [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md) or [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md), the function finds the first token in the range specified by the [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md). If there is a preceding, successful, call to [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md) or [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md) and there is a current token, proceeds to the next token. If a token is found, it is set as the current token and the function returns `true`; otherwise the current token is invalidated and the function returns `false`.

You can obtain the range and attribute of the token calling [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md) and [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md). If the token is a compound (with type `kCFStringTokenizerTokenHasSubTokensMask` or `kCFStringTokenizerTokenHasDerivedSubTokensMask`), you can obtain its subtokens and (or) derived subtokens by calling [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md).

## See Also

### Changing the Location

- [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md): Finds a token that includes the character at a given index, and set it as the current token.
