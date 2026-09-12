> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/hourcycle-swift.enum](https://developer.apple.com/documentation/foundation/locale/hourcycle-swift.enum)

# Locale.HourCycle

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents the hour cycle used in a locale, like one-to-twelve or zero-to-twenty-three.

## Declaration

```swift
enum HourCycle
```

## Topics

### Using defined hour cycles

- [Locale.HourCycle.zeroToEleven](hourcycle-swift.enum/zerotoeleven.md): A twelve hour cycle, counted from 0 to 11.
- [Locale.HourCycle.oneToTwelve](hourcycle-swift.enum/onetotwelve.md): A twelve hour cycle, counted from 1 to 12.
- [Locale.HourCycle.zeroToTwentyThree](hourcycle-swift.enum/zerototwentythree.md): A twenty-four hour cycle, counted from 0 to 23.
- [Locale.HourCycle.oneToTwentyFour](hourcycle-swift.enum/onetotwentyfour.md): A twenty-four hour cycle, counted from 1 to 24.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting date and time components

- [firstDayOfWeek](firstdayofweek.md): The first day of the week as represented by this locale.
- [Locale.Weekday](weekday.md): A type that represents weekdays, used for indicating a locale’s first day of the week.
- [hourCycle](hourcycle-swift.property.md): The hour cycle used by the locale, like one-to-twelve or zero-to-twenty-three.
- [timeZone](timezone.md): The time zone associated with the locale, if any.
