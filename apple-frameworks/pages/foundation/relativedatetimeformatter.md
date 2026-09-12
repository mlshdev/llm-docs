> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter](https://developer.apple.com/documentation/foundation/relativedatetimeformatter)

# RelativeDateTimeFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A formatter that creates locale-aware string representations of a relative date or time.

## Declaration

```swift
class RelativeDateTimeFormatter
```

<a id="overview"></a>

## Overview

Use the strings that the formatter produces, such as “1 hour ago”, “in 2 weeks”, “yesterday”, and “tomorrow” as standalone strings. Embedding them in other strings may not be grammatically correct.

## Topics

### Converting Dates to Formatted Strings

- [localizedString(for:relativeTo:)](relativedatetimeformatter/localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedString(from:)](relativedatetimeformatter/localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedString(fromTimeInterval:)](relativedatetimeformatter/localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [string(for:)](relativedatetimeformatter/string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.

### Configuring Formatter Options

- [calendar](relativedatetimeformatter/calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](relativedatetimeformatter/locale.md): The locale to use when formatting the date.
- [dateTimeStyle](relativedatetimeformatter/datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [RelativeDateTimeFormatter.DateTimeStyle](relativedatetimeformatter/datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](relativedatetimeformatter/unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [RelativeDateTimeFormatter.UnitsStyle](relativedatetimeformatter/unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](relativedatetimeformatter/formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

## Relationships

### Inherits From

- [Formatter](formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Dates and times

- [DateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [DateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [DateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.
- [ISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.

# NSRelativeDateTimeFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A formatter that creates locale-aware string representations of a relative date or time.

## Declaration

```objectivec
@interface NSRelativeDateTimeFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

Use the strings that the formatter produces, such as “1 hour ago”, “in 2 weeks”, “yesterday”, and “tomorrow” as standalone strings. Embedding them in other strings may not be grammatically correct.

## Topics

### Converting Dates to Formatted Strings

- [localizedStringForDate:relativeToDate:](relativedatetimeformatter/localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedStringFromDateComponents:](relativedatetimeformatter/localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedStringFromTimeInterval:](relativedatetimeformatter/localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [stringForObjectValue:](relativedatetimeformatter/string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.

### Configuring Formatter Options

- [calendar](relativedatetimeformatter/calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](relativedatetimeformatter/locale.md): The locale to use when formatting the date.
- [dateTimeStyle](relativedatetimeformatter/datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [NSRelativeDateTimeFormatterStyle](relativedatetimeformatter/datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](relativedatetimeformatter/unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [NSRelativeDateTimeFormatterUnitsStyle](relativedatetimeformatter/unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](relativedatetimeformatter/formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Dates and times

- [NSDateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [NSDateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [NSDateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.
- [NSISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.
