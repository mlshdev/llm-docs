> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle](https://developer.apple.com/documentation/foundation/date/intervalformatstyle)

# Date.IntervalFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that creates string representations of date intervals.

## Declaration

```swift
struct IntervalFormatStyle
```

<a id="overview"></a>

## Overview

Use a date interval format style to create user-readable strings in the form of `<start> - <end>` for your app’s interface, where `<start>` and `<end>` are date values that you supply. The format style uses locale and language information, along with custom formatting options, to define the content of the resulting string.

`Date.IntervalFormatStyle` provides a variety of localized presets and configuration options to create user-visible representations of date intervals. When displaying a date interval to a user, use the [formatted(date:time:)](formatted%28date_time_%29.md) instance method of `Range<Date>`. Set the date and time styles of the date interval format style separately, according to your particular needs.

For example, to create a date interval string with a full date and no time representation, set the [Date.IntervalFormatStyle.DateStyle](intervalformatstyle/datestyle.md) to [complete](formatstyle/datestyle/complete.md) and the [Date.IntervalFormatStyle.TimeStyle](intervalformatstyle/timestyle.md) to [omitted](formatstyle/timestyle/omitted.md). The following example creates a formatted interval string with this style:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -120, to: Date()),
    let thirtyDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -30, to: today) {
    // today: June 5, 2023
    // thirtyDaysBeforeToday: May 6, 2023

    // Create a Range<Date>.
    let last30days = thirtyDaysBeforeToday..<today

    let formatted = last30days.formatted(date: .complete, time: .omitted)
    // "Saturday, January 30 – Monday, March 1, 2021"
}
```

You can create string representations of date intervals with various levels of brevity using a variety of preset date and time styles. The following example shows date styles of [long](formatstyle/datestyle/long.md), [abbreviated](formatstyle/datestyle/abbreviated.md), and [numeric](formatstyle/datestyle/numeric.md), and time styles of [shortened](formatstyle/timestyle/shortened.md), [standard](formatstyle/timestyle/standard.md), and [complete](formatstyle/timestyle/complete.md):

```swift
if let today = Calendar.current.date(byAdding: .day, value: -120, to: Date()),
   let thirtyDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -30, to: today) {
   // today: Mar 1, 2021 at 8:01 PM
   // thirtyDaysBeforeToday: Jan 30, 2021 at 8:01 PM

   // Create a Range<Date>.
   let last30days = thirtyDaysBeforeToday..<today

   print(last30days.formatted(date: .long, time: .shortened))
   // January 30, 2021, 8:01 PM – March 1, 2021, 8:01 PM

   print(last30days.formatted(date: .abbreviated, time: .standard))
   // Jan 30, 2021, 8:01:49 PM – Mar 1, 2021, 8:01:49 PM

   print(last30days.formatted(date: .numeric, time: .complete))
   // 1/30/2021, 8:01:49 PM CST – 3/1/2021, 8:01:49 PM CST

   print(last30days.formatted())
   // 1/30/21, 8:01 PM – 3/1/21, 8:01 PM
}
```

The default date style is [abbreviated](formatstyle/datestyle/abbreviated.md) and the default time style is [shortened](formatstyle/timestyle/shortened.md).

For full customization of the string representation of a date interval, use the [formatted(\_:)](formatted%28__%29.md) instance method of `Range<Date>` and provide a [Date.IntervalFormatStyle](intervalformatstyle.md) instance.

You can achieve any customization of date and time representation your app requires by appying a series of convenience modifiers to your format style. The following example applies a series of modifiers to the format style to precisely define the formatting of the year, month, day, hour, minute, and time zone components of the resulting string:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysAfterToday = Calendar.current.date(byAdding: .day, value: 7, to: today) {

    // Create a Range<Date>.
    let weekFromNow = today..<sevenDaysAfterToday
    
    // Call the .formatted method on a Range<Date> and pass in an instance of Date.IntervalFormatStyle.
    weekFromNow.formatted(
        Date.IntervalFormatStyle()
            .year()
            .month(.abbreviated)
            .day()
            .hour(.defaultDigits(amPM: .narrow))
            .weekday(.abbreviated)
    ) //  Wed, Feb 10, 2021, 3 p – Wed, Feb 17, 2021, 3 p
}
```

