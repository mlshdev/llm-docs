> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonesetdefault(_:)](https://developer.apple.com/documentation/corefoundation/cftimezonesetdefault(_:))

# CFTimeZoneSetDefault(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the default time zone for your application the given time zone.

## Declaration

```swift
func CFTimeZoneSetDefault(_ tz: CFTimeZone!)
```

## Parameters

- `tz`: The time zone to use as default.

<a id="Discussion"></a>

## Discussion

There can be only one default time zone, so by setting a new default time zone, you lose the previous one.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

# CFTimeZoneSetDefault (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the default time zone for your application the given time zone.

## Declaration

```objectivec
extern void CFTimeZoneSetDefault(CFTimeZoneRef tz);
```

## Parameters

- `tz`: The time zone to use as default.

<a id="Discussion"></a>

## Discussion

There can be only one default time zone, so by setting a new default time zone, you lose the previous one.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.
