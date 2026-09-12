> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle)

# Date.ISO8601FormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that converts between dates and their ISO-8601 string representations.

## Declaration

```swift
struct ISO8601FormatStyle
```

<a id="overview"></a>

## Overview

The [Date.ISO8601FormatStyle](iso8601formatstyle.md) type generates and parses string representations of dates following the [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard, like `2024-04-01T12:34:56.789Z`. Use this type to create ISO-8601 representations of dates and create dates from text strings in ISO 8601 format. For other formatting conventions, like human-readable, localized date formats, use [Date.FormatStyle](formatstyle.md).

Instance modifier methods applied to an ISO-8601 format style customize the formatted output, as the following example illustrates.

```swift
let now = Date()
print(now.formatted(Date.ISO8601FormatStyle().dateSeparator(.dash)))
// 2021-06-21T211015Z
```

Use the static factory property `FormatStyle/iso8601` to create an instance of [Date.ISO8601FormatStyle](iso8601formatstyle.md). Then apply instance modifier methods to customize the format, as in the example below.

```swift
let meetNow = Date()
let formatted = meetNow.formatted(.iso8601
    .year()
    .month()
    .day()
    .timeZone(separator: .omitted)
    .time(includingFractionalSeconds: true)
    .timeSeparator(.colon)
) // "2022-06-10T12:34:56.789Z"

```

## Topics

### Creating an ISO 8601 Format Style

- [init(dateSeparator:dateTimeSeparator:timeZone:)](iso8601formatstyle/init%28dateseparator_datetimeseparator_timezone_%29.md): Creates an instance using the provided date separator, date and time components separator, and time zone.

### Modifying an ISO 8601 Format Style

- [dateSeparator](iso8601formatstyle/dateseparator-swift.property.md): The character used to separate the components of a date.
- [dateTimeSeparator](iso8601formatstyle/datetimeseparator-swift.property.md): The character used to separate the date and time components of an ISO 8601 string representation of a date.
- [timeZone](iso8601formatstyle/timezone.md): The time zone used to create and parse date representations.
- [dateTimeSeparator(\_:)](iso8601formatstyle/datetimeseparator%28__%29.md): Sets the character that specifies the date and time components.

### Modifying Dates in an ISO 8601 Format Style

- [dateSeparator(\_:)](iso8601formatstyle/dateseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified date separator.
- [year()](iso8601formatstyle/year%28%29.md): Modifies the ISO 8601 date format style to include the year in the formatted output.
- [month()](iso8601formatstyle/month%28%29.md): Modifies the ISO 8601 date format style to include the month in the formatted output.
- [weekOfYear()](iso8601formatstyle/weekofyear%28%29.md): Modifies the ISO 8601 date format style to include the week of the year in the formatted output.
- [day()](iso8601formatstyle/day%28%29.md): Modifies the ISO 8601 date format style to include the day in the formatted output.

### Modifying Times in an ISO 8601 Format Style

- [time(includingFractionalSeconds:)](iso8601formatstyle/time%28includingfractionalseconds_%29.md): Modifies the ISO 8601 date format style to include the time in the formatted output.
- [timeSeparator(\_:)](iso8601formatstyle/timeseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time separator.
- [timeZone(separator:)](iso8601formatstyle/timezone%28separator_%29.md): Modifies the ISO 8601 date format style to include the time zone in the formatted output.
- [timeZoneSeparator(\_:)](iso8601formatstyle/timezoneseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time zone separator.

### Parsing an ISO 8601 Format Style

- [parse(\_:)](iso8601formatstyle/parse%28__%29.md): Parses a string into a date.
- [parseStrategy](iso8601formatstyle/parsestrategy.md): The strategy used to parse a string into a date.

### Applying an ISO 8601 Format Style

- [format(\_:)](iso8601formatstyle/format%28__%29.md): Creates a locale-aware ISO 8601 string representation from a date value.

### Comparing ISO 8601 Format Styles

- [==(\_:\_:)](==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Supporting Types

- [Date.ISO8601FormatStyle.DateSeparator](iso8601formatstyle/dateseparator-swift.enum.md): A type describing the character separating year, month, and day components of a date in an ISO 8601 date format.
- [Date.ISO8601FormatStyle.DateTimeSeparator](iso8601formatstyle/datetimeseparator-swift.enum.md): Type describing the character separating the date and time components of a date in an ISO 8601 date format.
- [Date.ISO8601FormatStyle.TimeSeparator](iso8601formatstyle/timeseparator-swift.enum.md): Type describing the character separating the time components of a date in an ISO 8601 date format.
- [Date.ISO8601FormatStyle.TimeZoneSeparator](iso8601formatstyle/timezoneseparator-swift.enum.md): A type describing the character separating the time and time zone of a date in an ISO 8601 date format.

### Initializers

- [init(dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:includingFractionalSeconds:timeZone:)](iso8601formatstyle/init%28dateseparator_datetimeseparator_timeseparator_timezoneseparator_includingfractionalseconds_timezone_%29.md)

### Instance Properties

- [includingFractionalSeconds](iso8601formatstyle/includingfractionalseconds.md): If set, the style includes fractional seconds when formatting. Before Swift 6.2, if true when parsing, fractional seconds must be present. If false when parsing, fractional seconds must not be present. After Swift 6.2, fractional seconds may be present in the String regardless of the setting of this property.
- [timeSeparator](iso8601formatstyle/timeseparator-swift.property.md)
- [timeZoneSeparator](iso8601formatstyle/timezoneseparator-swift.property.md)

### Default Implementations

- [CustomConsumingRegexComponent Implementations](iso8601formatstyle/customconsumingregexcomponent-implementations.md)
- [FormatStyle Implementations](iso8601formatstyle/formatstyle-implementations.md)
- [ParseStrategy Implementations](iso8601formatstyle/parsestrategy-implementations.md)
- [ParseableFormatStyle Implementations](iso8601formatstyle/parseableformatstyle-implementations.md)
- [RegexComponent Implementations](iso8601formatstyle/regexcomponent-implementations.md)

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

## See Also

### Applying date and time styles

- [dateTime](../formatstyle/datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [verbatim(\_:locale:timeZone:calendar:)](../formatstyle/verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](../formatstyle/interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [Date.IntervalFormatStyle](intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](../formatstyle/relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](../formatstyle/components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