[Date.IntervalFormatStyle](intervalformatstyle.md) provides a convenient factory variable, `interval`, to shorten the syntax when applying date and time modifiers to customize the format.

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -7, to: today) {

    // Create a Range<Date>.
    let weekBefore = sevenDaysBeforeToday..<today

    let localeArray = ["en_US", "sv_SE", "en_GB", "th_TH", "fr_BE"]
    for localeID in localeArray {
        // Call the .formatted method on a Range<Date> and pass in an instance of Date.IntervalFormatStyle.
        print(weekBefore.formatted(.interval
                 .day()
                 .month(.wide)
                 .weekday(.short)
                 .hour(.conversationalTwoDigits(amPM: .wide))
                 .locale(Locale(identifier: localeID))))
    }
}
// We, February 3, 3 PM – We, February 10, 3 PM
// on 3 februari 15 – on 10 februari 15
// We 3 February, 15 – We 10 February, 15
// พ. 3 กุมภาพันธ์ 15 – พ. 10 กุมภาพันธ์ 15
// me 3 février, 15 h – me 10 février, 15 h

```

## Topics

### Creating a Date Interval Format Style

- [init(date:time:locale:calendar:timeZone:)](intervalformatstyle/init%28date_time_locale_calendar_timezone_%29.md): Creates an instance using the provided date, time, locale, calendar, time zone, and capitalization context.

### Specifying Date Interval Format Styles

- [timeZone(\_:)](intervalformatstyle/timezone%28__%29.md): Modifies the date interval format style to use the specified time zone format.
- [locale(\_:)](intervalformatstyle/locale%28__%29.md): Modifies the date interval format style to use the specified locale.
- [calendar](intervalformatstyle/calendar.md): The calendar for formatting the date interval.
- [locale](intervalformatstyle/locale.md): The locale for formatting the date and time interval components.
- [timeZone](intervalformatstyle/timezone.md): The time zone for formatting the date interval components.

### Modifying Date Interval Format Styles

- [day()](intervalformatstyle/day%28%29.md): Modifies the date interval format style to include the day.
- [hour(\_:)](intervalformatstyle/hour%28__%29.md): Modifies the date interval format style to use the specified hour format style.
- [minute()](intervalformatstyle/minute%28%29.md): Modifies the date interval format style to include the minutes.
- [month(\_:)](intervalformatstyle/month%28__%29.md): Modifies the date interval format style to include the month.
- [second()](intervalformatstyle/second%28%29.md): Modifies the date interval format style to include the seconds.
- [weekday(\_:)](intervalformatstyle/weekday%28__%29.md): Modifies the date interval format style to include the specified weekday style.
- [year()](intervalformatstyle/year%28%29.md): Modifies the date interval format style to include the year.

### Formatting a Date Interval Format Style

- [format(\_:)](intervalformatstyle/format%28__%29.md): Creates a locale-aware string representation from a relative date value.

### Comparing Date Interval Format Styles

- [==(\_:\_:)](==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Supporting Types

- [Date.IntervalFormatStyle.DateStyle](intervalformatstyle/datestyle.md): The type that defines date interval styles that vary in length or in their included components.
- [Date.IntervalFormatStyle.Symbol](intervalformatstyle/symbol.md): The type that supports customizing formatting templates using the date format style’s modifier functions, and constructing fixed-pattern date format strings.
- [Date.IntervalFormatStyle.TimeStyle](intervalformatstyle/timestyle.md): The type that defines time styles that vary in length or in their included components.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying date and time styles

- [dateTime](../formatstyle/datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [verbatim(\_:locale:timeZone:calendar:)](../formatstyle/verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](../formatstyle/interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [relative(presentation:unitsStyle:)](../formatstyle/relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](../formatstyle/components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
