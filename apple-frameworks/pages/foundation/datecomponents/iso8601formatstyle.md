> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/iso8601formatstyle](https://developer.apple.com/documentation/foundation/datecomponents/iso8601formatstyle)

# DateComponents.ISO8601FormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Options for generating and parsing string representations of dates following the ISO 8601 standard.

## Declaration

```swift
struct ISO8601FormatStyle
```

## Topics

### Initializers

- [init(dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:includingFractionalSeconds:timeZone:)](iso8601formatstyle/init%28dateseparator_datetimeseparator_timeseparator_timezoneseparator_includingfractionalseconds_timezone_%29.md)

### Instance Properties

- [dateSeparator](iso8601formatstyle/dateseparator.md)
- [dateTimeSeparator](iso8601formatstyle/datetimeseparator.md)
- [includingFractionalSeconds](iso8601formatstyle/includingfractionalseconds.md): If set, fractional seconds will be present in formatted output. Fractional seconds may be present in parsing regardless of the setting of this property.
- [timeSeparator](iso8601formatstyle/timeseparator.md)
- [timeZone](iso8601formatstyle/timezone.md): The time zone to use to create and parse date representations.
- [timeZoneSeparator](iso8601formatstyle/timezoneseparator.md)

### Instance Methods

- [dateSeparator(\_:)](iso8601formatstyle/dateseparator%28__%29.md)
- [dateTimeSeparator(\_:)](iso8601formatstyle/datetimeseparator%28__%29.md)
- [day()](iso8601formatstyle/day%28%29.md)
- [month()](iso8601formatstyle/month%28%29.md)
- [time(includingFractionalSeconds:)](iso8601formatstyle/time%28includingfractionalseconds_%29.md)
- [timeSeparator(\_:)](iso8601formatstyle/timeseparator%28__%29.md)
- [timeZone(separator:)](iso8601formatstyle/timezone%28separator_%29.md)
- [timeZoneSeparator(\_:)](iso8601formatstyle/timezoneseparator%28__%29.md)
- [weekOfYear()](iso8601formatstyle/weekofyear%28%29.md)
- [year()](iso8601formatstyle/year%28%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseStrategy](../parsestrategy.md)
- [ParseableFormatStyle](../parseableformatstyle.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
