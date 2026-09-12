> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone](https://developer.apple.com/documentation/foundation/timezone)

# TimeZone

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Information about standard time conventions associated with a specific geopolitical region.

## Declaration

```swift
struct TimeZone
```

<a id="overview"></a>

## Overview

`TimeZone` defines the behavior of a time zone. Time zone values represent geopolitical regions. Consequently, these values have names for these regions. Time zone values also represent a temporal offset, either plus or minus, from Greenwich Mean Time (GMT) and an abbreviation (such as PST for Pacific Standard Time).

`TimeZone` provides two static functions to get time zone values: `current` and `autoupdatingCurrent`. The `autoupdatingCurrent` time zone automatically tracks updates made by the user.

Note that time zone database entries such as “America/Los_Angeles” are IDs, not names. An example of a time zone name is “Pacific Daylight Time”. Although many `TimeZone` functions include the word “name”, they refer to IDs.

Cocoa does not provide any API to change the time zone of the computer, or of other applications.

## Topics

### Getting the Current Time Zone

- [autoupdatingCurrent](timezone/autoupdatingcurrent.md): The time zone currently used by the system, automatically updating to the user’s current preference.
- [current](timezone/current.md): The time zone currently used by the system.

### Creating a Time Zone

- [init(secondsFromGMT:)](timezone/init%28secondsfromgmt_%29.md): Returns a time zone initialized with a specific number of seconds from GMT.
- [knownTimeZoneIdentifiers](timezone/knowntimezoneidentifiers.md): Returns an array of strings listing the identifier of all the time zones known to the system.
- [abbreviationDictionary](timezone/abbreviationdictionary.md): Returns the mapping of abbreviations to time zone identifiers.

### Getting Time Zone Information

- [identifier](timezone/identifier.md): The geopolitical region identifier that identifies the time zone.
- [abbreviation(for:)](timezone/abbreviation%28for_%29.md): Returns the abbreviation for the time zone at a given date.
- [secondsFromGMT(for:)](timezone/secondsfromgmt%28for_%29.md): The current difference in seconds between the time zone and Greenwich Mean Time.
- [timeZoneDataVersion](timezone/timezonedataversion.md): Returns the time zone data version.

### Working with Daylight Savings

- [isDaylightSavingTime(for:)](timezone/isdaylightsavingtime%28for_%29.md): Returns a Boolean value that indicates whether the receiver uses daylight saving time at a given date.
- [daylightSavingTimeOffset(for:)](timezone/daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](timezone/nextdaylightsavingtimetransition.md): The date of the next (after the current instant) daylight saving time transition for the time zone.
- [nextDaylightSavingTimeTransition(after:)](timezone/nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

### Describing Time Zones

- [localizedName(for:locale:)](timezone/localizedname%28for_locale_%29.md): Returns the name of the receiver localized for a given locale.

### Working with notification messages

- [TimeZone.SystemTimeZoneDidChangeMessage](timezone/systemtimezonedidchangemessage.md): A message the system sends when the system time zone changes.

### Using Reference Types

- [NSTimeZone](nstimezone.md): Information about standard time conventions associated with a specific geopolitical region.

### Initializers

- [init(abbreviation:)](timezone/init%28abbreviation_%29.md): Returns a time zone identified by a given abbreviation.
- [init(identifier:)](timezone/init%28identifier_%29.md): Returns a time zone initialized with a given identifier.

### Type Aliases

- [TimeZone.NameStyle](timezone/namestyle.md)

### Type Properties

- [gmt](timezone/gmt.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calendrical Calculations

- [DateComponents](datecomponents.md): A date or time specified in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.
- [Calendar](calendar.md): A definition of the relationships between calendar units and absolute points in time, providing features for calculation and comparison of dates.
