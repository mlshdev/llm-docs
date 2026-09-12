> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/namestyle](https://developer.apple.com/documentation/foundation/nstimezone/namestyle)

# NSTimeZone.NameStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants you use to specify a style when presenting time zone names.

## Declaration

```swift
enum NameStyle
```

## Topics

### Constants

- [NSTimeZone.NameStyle.standard](namestyle/standard.md): Specifies a standard name style. For example, “Central Standard Time” for Central Time.
- [NSTimeZone.NameStyle.shortStandard](namestyle/shortstandard.md): Specifies a short name style. For example, “CST” for Central Time.
- [NSTimeZone.NameStyle.daylightSaving](namestyle/daylightsaving.md): Specifies a daylight saving name style. For example, “Central Daylight Time” for Central Time.
- [NSTimeZone.NameStyle.shortDaylightSaving](namestyle/shortdaylightsaving.md): Specifies a short daylight saving name style. For example, “CDT” for Central Time.
- [NSTimeZone.NameStyle.generic](namestyle/generic.md): Specifies a generic name style. For example, “Central Time” for Central Time.
- [NSTimeZone.NameStyle.shortGeneric](namestyle/shortgeneric.md): Specifies a generic time zone name. For example, “CT” for Central Time.

### Initializers

- [init(rawValue:)](namestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviation(for:)](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMT(for:)](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.

# NSTimeZoneNameStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants you use to specify a style when presenting time zone names.

## Declaration

```objectivec
enum NSTimeZoneNameStyle : NSInteger;
```

## Topics

### Constants

- [NSTimeZoneNameStyleStandard](namestyle/standard.md): Specifies a standard name style. For example, “Central Standard Time” for Central Time.
- [NSTimeZoneNameStyleShortStandard](namestyle/shortstandard.md): Specifies a short name style. For example, “CST” for Central Time.
- [NSTimeZoneNameStyleDaylightSaving](namestyle/daylightsaving.md): Specifies a daylight saving name style. For example, “Central Daylight Time” for Central Time.
- [NSTimeZoneNameStyleShortDaylightSaving](namestyle/shortdaylightsaving.md): Specifies a short daylight saving name style. For example, “CDT” for Central Time.
- [NSTimeZoneNameStyleGeneric](namestyle/generic.md): Specifies a generic name style. For example, “Central Time” for Central Time.
- [NSTimeZoneNameStyleShortGeneric](namestyle/shortgeneric.md): Specifies a generic time zone name. For example, “CT” for Central Time.

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviationForDate:](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMTForDate:](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
