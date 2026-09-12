> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecopycommonisocurrencycodes()](https://developer.apple.com/documentation/corefoundation/cflocalecopycommonisocurrencycodes())

# CFLocaleCopyCommonISOCurrencyCodes() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings that represents ISO currency codes for currencies in common use.

## Declaration

```swift
func CFLocaleCopyCommonISOCurrencyCodes() -> CFArray!
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents ISO currency codes for currencies in common use. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes()](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes()](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes()](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.

# CFLocaleCopyCommonISOCurrencyCodes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings that represents ISO currency codes for currencies in common use.

## Declaration

```objectivec
extern CFArrayRefCFLocaleCopyCommonISOCurrencyCodes();
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents ISO currency codes for currencies in common use. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.
