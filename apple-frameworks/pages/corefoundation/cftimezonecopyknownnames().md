> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonecopyknownnames()](https://developer.apple.com/documentation/corefoundation/cftimezonecopyknownnames())

# CFTimeZoneCopyKnownNames() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of strings containing the names of all the time zones known to the system.

## Declaration

```swift
func CFTimeZoneCopyKnownNames() -> CFArray!
```

<a id="return-value"></a>

## Return Value

An array containing CFString objects representing all the known time zone names. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

# CFTimeZoneCopyKnownNames (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of strings containing the names of all the time zones known to the system.

## Declaration

```objectivec
extern CFArrayRefCFTimeZoneCopyKnownNames();
```

<a id="return-value"></a>

## Return Value

An array containing CFString objects representing all the known time zone names. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.
