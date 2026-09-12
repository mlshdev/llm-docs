> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezoneresetsystem()](https://developer.apple.com/documentation/corefoundation/cftimezoneresetsystem())

# CFTimeZoneResetSystem() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Clears the previously determined system time zone, if any.

## Declaration

```swift
func CFTimeZoneResetSystem()
```

<a id="Discussion"></a>

## Discussion

If the default time zone is set to the same value as the system time zone or has not been explicitly set, this function clears it as well.

Subsequent calls to [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md) will attempt to re-determine the system time zone.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

# CFTimeZoneResetSystem (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Clears the previously determined system time zone, if any.

## Declaration

```objectivec
extern void CFTimeZoneResetSystem();
```

<a id="Discussion"></a>

## Discussion

If the default time zone is set to the same value as the system time zone or has not been explicitly set, this function clears it as well.

Subsequent calls to [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md) will attempt to re-determine the system time zone.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.
