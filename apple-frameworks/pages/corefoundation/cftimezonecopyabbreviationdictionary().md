> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonecopyabbreviationdictionary()](https://developer.apple.com/documentation/corefoundation/cftimezonecopyabbreviationdictionary())

# CFTimeZoneCopyAbbreviationDictionary() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

## Declaration

```swift
func CFTimeZoneCopyAbbreviationDictionary() -> CFDictionary!
```

<a id="return-value"></a>

## Return Value

A dictionary containing the mappings of time zone abbreviations to time zone names. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

More than one time zone may have the same abbreviation. For example, US/Pacific and Canada/Pacific both use the abbreviation “PST.” In these cases this function chooses a single name to map the abbreviation to.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

# CFTimeZoneCopyAbbreviationDictionary (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

## Declaration

```objectivec
extern CFDictionaryRefCFTimeZoneCopyAbbreviationDictionary();
```

<a id="return-value"></a>

## Return Value

A dictionary containing the mappings of time zone abbreviations to time zone names. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

More than one time zone may have the same abbreviation. For example, US/Pacific and Canada/Pacific both use the abbreviation “PST.” In these cases this function chooses a single name to map the abbreviation to.

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.
