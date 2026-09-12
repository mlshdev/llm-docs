> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizercopycurrenttokenattribute(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringtokenizercopycurrenttokenattribute(_:_:))

# CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a given attribute of the current token.

## Declaration

```swift
func CFStringTokenizerCopyCurrentTokenAttribute(_ tokenizer: CFStringTokenizer!, _ attribute: CFOptionFlags) -> CFTypeRef!
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `attribute`: The token attribute to obtain. The value must be `kCFStringTokenizerAttributeLatinTranscription`, or `kCFStringTokenizerAttributeLanguage`.

<a id="return-value"></a>

## Return Value

The attribute specified by `attribute` of the current token, or `NULL` if the current token does not have the specified attribute or there is no current token. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.
- [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.

# CFStringTokenizerCopyCurrentTokenAttribute (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a given attribute of the current token.

## Declaration

```objectivec
extern CFTypeRefCFStringTokenizerCopyCurrentTokenAttribute(CFStringTokenizerRef tokenizer, CFOptionFlags attribute);
```

## Parameters

- `tokenizer`: A CFStringTokenizer object.
- `attribute`: The token attribute to obtain. The value must be `kCFStringTokenizerAttributeLatinTranscription`, or `kCFStringTokenizerAttributeLanguage`.

<a id="return-value"></a>

## Return Value

The attribute specified by `attribute` of the current token, or `NULL` if the current token does not have the specified attribute or there is no current token. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About the Current Token

- [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.
- [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.
