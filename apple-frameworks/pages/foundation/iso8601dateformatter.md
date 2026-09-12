> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter](https://developer.apple.com/documentation/foundation/iso8601dateformatter)

# ISO8601DateFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A formatter that converts between dates and their ISO 8601 string representations.

## Declaration

```swift
class ISO8601DateFormatter
```

<a id="overview"></a>

## Overview

The [ISO8601DateFormatter](iso8601dateformatter.md) class generates and parses string representations of dates following the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601) standard. Use this class to create ISO 8601 representations of dates and create dates from text strings in ISO 8601 format.

> **Tip**

>  In Swift, you can use [Date.ISO8601FormatStyle](date/iso8601formatstyle.md) rather than [ISO8601DateFormatter](iso8601dateformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Configuring the Formatter

- [formatOptions](iso8601dateformatter/formatoptions.md): Options for generating and parsing ISO 8601 date representations. See [ISO8601DateFormatter.Options](iso8601dateformatter/options.md) for possible values.
- [timeZone](iso8601dateformatter/timezone.md): The time zone used to create and parse date representations. When unspecified, GMT is used.

### Creating ISO 8601 Date Formatters

- [init()](iso8601dateformatter/init%28%29.md): Initializes an ISO 8601 date formatter with default format, time zone, and options.

### Converting ISO 8601 Dates

- [string(from:)](iso8601dateformatter/string%28from_%29.md): Creates and returns an ISO 8601 formatted string representation of the specified date.
- [date(from:)](iso8601dateformatter/date%28from_%29.md): Creates and returns a date object from the specified ISO 8601 formatted string representation.
- [string(from:timeZone:formatOptions:)](iso8601dateformatter/string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.

### Constants

- [ISO8601DateFormatter.Options](iso8601dateformatter/options.md): Options used to generate and parse ISO 8601 date representations.

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
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Dates and times

- [DateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [DateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [RelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [DateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.

# NSISO8601DateFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A formatter that converts between dates and their ISO 8601 string representations.

## Declaration

```objectivec
@interface NSISO8601DateFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

The [NSISO8601DateFormatter](iso8601dateformatter.md) class generates and parses string representations of dates following the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601) standard. Use this class to create ISO 8601 representations of dates and create dates from text strings in ISO 8601 format.

> **Tip**

>  In Swift, you can use [Date.ISO8601FormatStyle](date/iso8601formatstyle.md) rather than [NSISO8601DateFormatter](iso8601dateformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Configuring the Formatter

- [formatOptions](iso8601dateformatter/formatoptions.md): Options for generating and parsing ISO 8601 date representations. See [NSISO8601DateFormatOptions](iso8601dateformatter/options.md) for possible values.
- [timeZone](iso8601dateformatter/timezone.md): The time zone used to create and parse date representations. When unspecified, GMT is used.

### Creating ISO 8601 Date Formatters

- [init](iso8601dateformatter/init%28%29.md): Initializes an ISO 8601 date formatter with default format, time zone, and options.

### Converting ISO 8601 Dates

- [stringFromDate:](iso8601dateformatter/string%28from_%29.md): Creates and returns an ISO 8601 formatted string representation of the specified date.
- [dateFromString:](iso8601dateformatter/date%28from_%29.md): Creates and returns a date object from the specified ISO 8601 formatted string representation.
- [stringFromDate:timeZone:formatOptions:](iso8601dateformatter/string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.

### Constants

- [NSISO8601DateFormatOptions](iso8601dateformatter/options.md): Options used to generate and parse ISO 8601 date representations.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Dates and times

- [NSDateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [NSDateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [NSRelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [NSDateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.
