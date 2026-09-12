> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter](https://developer.apple.com/documentation/foundation/dateintervalformatter)

# DateIntervalFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that creates string representations of time intervals.

## Declaration

```swift
class DateIntervalFormatter
```

<a id="overview"></a>

## Overview

A [DateIntervalFormatter](dateintervalformatter.md) object creates user-readable strings from pairs of dates. Use a date interval formatter to create user-readable strings of the form *\<start\>* `-` *\<end\>* for your app’s interface, where *\<start\>* and *\<end\>* are date values that you supply. The formatter uses locale and language information, along with custom formatting options, to define the content of the resulting string. You can specify different styles for the date and time information in each date value.

To use this class, create an instance, configure its properties, and call the [string(from:to:)](dateintervalformatter/string%28from_to_%29.md) method to generate a string. The properties of this class let you configure the calendar and specify the style to apply to date and time values. Given a current date of January 16, 2015, Configuring the Formatter Options shows how to configure a formatter object and generate the string “1/16/15 - 1/17/15”.

Configuring a formatter object

**Swift**

```swift
let formatter = DateIntervalFormatter()
formatter.dateStyle = .short
formatter.timeStyle = .none

// Create two dates that are exactly 1 day apart.
let startDate = Date()
let endDate = Date(timeInterval: 86400, since: startDate)

// Use the configured formatter to generate the string.
let outputString = formatter.string(from: startDate, to: endDate)
```

**Objective-C**

```objc
NSDateIntervalFormatter* formatter = [[NSDateIntervalFormatter alloc] init];
formatter.dateStyle = NSDateIntervalFormatterShortStyle;
formatter.timeStyle = NSDateIntervalFormatterNoStyle;
 
// Create two dates that are exactly 1 day apart.
NSDate* startDate = [NSDate date];
NSDate* endDate = [NSDate dateWithTimeInterval:86400 sinceDate:startDate];
 
// Use the configured formatter to generate the string.
NSString* outputString = [formatter stringFromDate:startDate toDate:endDate];
```

> **Note**

>  Always set to the [dateStyle](dateintervalformatter/datestyle.md) and [timeStyle](dateintervalformatter/timestyle.md) properties to appropriate values before generating any strings.

The [string(from:to:)](dateintervalformatter/string%28from_to_%29.md) method may be called safely from any thread of your app. It is also safe to share a single instance of this class from multiple threads, with the caveat that you should not change the configuration of the object while another thread is using it to generate a string.

> **Tip**

>  In Swift, you can use [Date.IntervalFormatStyle](date/intervalformatstyle.md) rather than [DateIntervalFormatter](dateintervalformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Formatting a String

- [string(from:to:)](dateintervalformatter/string%28from_to_%29.md): Returns a formatted string based on the specified start and end dates.

### Configuring the Formatter Options

- [dateStyle](dateintervalformatter/datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](dateintervalformatter/timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](dateintervalformatter/datetemplate.md): The template for formatting one date and time value.
- [calendar](dateintervalformatter/calendar.md): The calendar to use for date values.
- [locale](dateintervalformatter/locale.md): The locale to use when formatting date and time values.
- [timeZone](dateintervalformatter/timezone.md): The time zone with which to specify time values.

### Constants

- [DateIntervalFormatter.Style](dateintervalformatter/style.md): Formatting styles for individual date and time values.

### Instance Methods

- [string(from:)](dateintervalformatter/string%28from_%29.md): Returns a formatted string for the given date interval.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dates and times

- [DateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [DateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [RelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [ISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.

# NSDateIntervalFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that creates string representations of time intervals.

## Declaration

```objectivec
@interface NSDateIntervalFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

A [NSDateIntervalFormatter](dateintervalformatter.md) object creates user-readable strings from pairs of dates. Use a date interval formatter to create user-readable strings of the form *\<start\>* `-` *\<end\>* for your app’s interface, where *\<start\>* and *\<end\>* are date values that you supply. The formatter uses locale and language information, along with custom formatting options, to define the content of the resulting string. You can specify different styles for the date and time information in each date value.

To use this class, create an instance, configure its properties, and call the [stringFromDate:toDate:](dateintervalformatter/string%28from_to_%29.md) method to generate a string. The properties of this class let you configure the calendar and specify the style to apply to date and time values. Given a current date of January 16, 2015, Configuring the Formatter Options shows how to configure a formatter object and generate the string “1/16/15 - 1/17/15”.

Configuring a formatter object

**Swift**

```swift
let formatter = DateIntervalFormatter()
formatter.dateStyle = .short
formatter.timeStyle = .none

// Create two dates that are exactly 1 day apart.
let startDate = Date()
let endDate = Date(timeInterval: 86400, since: startDate)

// Use the configured formatter to generate the string.
let outputString = formatter.string(from: startDate, to: endDate)
```

**Objective-C**

```objc
NSDateIntervalFormatter* formatter = [[NSDateIntervalFormatter alloc] init];
formatter.dateStyle = NSDateIntervalFormatterShortStyle;
formatter.timeStyle = NSDateIntervalFormatterNoStyle;
 
// Create two dates that are exactly 1 day apart.
NSDate* startDate = [NSDate date];
NSDate* endDate = [NSDate dateWithTimeInterval:86400 sinceDate:startDate];
 
// Use the configured formatter to generate the string.
NSString* outputString = [formatter stringFromDate:startDate toDate:endDate];
```

> **Note**

>  Always set to the [dateStyle](dateintervalformatter/datestyle.md) and [timeStyle](dateintervalformatter/timestyle.md) properties to appropriate values before generating any strings.

The [stringFromDate:toDate:](dateintervalformatter/string%28from_to_%29.md) method may be called safely from any thread of your app. It is also safe to share a single instance of this class from multiple threads, with the caveat that you should not change the configuration of the object while another thread is using it to generate a string.

> **Tip**

>  In Swift, you can use [Date.IntervalFormatStyle](date/intervalformatstyle.md) rather than [NSDateIntervalFormatter](dateintervalformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Formatting a String

- [stringFromDate:toDate:](dateintervalformatter/string%28from_to_%29.md): Returns a formatted string based on the specified start and end dates.

### Configuring the Formatter Options

- [dateStyle](dateintervalformatter/datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](dateintervalformatter/timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](dateintervalformatter/datetemplate.md): The template for formatting one date and time value.
- [calendar](dateintervalformatter/calendar.md): The calendar to use for date values.
- [locale](dateintervalformatter/locale.md): The locale to use when formatting date and time values.
- [timeZone](dateintervalformatter/timezone.md): The time zone with which to specify time values.

### Constants

- [NSDateIntervalFormatterStyle](dateintervalformatter/style.md): Formatting styles for individual date and time values.

### Instance Methods

- [stringFromDateInterval:](dateintervalformatter/string%28from_%29.md): Returns a formatted string for the given date interval.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Dates and times

- [NSDateFormatter](dateformatter.md): A formatter that converts between dates and their textual representations.
- [NSDateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [NSRelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [NSISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.
