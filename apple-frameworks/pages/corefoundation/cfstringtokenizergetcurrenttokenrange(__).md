> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizergetcurrenttokenrange(_:)](https://developer.apple.com/documentation/corefoundation/cfstringtokenizergetcurrenttokenrange(_:))

# CFStringTokenizerGetCurrentTokenRange(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of the current token.

## Declaration

```swift
func CFStringTokenizerGetCurrentTokenRange(_ tokenizer: CFStringTokenizer!) -> CFRange
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.

<a id="return-value"></a>

## Return Value

The range of the current token, or ```{``kCFNotFound```, `0}` if there is no current token.

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.

# CFStringTokenizerGetCurrentTokenRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of the current token.

## Declaration

```objectivec
extern CFRange CFStringTokenizerGetCurrentTokenRange(CFStringTokenizerRef tokenizer);
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.

<a id="return-value"></a>

## Return Value

The range of the current token, or ```{``kCFNotFound```, `0}` if there is no current token.

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.
