> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonecopyabbreviation(_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonecopyabbreviation(_:_:))

# CFTimeZoneCopyAbbreviation(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the abbreviation of a time zone at a specified date.

## Declaration

```swift
func CFTimeZoneCopyAbbreviation(_ tz: CFTimeZone!, _ at: CFAbsoluteTime) -> CFString!
```

## Parameters

- `tz`: The time zone to use.
- `at`: The absolute time at which to obtain the abbreviation.

<a id="return-value"></a>

## Return Value

A string containing the time zone abbreviation of `at`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that the abbreviation may be different at different dates. For example, during daylight savings time the US/Eastern time zone has an abbreviation of “EDT.” At other times, its abbreviation is “EST.”

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

# CFTimeZoneCopyAbbreviation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the abbreviation of a time zone at a specified date.

## Declaration

```objectivec
extern CFStringRefCFTimeZoneCopyAbbreviation(CFTimeZoneRef tz, CFAbsoluteTime at);
```

## Parameters

- `tz`: The time zone to use.
- `at`: The absolute time at which to obtain the abbreviation.

<a id="return-value"></a>

## Return Value

A string containing the time zone abbreviation of `at`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that the abbreviation may be different at different dates. For example, during daylight savings time the US/Eastern time zone has an abbreviation of “EDT.” At other times, its abbreviation is “EST.”

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.
