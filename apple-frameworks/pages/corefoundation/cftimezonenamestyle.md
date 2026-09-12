> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonenamestyle](https://developer.apple.com/documentation/corefoundation/cftimezonenamestyle)

# CFTimeZoneNameStyle (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Index type for constants used to specify styles of time zone names.

## Declaration

```swift
enum CFTimeZoneNameStyle
```

<a id="overview"></a>

## Overview

For values, see [Time Zone Name Styles](time_zone_name_styles.md)

## Topics

### Enumeration Cases

- [CFTimeZoneNameStyle.daylightSaving](cftimezonenamestyle/daylightsaving.md): Specifies the daylight saving name style; for example, “Central Daylight Time” for the Central time zone.
- [CFTimeZoneNameStyle.generic](cftimezonenamestyle/generic.md): Specifies the generic name style, which does not distinguish between daylight saving and standard time; for example, “Central Time” for the Central time zone.
- [CFTimeZoneNameStyle.shortDaylightSaving](cftimezonenamestyle/shortdaylightsaving.md): Specifies the short daylight saving name style; for example, “CDT” for the Central time zone.
- [CFTimeZoneNameStyle.shortGeneric](cftimezonenamestyle/shortgeneric.md): Specifies the short generic name style, which does not distinguish between daylight saving and standard time; for example, “CT” for the Central time zone.
- [CFTimeZoneNameStyle.shortStandard](cftimezonenamestyle/shortstandard.md): Specifies the short standard name style; for example, “CST” for the Central time zone.
- [CFTimeZoneNameStyle.standard](cftimezonenamestyle/standard.md): Specifies the standard name style; for example, “Central Standard Time” for the Central time zone.

### Initializers

- [init(rawValue:)](cftimezonenamestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CFTimeZoneNameStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Index type for constants used to specify styles of time zone names.

## Declaration

```objectivec
enum CFTimeZoneNameStyle : CFIndex;
```

<a id="overview"></a>

## Overview

For values, see [Time Zone Name Styles](time_zone_name_styles.md)

## Topics

### Enumeration Cases

- [kCFTimeZoneNameStyleDaylightSaving](cftimezonenamestyle/daylightsaving.md): Specifies the daylight saving name style; for example, “Central Daylight Time” for the Central time zone.
- [kCFTimeZoneNameStyleGeneric](cftimezonenamestyle/generic.md): Specifies the generic name style, which does not distinguish between daylight saving and standard time; for example, “Central Time” for the Central time zone.
- [kCFTimeZoneNameStyleShortDaylightSaving](cftimezonenamestyle/shortdaylightsaving.md): Specifies the short daylight saving name style; for example, “CDT” for the Central time zone.
- [kCFTimeZoneNameStyleShortGeneric](cftimezonenamestyle/shortgeneric.md): Specifies the short generic name style, which does not distinguish between daylight saving and standard time; for example, “CT” for the Central time zone.
- [kCFTimeZoneNameStyleShortStandard](cftimezonenamestyle/shortstandard.md): Specifies the short standard name style; for example, “CST” for the Central time zone.
- [kCFTimeZoneNameStyleStandard](cftimezonenamestyle/standard.md): Specifies the standard name style; for example, “Central Standard Time” for the Central time zone.
