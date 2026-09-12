> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/parsestrategy](https://developer.apple.com/documentation/foundation/date/parsestrategy)

# Date.ParseStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options for parsing string representations of dates to create a `Date` instance.

## Declaration

```swift
struct ParseStrategy
```

## Topics

### Initializers

- [init(format:locale:timeZone:calendar:isLenient:twoDigitStartDate:)](parsestrategy/init%28format_locale_timezone_calendar_islenient_twodigitstartdate_%29.md): Creates a new `ParseStrategy` with the given configurations.

### Instance Properties

- [calendar](parsestrategy/calendar.md): The calendar to use when parsing date strings and creating the date.
- [format](parsestrategy/format.md): The string representation of the fixed format conforming to Unicode Technical Standard #35.
- [isLenient](parsestrategy/islenient.md): Indicates whether to use heuristics when parsing the representation.
- [locale](parsestrategy/locale.md): The locale to use when parsing date strings with the specified format. Use system locale if unspecified.
- [timeZone](parsestrategy/timezone.md): The time zone to use for creating the date.
- [twoDigitStartDate](parsestrategy/twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](parsestrategy/customconsumingregexcomponent-implementations.md)
- [ParseStrategy Implementations](parsestrategy/parsestrategy-implementations.md)
- [RegexComponent Implementations](parsestrategy/regexcomponent-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseStrategy](../parsestrategy.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parsing Dates

- [parse(\_:)](formatstyle/parse%28__%29.md): Parses a string into a date.
- [parseStrategy](formatstyle/parsestrategy.md): The strategy used to parse a string into a date.
