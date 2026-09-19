> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cflocalegetlanguagecharacterdirection(_:)

# CFLocaleGetLanguageCharacterDirection(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character direction for the specified ISO language code.

## Declaration

```swift
func CFLocaleGetLanguageCharacterDirection(_ isoLangCode: CFString!) -> CFLocaleLanguageDirection
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

The character direction for the language. See [CFLocaleLanguageDirection](cflocalelanguagedirection.md) for possible values. If the appropriate direction can’t be determined, [CFLocaleLanguageDirection.unknown](cflocalelanguagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md): Returns the line direction for the specified ISO language code.

# CFLocaleGetLanguageCharacterDirection (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character direction for the specified ISO language code.

## Declaration

```objectivec
extern CFLocaleLanguageDirection CFLocaleGetLanguageCharacterDirection(CFStringRef isoLangCode);
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

The character direction for the language. See [CFLocaleLanguageDirection](cflocalelanguagedirection.md) for possible values. If the appropriate direction can’t be determined, [kCFLocaleLanguageDirectionUnknown](cflocalelanguagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md): Returns the line direction for the specified ISO language code.
