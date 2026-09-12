> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecopyisocurrencycodes()](https://developer.apple.com/documentation/corefoundation/cflocalecopyisocurrencycodes())

# CFLocaleCopyISOCurrencyCodes() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all known legal ISO currency codes.

## Declaration

```swift
func CFLocaleCopyISOCurrencyCodes() -> CFArray!
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all known legal ISO currency codes.Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note: many of these will not have any supporting locale data in macOS.

## See Also

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes()](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes()](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyCommonISOCurrencyCodes()](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.

# CFLocaleCopyISOCurrencyCodes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all known legal ISO currency codes.

## Declaration

```objectivec
extern CFArrayRefCFLocaleCopyISOCurrencyCodes();
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all known legal ISO currency codes.Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note: many of these will not have any supporting locale data in macOS.

## See Also

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyCommonISOCurrencyCodes](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.
