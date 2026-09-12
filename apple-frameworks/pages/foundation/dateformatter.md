> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter](https://developer.apple.com/documentation/foundation/dateformatter)

# DateFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts between dates and their textual representations.

## Declaration

```swift
class DateFormatter
```

<a id="overview"></a>

## Overview

Instances of [DateFormatter](dateformatter.md) create string representations of [NSDate](nsdate.md) objects, and convert textual representations of dates and times into [NSDate](nsdate.md) objects. For user-visible representations of dates and times, [DateFormatter](dateformatter.md) provides a variety of localized presets and configuration options. For fixed format representations of dates and times, you can specify a custom format string.

When working with date representations in ISO 8601 format, use [ISO8601DateFormatter](iso8601dateformatter.md) instead.

To represent an interval between two [NSDate](nsdate.md) objects, use [DateIntervalFormatter](dateintervalformatter.md) instead.

To represent a quantity of time specified by an [NSDateComponents](nsdatecomponents.md) object, use [DateComponentsFormatter](datecomponentsformatter.md) instead.

> **Tip**

>  In Swift, you can use [Date.FormatStyle](date/formatstyle.md) or [Date.VerbatimFormatStyle](date/verbatimformatstyle.md) rather than [DateFormatter](dateformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

<a id="Working-With-User-Visible-Representations-of-Dates-and-Times"></a>

### Working With User-Visible Representations of Dates and Times

When displaying a date to a user, you set the [dateStyle](dateformatter/datestyle.md) and [timeStyle](dateformatter/timestyle.md) properties of the date formatter according to your particular needs. For example, if you want to show the month, day, and year without showing the time, you would set the [dateStyle](dateformatter/datestyle.md) property to [DateFormatter.Style.long](dateformatter/style/long.md) and the [timeStyle](dateformatter/timestyle.md) property to [DateFormatter.Style.none](dateformatter/style/none.md). Conversely, if you want to show only the time, you would set the `dateStyle` property to [DateFormatter.Style.none](dateformatter/style/none.md) and the [timeStyle](dateformatter/timestyle.md) property to [DateFormatter.Style.short](dateformatter/style/short.md). Based on the values of the [dateStyle](dateformatter/datestyle.md) and [timeStyle](dateformatter/timestyle.md) properties, [DateFormatter](dateformatter.md) provides a representation of a specified date that is appropriate for a given locale.

**Swift**

```swift
let dateFormatter = DateFormatter()
dateFormatter.dateStyle = .medium
dateFormatter.timeStyle = .none
 
let date = Date(timeIntervalSinceReferenceDate: 118800)
 
// US English Locale (en_US)
dateFormatter.locale = Locale(identifier: "en_US")
print(dateFormatter.string(from: date)) // Jan 2, 2001
 
// French Locale (fr_FR)
dateFormatter.locale = Locale(identifier: "fr_FR")
print(dateFormatter.string(from: date)) // 2 janv. 2001
 
// Japanese Locale (ja_JP)
dateFormatter.locale = Locale(identifier: "ja_JP")
print(dateFormatter.string(from: date)) // 2001/01/02
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
dateFormatter.dateStyle = NSDateFormatterMediumStyle;
dateFormatter.timeStyle = NSDateFormatterNoStyle;
 
NSDate *date = [NSDate dateWithTimeIntervalSinceReferenceDate:118800];
 
// US English Locale (en_US)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // Jan 2, 2001
 
// French Locale (fr_FR)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"fr_FR"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 2 janv. 2001
 
// Japanese Locale (ja_JP)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"ja_JP"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 2001/01/02
```

If you need to define a format that cannot be achieved using the predefined styles, you can use the [setLocalizedDateFormatFromTemplate(\_:)](dateformatter/setlocalizeddateformatfromtemplate%28__%29.md) to specify a localized date format from a template.

**Swift**

```swift
let dateFormatter = DateFormatter()
let date = Date(timeIntervalSinceReferenceDate: 410220000)
 
// US English Locale (en_US)
dateFormatter.locale = Locale(identifier: "en_US")
dateFormatter.setLocalizedDateFormatFromTemplate("MMMMd") // set template after setting locale
print(dateFormatter.string(from: date)) // December 31
 
// British English Locale (en_GB)
dateFormatter.locale = Locale(identifier: "en_GB")
dateFormatter.setLocalizedDateFormatFromTemplate("MMMMd") // // set template after setting locale
print(dateFormatter.string(from: date)) // 31 December
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
NSDate *date = [NSDate dateWithTimeIntervalSinceReferenceDate:410220000];
 
// US English Locale (en_US)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
[dateFormatter setLocalizedDateFormatFromTemplate:@"MMMMd"]; // set template after setting locale
NSLog(@"%@", [dateFormatter stringFromDate:date]); // December 31
 
// British English Locale (en_GB)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_GB"];
[dateFormatter setLocalizedDateFormatFromTemplate:@"MMMMd"]; // set template after setting locale
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 31 December
```

<a id="Working-With-Fixed-Format-Date-Representations"></a>

### Working With Fixed Format Date Representations

> **Important**

>  In macOS 10.12 and later or iOS 10 and later, use the [ISO8601DateFormatter](iso8601dateformatter.md) class when working with ISO 8601 date representations.

When working with fixed format dates, such as RFC 3339, you set the [dateFormat](dateformatter/dateformat.md) property to specify a format string. For most fixed formats, you should also set the [locale](dateformatter/locale.md) property to a POSIX locale (`"en_US_POSIX"`), and set the [timeZone](dateformatter/timezone.md) property to UTC.

**Swift**

```swift
let RFC3339DateFormatter = DateFormatter()
RFC3339DateFormatter.locale = Locale(identifier: "en_US_POSIX")
RFC3339DateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZZZZZ"
RFC3339DateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
 
/* 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific Standard Time) */
let string = "1996-12-19T16:39:57-08:00"
let date = RFC3339DateFormatter.date(from: string)
```

**Objective-C**

```objc
RFC3339DateFormatter = [[NSDateFormatter alloc] init];
RFC3339DateFormatter.locale = [NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"];
RFC3339DateFormatter.dateFormat = @"yyyy-MM-dd'T'HH:mm:ssZZZZZ";
RFC3339DateFormatter.timeZone = [NSTimeZone timeZoneForSecondsFromGMT:0];
 
/* 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific Standard Time) */
NSString *string = @"1996-12-19T16:39:57-08:00";
NSDate *date = [RFC3339DateFormatter dateFromString:string];
```

For more information, see [Technical Q&A QA1480 “NSDateFormatter and Internet Dates”](https://developer.apple.com/library/mac/qa/qa1480/).

<a id="Thread-Safety"></a>

### Thread Safety

On iOS 7 and later `NSDateFormatter` is thread safe.

In macOS 10.9 and later `NSDateFormatter` is thread safe so long as you are using the modern behavior in a 64-bit app.

On earlier versions of the operating system, or when using the legacy formatter behavior or running in 32-bit in macOS, `NSDateFormatter` is not thread safe, and you therefore must not mutate a date formatter simultaneously from multiple threads.

## Topics

### Converting Objects

- [date(from:)](dateformatter/date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [string(from:)](dateformatter/string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedString(from:dateStyle:timeStyle:)](dateformatter/localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue(\_:for:range:)](dateformatter/getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

### Managing Formats and Styles

- [dateStyle](dateformatter/datestyle.md): The date style of the receiver.
- [timeStyle](dateformatter/timestyle.md): The time style of the receiver.
- [dateFormat](dateformatter/dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate(\_:)](dateformatter/setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormat(fromTemplate:options:locale:)](dateformatter/dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](dateformatter/formattingcontext.md): The capitalization formatting context used when formatting a date.

### Managing Attributes

- [calendar](dateformatter/calendar.md): The calendar for the receiver.
- [defaultDate](dateformatter/defaultdate.md): The default date for the receiver.
- [locale](dateformatter/locale.md): The locale for the receiver.
- [timeZone](dateformatter/timezone.md): The time zone for the receiver.
- [twoDigitStartDate](dateformatter/twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.
- [gregorianStartDate](dateformatter/gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.

### Managing Behavior Version

- [formatterBehavior](dateformatter/formatterbehavior.md): The formatter behavior for the receiver.
- [defaultFormatterBehavior](dateformatter/defaultformatterbehavior.md): Returns the default formatting behavior for instances of the class.

### Managing Natural Language Support

- [isLenient](dateformatter/islenient.md): A Boolean value that indicates whether the receiver uses heuristics when parsing a string.
- [doesRelativeDateFormatting](dateformatter/doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

### Managing AM and PM Symbols

- [amSymbol](dateformatter/amsymbol.md): The AM symbol for the receiver.
- [pmSymbol](dateformatter/pmsymbol.md): The PM symbol for the receiver.

### Managing Weekday Symbols

- [weekdaySymbols](dateformatter/weekdaysymbols.md): The array of weekday symbols for the receiver.
- [shortWeekdaySymbols](dateformatter/shortweekdaysymbols.md): The array of short weekday symbols for the receiver.
- [veryShortWeekdaySymbols](dateformatter/veryshortweekdaysymbols.md): The array of very short weekday symbols for the receiver.
- [standaloneWeekdaySymbols](dateformatter/standaloneweekdaysymbols.md): The array of standalone weekday symbols for the receiver.
- [shortStandaloneWeekdaySymbols](dateformatter/shortstandaloneweekdaysymbols.md): The array of short standalone weekday symbols for the receiver.
- [veryShortStandaloneWeekdaySymbols](dateformatter/veryshortstandaloneweekdaysymbols.md): The array of very short standalone weekday symbols for the receiver.

### Managing Month Symbols

- [monthSymbols](dateformatter/monthsymbols.md): The month symbols for the receiver.
- [shortMonthSymbols](dateformatter/shortmonthsymbols.md): The array of short month symbols for the receiver.
- [veryShortMonthSymbols](dateformatter/veryshortmonthsymbols.md): The very short month symbols for the receiver.
- [standaloneMonthSymbols](dateformatter/standalonemonthsymbols.md): The standalone month symbols for the receiver.
- [shortStandaloneMonthSymbols](dateformatter/shortstandalonemonthsymbols.md): The short standalone month symbols for the receiver.
- [veryShortStandaloneMonthSymbols](dateformatter/veryshortstandalonemonthsymbols.md): The very short month symbols for the receiver.

### Managing Quarter Symbols

- [quarterSymbols](dateformatter/quartersymbols.md): The quarter symbols for the receiver.
- [shortQuarterSymbols](dateformatter/shortquartersymbols.md): The short quarter symbols for the receiver.
- [standaloneQuarterSymbols](dateformatter/standalonequartersymbols.md): The standalone quarter symbols for the receiver.
- [shortStandaloneQuarterSymbols](dateformatter/shortstandalonequartersymbols.md): The short standalone quarter symbols for the receiver.

### Managing Era Symbols

- [eraSymbols](dateformatter/erasymbols.md): The era symbols for the receiver.
- [longEraSymbols](dateformatter/longerasymbols.md): The long era symbols for the receiver

### Deprecated

- [generatesCalendarDates](dateformatter/generatescalendardates.md): Indicates whether the formatter generates the deprecated calendar date type.

### Constants

- [DateFormatter.Style](dateformatter/style.md): The following constants specify predefined format styles for dates and times.
- [DateFormatter.Behavior](dateformatter/behavior.md): Constants that specify the behavior `NSDateFormatter` should exhibit.

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

- [DateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [RelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [DateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.
- [ISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.

# NSDateFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts between dates and their textual representations.

## Declaration

```objectivec
@interface NSDateFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

Instances of [NSDateFormatter](dateformatter.md) create string representations of [NSDate](nsdate.md) objects, and convert textual representations of dates and times into [NSDate](nsdate.md) objects. For user-visible representations of dates and times, [NSDateFormatter](dateformatter.md) provides a variety of localized presets and configuration options. For fixed format representations of dates and times, you can specify a custom format string.

When working with date representations in ISO 8601 format, use [NSISO8601DateFormatter](iso8601dateformatter.md) instead.

To represent an interval between two [NSDate](nsdate.md) objects, use [NSDateIntervalFormatter](dateintervalformatter.md) instead.

To represent a quantity of time specified by an [NSDateComponents](nsdatecomponents.md) object, use [NSDateComponentsFormatter](datecomponentsformatter.md) instead.

> **Tip**

>  In Swift, you can use [Date.FormatStyle](date/formatstyle.md) or [Date.VerbatimFormatStyle](date/verbatimformatstyle.md) rather than [NSDateFormatter](dateformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

<a id="Working-With-User-Visible-Representations-of-Dates-and-Times"></a>

### Working With User-Visible Representations of Dates and Times

When displaying a date to a user, you set the [dateStyle](dateformatter/datestyle.md) and [timeStyle](dateformatter/timestyle.md) properties of the date formatter according to your particular needs. For example, if you want to show the month, day, and year without showing the time, you would set the [dateStyle](dateformatter/datestyle.md) property to [NSDateFormatterLongStyle](dateformatter/style/long.md) and the [timeStyle](dateformatter/timestyle.md) property to [NSDateFormatterNoStyle](dateformatter/style/none.md). Conversely, if you want to show only the time, you would set the `dateStyle` property to [NSDateFormatterNoStyle](dateformatter/style/none.md) and the [timeStyle](dateformatter/timestyle.md) property to [NSDateFormatterShortStyle](dateformatter/style/short.md). Based on the values of the [dateStyle](dateformatter/datestyle.md) and [timeStyle](dateformatter/timestyle.md) properties, [NSDateFormatter](dateformatter.md) provides a representation of a specified date that is appropriate for a given locale.

**Swift**

```swift
let dateFormatter = DateFormatter()
dateFormatter.dateStyle = .medium
dateFormatter.timeStyle = .none
 
let date = Date(timeIntervalSinceReferenceDate: 118800)
 
// US English Locale (en_US)
dateFormatter.locale = Locale(identifier: "en_US")
print(dateFormatter.string(from: date)) // Jan 2, 2001
 
// French Locale (fr_FR)
dateFormatter.locale = Locale(identifier: "fr_FR")
print(dateFormatter.string(from: date)) // 2 janv. 2001
 
// Japanese Locale (ja_JP)
dateFormatter.locale = Locale(identifier: "ja_JP")
print(dateFormatter.string(from: date)) // 2001/01/02
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
dateFormatter.dateStyle = NSDateFormatterMediumStyle;
dateFormatter.timeStyle = NSDateFormatterNoStyle;
 
NSDate *date = [NSDate dateWithTimeIntervalSinceReferenceDate:118800];
 
// US English Locale (en_US)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // Jan 2, 2001
 
// French Locale (fr_FR)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"fr_FR"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 2 janv. 2001
 
// Japanese Locale (ja_JP)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"ja_JP"];
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 2001/01/02
```

If you need to define a format that cannot be achieved using the predefined styles, you can use the [setLocalizedDateFormatFromTemplate:](dateformatter/setlocalizeddateformatfromtemplate%28__%29.md) to specify a localized date format from a template.

**Swift**

```swift
let dateFormatter = DateFormatter()
let date = Date(timeIntervalSinceReferenceDate: 410220000)
 
// US English Locale (en_US)
dateFormatter.locale = Locale(identifier: "en_US")
dateFormatter.setLocalizedDateFormatFromTemplate("MMMMd") // set template after setting locale
print(dateFormatter.string(from: date)) // December 31
 
// British English Locale (en_GB)
dateFormatter.locale = Locale(identifier: "en_GB")
dateFormatter.setLocalizedDateFormatFromTemplate("MMMMd") // // set template after setting locale
print(dateFormatter.string(from: date)) // 31 December
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
NSDate *date = [NSDate dateWithTimeIntervalSinceReferenceDate:410220000];
 
// US English Locale (en_US)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
[dateFormatter setLocalizedDateFormatFromTemplate:@"MMMMd"]; // set template after setting locale
NSLog(@"%@", [dateFormatter stringFromDate:date]); // December 31
 
// British English Locale (en_GB)
dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_GB"];
[dateFormatter setLocalizedDateFormatFromTemplate:@"MMMMd"]; // set template after setting locale
NSLog(@"%@", [dateFormatter stringFromDate:date]); // 31 December
```

<a id="Working-With-Fixed-Format-Date-Representations"></a>

### Working With Fixed Format Date Representations

> **Important**

>  In macOS 10.12 and later or iOS 10 and later, use the [NSISO8601DateFormatter](iso8601dateformatter.md) class when working with ISO 8601 date representations.

When working with fixed format dates, such as RFC 3339, you set the [dateFormat](dateformatter/dateformat.md) property to specify a format string. For most fixed formats, you should also set the [locale](dateformatter/locale.md) property to a POSIX locale (`"en_US_POSIX"`), and set the [timeZone](dateformatter/timezone.md) property to UTC.

**Swift**

```swift
let RFC3339DateFormatter = DateFormatter()
RFC3339DateFormatter.locale = Locale(identifier: "en_US_POSIX")
RFC3339DateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZZZZZ"
RFC3339DateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
 
/* 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific Standard Time) */
let string = "1996-12-19T16:39:57-08:00"
let date = RFC3339DateFormatter.date(from: string)
```

**Objective-C**

```objc
RFC3339DateFormatter = [[NSDateFormatter alloc] init];
RFC3339DateFormatter.locale = [NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"];
RFC3339DateFormatter.dateFormat = @"yyyy-MM-dd'T'HH:mm:ssZZZZZ";
RFC3339DateFormatter.timeZone = [NSTimeZone timeZoneForSecondsFromGMT:0];
 
/* 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific Standard Time) */
NSString *string = @"1996-12-19T16:39:57-08:00";
NSDate *date = [RFC3339DateFormatter dateFromString:string];
```

For more information, see [Technical Q&A QA1480 “NSDateFormatter and Internet Dates”](https://developer.apple.com/library/mac/qa/qa1480/).

<a id="Thread-Safety"></a>

### Thread Safety

On iOS 7 and later `NSDateFormatter` is thread safe.

In macOS 10.9 and later `NSDateFormatter` is thread safe so long as you are using the modern behavior in a 64-bit app.

On earlier versions of the operating system, or when using the legacy formatter behavior or running in 32-bit in macOS, `NSDateFormatter` is not thread safe, and you therefore must not mutate a date formatter simultaneously from multiple threads.

## Topics

### Converting Objects

- [dateFromString:](dateformatter/date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [stringFromDate:](dateformatter/string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedStringFromDate:dateStyle:timeStyle:](dateformatter/localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue:forString:range:error:](dateformatter/getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

### Managing Formats and Styles

- [dateStyle](dateformatter/datestyle.md): The date style of the receiver.
- [timeStyle](dateformatter/timestyle.md): The time style of the receiver.
- [dateFormat](dateformatter/dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate:](dateformatter/setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormatFromTemplate:options:locale:](dateformatter/dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](dateformatter/formattingcontext.md): The capitalization formatting context used when formatting a date.

### Managing Attributes

- [calendar](dateformatter/calendar.md): The calendar for the receiver.
- [defaultDate](dateformatter/defaultdate.md): The default date for the receiver.
- [locale](dateformatter/locale.md): The locale for the receiver.
- [timeZone](dateformatter/timezone.md): The time zone for the receiver.
- [twoDigitStartDate](dateformatter/twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.
- [gregorianStartDate](dateformatter/gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.

### Managing Behavior Version

- [formatterBehavior](dateformatter/formatterbehavior.md): The formatter behavior for the receiver.
- [defaultFormatterBehavior](dateformatter/defaultformatterbehavior.md): Returns the default formatting behavior for instances of the class.

### Managing Natural Language Support

- [allowsNaturalLanguage](nsdateformatter/allowsnaturallanguage.md): Deprecated. Returns a Boolean value that indicates whether the receiver attempts to process dates entered as a vernacular string.
- [lenient](dateformatter/islenient.md): A Boolean value that indicates whether the receiver uses heuristics when parsing a string.
- [doesRelativeDateFormatting](dateformatter/doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

### Managing AM and PM Symbols

- [AMSymbol](dateformatter/amsymbol.md): The AM symbol for the receiver.
- [PMSymbol](dateformatter/pmsymbol.md): The PM symbol for the receiver.

### Managing Weekday Symbols

- [weekdaySymbols](dateformatter/weekdaysymbols.md): The array of weekday symbols for the receiver.
- [shortWeekdaySymbols](dateformatter/shortweekdaysymbols.md): The array of short weekday symbols for the receiver.
- [veryShortWeekdaySymbols](dateformatter/veryshortweekdaysymbols.md): The array of very short weekday symbols for the receiver.
- [standaloneWeekdaySymbols](dateformatter/standaloneweekdaysymbols.md): The array of standalone weekday symbols for the receiver.
- [shortStandaloneWeekdaySymbols](dateformatter/shortstandaloneweekdaysymbols.md): The array of short standalone weekday symbols for the receiver.
- [veryShortStandaloneWeekdaySymbols](dateformatter/veryshortstandaloneweekdaysymbols.md): The array of very short standalone weekday symbols for the receiver.

### Managing Month Symbols

- [monthSymbols](dateformatter/monthsymbols.md): The month symbols for the receiver.
- [shortMonthSymbols](dateformatter/shortmonthsymbols.md): The array of short month symbols for the receiver.
- [veryShortMonthSymbols](dateformatter/veryshortmonthsymbols.md): The very short month symbols for the receiver.
- [standaloneMonthSymbols](dateformatter/standalonemonthsymbols.md): The standalone month symbols for the receiver.
- [shortStandaloneMonthSymbols](dateformatter/shortstandalonemonthsymbols.md): The short standalone month symbols for the receiver.
- [veryShortStandaloneMonthSymbols](dateformatter/veryshortstandalonemonthsymbols.md): The very short month symbols for the receiver.

### Managing Quarter Symbols

- [quarterSymbols](dateformatter/quartersymbols.md): The quarter symbols for the receiver.
- [shortQuarterSymbols](dateformatter/shortquartersymbols.md): The short quarter symbols for the receiver.
- [standaloneQuarterSymbols](dateformatter/standalonequartersymbols.md): The standalone quarter symbols for the receiver.
- [shortStandaloneQuarterSymbols](dateformatter/shortstandalonequartersymbols.md): The short standalone quarter symbols for the receiver.

### Managing Era Symbols

- [eraSymbols](dateformatter/erasymbols.md): The era symbols for the receiver.
- [longEraSymbols](dateformatter/longerasymbols.md): The long era symbols for the receiver

### Deprecated

- [initWithDateFormat:allowNaturalLanguage:](nsdateformatter/initwithdateformat_allownaturallanguage_.md): Deprecated. Initializes and returns an `NSDateFormatter` instance that uses the OS X 10.0 formatting behavior and the given date format string in its conversions.
- [generatesCalendarDates](dateformatter/generatescalendardates.md): Indicates whether the formatter generates the deprecated calendar date type.

### Constants

- [NSDateFormatterStyle](dateformatter/style.md): The following constants specify predefined format styles for dates and times.
- [NSDateFormatterBehavior](dateformatter/behavior.md): Constants that specify the behavior `NSDateFormatter` should exhibit.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)

## See Also

### Dates and times

- [NSDateComponentsFormatter](datecomponentsformatter.md): A formatter that creates string representations of quantities of time.
- [NSRelativeDateTimeFormatter](relativedatetimeformatter.md): A formatter that creates locale-aware string representations of a relative date or time.
- [NSDateIntervalFormatter](dateintervalformatter.md): A formatter that creates string representations of time intervals.
- [NSISO8601DateFormatter](iso8601dateformatter.md): A formatter that converts between dates and their ISO 8601 string representations.
