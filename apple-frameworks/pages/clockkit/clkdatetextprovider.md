> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider](https://developer.apple.com/documentation/clockkit/clkdatetextprovider)

# CLKDateTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted string that conveys a date without any time information.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKDateTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use a date provider for strings that contain day, month, and year information. The text provider formats the date information consistently and in a way that makes the best use of the available space. It also takes into account the user’s region and locale settings.

When creating the formatted string, the date text provider creates the longest string that fits in the given space. It includes as many of the requested date elements as it can, but may truncate elements or use abbreviations as needed.

<a id="Date-Format-Options"></a>

### Date Format Options

When creating a `CLKDateTextProvider` object, you must specify which calendar units you want included in the resulting date. Only the following calendar units are supported:

- [NSDayCalendarUnit](../foundation/nscalendar/unit/nsdaycalendarunit.md)
- [NSMonthCalendarUnit](../foundation/nscalendar/unit/nsmonthcalendarunit.md)
- [NSWeekdayCalendarUnit](../foundation/nscalendar/unit/nsweekdaycalendarunit.md)
- [NSYearCalendarUnit](../foundation/nscalendar/unit/nsyearcalendarunit.md)

All other calendar units are ignored.

When formatting the date, the date text provider drops units starting at the end of the preceding list and working up. In other words, it drops the year first, followed by the weekday information, followed by the month. For example, a text provider configured to display all units for the date December 28, 2014 in the English-US locale would remove elements as follows until it encountered a string that fit the available space:

- `Saturday, December 28, 2015`
- `Saturday, December 28`
- `Saturday, Dec 28`
- `Sat, Dec 28`
- `Dec 28`
- `28`

## Topics

### Creating a Text Provider

- [init(date:units:)](clkdatetextprovider/init%28date_units_%29.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [init(date:units:timeZone:)](clkdatetextprovider/init%28date_units_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified date and time zone.

### Getting the Date Information

- [date](clkdatetextprovider/date.md): Deprecated. The date to display.
- [timeZone](clkdatetextprovider/timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](clkdatetextprovider/calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](clkdatetextprovider/uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.

# CLKDateTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted string that conveys a date without any time information.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKDateTextProvider : CLKTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use a date provider for strings that contain day, month, and year information. The text provider formats the date information consistently and in a way that makes the best use of the available space. It also takes into account the user’s region and locale settings.

When creating the formatted string, the date text provider creates the longest string that fits in the given space. It includes as many of the requested date elements as it can, but may truncate elements or use abbreviations as needed.

<a id="Date-Format-Options"></a>

### Date Format Options

When creating a `CLKDateTextProvider` object, you must specify which calendar units you want included in the resulting date. Only the following calendar units are supported:

- [NSDayCalendarUnit](../foundation/nscalendar/unit/nsdaycalendarunit.md)
- [NSMonthCalendarUnit](../foundation/nscalendar/unit/nsmonthcalendarunit.md)
- [NSWeekdayCalendarUnit](../foundation/nscalendar/unit/nsweekdaycalendarunit.md)
- [NSYearCalendarUnit](../foundation/nscalendar/unit/nsyearcalendarunit.md)

All other calendar units are ignored.

When formatting the date, the date text provider drops units starting at the end of the preceding list and working up. In other words, it drops the year first, followed by the weekday information, followed by the month. For example, a text provider configured to display all units for the date December 28, 2014 in the English-US locale would remove elements as follows until it encountered a string that fit the available space:

- `Saturday, December 28, 2015`
- `Saturday, December 28`
- `Saturday, Dec 28`
- `Sat, Dec 28`
- `Dec 28`
- `28`

## Topics

### Creating a Text Provider

- [textProviderWithDate:units:](clkdatetextprovider/init%28date_units_%29.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [initWithDate:units:](clkdatetextprovider/initwithdate_units_.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [textProviderWithDate:units:timeZone:](clkdatetextprovider/init%28date_units_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
- [initWithDate:units:timeZone:](clkdatetextprovider/initwithdate_units_timezone_.md): Deprecated. Creates and returns a text provider with the specified date and time zone.

### Getting the Date Information

- [date](clkdatetextprovider/date.md): Deprecated. The date to display.
- [timeZone](clkdatetextprovider/timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](clkdatetextprovider/calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](clkdatetextprovider/uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.
