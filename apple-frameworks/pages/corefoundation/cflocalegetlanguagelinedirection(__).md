> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalegetlanguagelinedirection(_:)](https://developer.apple.com/documentation/corefoundation/cflocalegetlanguagelinedirection(_:))

# CFLocaleGetLanguageLineDirection(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the line direction for the specified ISO language code.

## Declaration

```swift
func CFLocaleGetLanguageLineDirection(_ isoLangCode: CFString!) -> CFLocaleLanguageDirection
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

The line direction for the language. See [CFLocaleLanguageDirection](cflocalelanguagedirection.md) for possible values. If the appropriate direction can’t be determined, [CFLocaleLanguageDirection.unknown](cflocalelanguagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md): Returns the character direction for the specified ISO language code.

# CFLocaleGetLanguageLineDirection (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the line direction for the specified ISO language code.

## Declaration

```objectivec
extern CFLocaleLanguageDirection CFLocaleGetLanguageLineDirection(CFStringRef isoLangCode);
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

The line direction for the language. See [CFLocaleLanguageDirection](cflocalelanguagedirection.md) for possible values. If the appropriate direction can’t be determined, [kCFLocaleLanguageDirectionUnknown](cflocalelanguagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md): Returns the character direction for the specified ISO language code.
