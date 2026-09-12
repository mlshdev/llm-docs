> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonesetabbreviationdictionary(_:)](https://developer.apple.com/documentation/corefoundation/cftimezonesetabbreviationdictionary(_:))

# CFTimeZoneSetAbbreviationDictionary(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the abbreviation dictionary to a given dictionary.

## Declaration

```swift
func CFTimeZoneSetAbbreviationDictionary(_ dict: CFDictionary!)
```

## Parameters

- `dict`: A dictionary containing key-value pairs for looking up time zone names given their abbreviations. The keys should be CFString objects containing the abbreviations; the values should be CFString objects containing their corresponding geopolitical region names.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.

# CFTimeZoneSetAbbreviationDictionary (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the abbreviation dictionary to a given dictionary.

## Declaration

```objectivec
extern void CFTimeZoneSetAbbreviationDictionary(CFDictionaryRef dict);
```

## Parameters

- `dict`: A dictionary containing key-value pairs for looking up time zone names given their abbreviations. The keys should be CFString objects containing the abbreviations; the values should be CFString objects containing their corresponding geopolitical region names.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
