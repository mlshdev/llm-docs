> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecopyisocountrycodes()](https://developer.apple.com/documentation/corefoundation/cflocalecopyisocountrycodes())

# CFLocaleCopyISOCountryCodes() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all known legal ISO country codes.

## Declaration

```swift
func CFLocaleCopyISOCountryCodes() -> CFArray!
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all known legal ISO country codes. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note: many of these will not have any supporting locale data in macOS.

## See Also

### Getting ISO Information

- [CFLocaleCopyISOLanguageCodes()](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes()](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.
- [CFLocaleCopyCommonISOCurrencyCodes()](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.

# CFLocaleCopyISOCountryCodes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all known legal ISO country codes.

## Declaration

```objectivec
extern CFArrayRefCFLocaleCopyISOCountryCodes();
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all known legal ISO country codes. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note: many of these will not have any supporting locale data in macOS.

## See Also

### Getting ISO Information

- [CFLocaleCopyISOLanguageCodes](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.
- [CFLocaleCopyCommonISOCurrencyCodes](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.
