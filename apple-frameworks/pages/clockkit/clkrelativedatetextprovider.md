> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkrelativedatetextprovider](https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider)

# CLKRelativeDateTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted string that conveys the difference in time between the current date and a date that you specify.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKRelativeDateTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

You use a relative date text provider to implement timers or other relative time values in an efficient way. Instead of using multiple timeline entries to replicate a countdown timer, create a single timeline entry with a relative date text provider. When the user views the clock face, ClockKit automatically updates the relative time value in your complication, providing up-to-date time information.

When creating the formatted string, the relative date text provider creates the longest string that fits in the given space. It includes as many of the requested date elements as it can, but may truncate elements or use abbreviations as needed. The formatted string takes into account the user’s region and locale settings.

<a id="Date-Format-Options"></a>

### Date Format Options

When creating a `CLKRelativeDateTextProvider` object, you must specify which calendar units you want included in the resulting date. Only the following calendar units are supported:

- [NSYearCalendarUnit](../foundation/nscalendar/unit/nsyearcalendarunit.md)
- [NSMonthCalendarUnit](../foundation/nscalendar/unit/nsmonthcalendarunit.md)
- [NSWeekOfMonthCalendarUnit](../foundation/nscalendar/unit/nsweekofmonthcalendarunit.md)
- [NSDayCalendarUnit](../foundation/nscalendar/unit/nsdaycalendarunit.md)
- [NSHourCalendarUnit](../foundation/nscalendar/unit/nshourcalendarunit.md)
- [NSMinuteCalendarUnit](../foundation/nscalendar/unit/nsminutecalendarunit.md)
- [NSSecondCalendarUnit](../foundation/nscalendar/unit/nssecondcalendarunit.md)

> **Note**

>  When creating a relative date provider using the [CLKRelativeDateStyle.timer](clkrelativedatestyle/timer.md) style, only the [NSHourCalendarUnit](../foundation/nscalendar/unit/nshourcalendarunit.md), [NSMinuteCalendarUnit](../foundation/nscalendar/unit/nsminutecalendarunit.md), and [NSSecondCalendarUnit](../foundation/nscalendar/unit/nssecondcalendarunit.md) units are supported.

All other calendar units are ignored.

The format of the relative time value is dependent on the date style you choose when creating the text provider. For a list of possible styles and examples of each, see [CLKRelativeDateStyle](clkrelativedatestyle.md).

## Topics

### Creating a Text Provider

- [init(date:style:units:)](clkrelativedatetextprovider/init%28date_style_units_%29.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [init(date:relativeTo:style:units:)](clkrelativedatetextprovider/init%28date_relativeto_style_units_%29.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.

### Getting the Date Information

- [date](clkrelativedatetextprovider/date.md): Deprecated. The target date to use for calculations.
- [relativeToDate](clkrelativedatetextprovider/relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](clkrelativedatetextprovider/relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.
- [calendarUnits](clkrelativedatetextprovider/calendarunits.md): Deprecated. The calendar units to include in the formatted string.

### Constants

- [CLKRelativeDateStyle](clkrelativedatestyle.md): Deprecated. Constants indicating the formatting style for the relative date values.

### Initializers

- [init(date:relativeToDate:style:units:)](clkrelativedatetextprovider/init%28date_relativetodate_style_units_%29.md): Deprecated.

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
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.

# CLKRelativeDateTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted string that conveys the difference in time between the current date and a date that you specify.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKRelativeDateTextProvider : CLKTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

You use a relative date text provider to implement timers or other relative time values in an efficient way. Instead of using multiple timeline entries to replicate a countdown timer, create a single timeline entry with a relative date text provider. When the user views the clock face, ClockKit automatically updates the relative time value in your complication, providing up-to-date time information.

When creating the formatted string, the relative date text provider creates the longest string that fits in the given space. It includes as many of the requested date elements as it can, but may truncate elements or use abbreviations as needed. The formatted string takes into account the user’s region and locale settings.

<a id="Date-Format-Options"></a>

### Date Format Options

When creating a `CLKRelativeDateTextProvider` object, you must specify which calendar units you want included in the resulting date. Only the following calendar units are supported:

- [NSYearCalendarUnit](../foundation/nscalendar/unit/nsyearcalendarunit.md)
- [NSMonthCalendarUnit](../foundation/nscalendar/unit/nsmonthcalendarunit.md)
- [NSWeekOfMonthCalendarUnit](../foundation/nscalendar/unit/nsweekofmonthcalendarunit.md)
- [NSDayCalendarUnit](../foundation/nscalendar/unit/nsdaycalendarunit.md)
- [NSHourCalendarUnit](../foundation/nscalendar/unit/nshourcalendarunit.md)
- [NSMinuteCalendarUnit](../foundation/nscalendar/unit/nsminutecalendarunit.md)
- [NSSecondCalendarUnit](../foundation/nscalendar/unit/nssecondcalendarunit.md)

> **Note**

>  When creating a relative date provider using the [CLKRelativeDateStyleTimer](clkrelativedatestyle/timer.md) style, only the [NSHourCalendarUnit](../foundation/nscalendar/unit/nshourcalendarunit.md), [NSMinuteCalendarUnit](../foundation/nscalendar/unit/nsminutecalendarunit.md), and [NSSecondCalendarUnit](../foundation/nscalendar/unit/nssecondcalendarunit.md) units are supported.

All other calendar units are ignored.

The format of the relative time value is dependent on the date style you choose when creating the text provider. For a list of possible styles and examples of each, see [CLKRelativeDateStyle](clkrelativedatestyle.md).

## Topics

### Creating a Text Provider

- [textProviderWithDate:style:units:](clkrelativedatetextprovider/init%28date_style_units_%29.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [initWithDate:style:units:](clkrelativedatetextprovider/initwithdate_style_units_.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [textProviderWithDate:relativeToDate:style:units:](clkrelativedatetextprovider/init%28date_relativeto_style_units_%29.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
- [initWithDate:relativeToDate:style:units:](clkrelativedatetextprovider/initwithdate_relativetodate_style_units_.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.

### Getting the Date Information

- [date](clkrelativedatetextprovider/date.md): Deprecated. The target date to use for calculations.
- [relativeToDate](clkrelativedatetextprovider/relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](clkrelativedatetextprovider/relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.
- [calendarUnits](clkrelativedatetextprovider/calendarunits.md): Deprecated. The calendar units to include in the formatted string.

### Constants

- [CLKRelativeDateStyle](clkrelativedatestyle.md): Deprecated. Constants indicating the formatting style for the relative date values.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.
