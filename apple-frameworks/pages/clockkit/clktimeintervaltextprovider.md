> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervaltextprovider](https://developer.apple.com/documentation/clockkit/clktimeintervaltextprovider)

# CLKTimeIntervalTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted time range.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKTimeIntervalTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

This provider creates strings like “10:15–11:15AM” where the time range may span hours, days, or some larger time interval. The text provider takes into account the user’s region and locale settings.

Time interval strings are more appropriate in complication families where there’s sufficient space to draw the full time range, such as the modular large and utilitarian large families. In families where space is more limited, the provider may display only the start date of the time range.

When formatting the time interval, the time text provider drops the morning/evening indicator of the start time when it’s the same as the end time. Time intervals that are more than 24 hours are displayed as a range of days. The following are some examples of formatted time intervals:

- `9:30AM - 3:30PM`
- `9:30 - 10:30AM`
- `Jan 1 - Jan 7`
- `1/1 - 1/7`

## Topics

### Creating the Text Provider

- [init(start:end:)](clktimeintervaltextprovider/init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [init(start:end:timeZone:)](clktimeintervaltextprovider/init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.

### Getting the Time Information

- [startDate](clktimeintervaltextprovider/startdate.md): Deprecated. The start date for the time interval.
- [endDate](clktimeintervaltextprovider/enddate.md): Deprecated. The end date for the time interval.
- [timeZone](clktimeintervaltextprovider/timezone.md): Deprecated. The time zone used to format time values.

### Initializers

- [init(startDate:endDate:)](clktimeintervaltextprovider/init%28startdate_enddate_%29.md): Deprecated.
- [init(startDate:endDate:timeZone:)](clktimeintervaltextprovider/init%28startdate_enddate_timezone_%29.md): Deprecated.

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
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.

# CLKTimeIntervalTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted time range.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKTimeIntervalTextProvider : CLKTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

This provider creates strings like “10:15–11:15AM” where the time range may span hours, days, or some larger time interval. The text provider takes into account the user’s region and locale settings.

Time interval strings are more appropriate in complication families where there’s sufficient space to draw the full time range, such as the modular large and utilitarian large families. In families where space is more limited, the provider may display only the start date of the time range.

When formatting the time interval, the time text provider drops the morning/evening indicator of the start time when it’s the same as the end time. Time intervals that are more than 24 hours are displayed as a range of days. The following are some examples of formatted time intervals:

- `9:30AM - 3:30PM`
- `9:30 - 10:30AM`
- `Jan 1 - Jan 7`
- `1/1 - 1/7`

## Topics

### Creating the Text Provider

- [textProviderWithStartDate:endDate:](clktimeintervaltextprovider/init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [initWithStartDate:endDate:](clktimeintervaltextprovider/initwithstartdate_enddate_.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [textProviderWithStartDate:endDate:timeZone:](clktimeintervaltextprovider/init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
- [initWithStartDate:endDate:timeZone:](clktimeintervaltextprovider/initwithstartdate_enddate_timezone_.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.

### Getting the Time Information

- [startDate](clktimeintervaltextprovider/startdate.md): Deprecated. The start date for the time interval.
- [endDate](clktimeintervaltextprovider/enddate.md): Deprecated. The end date for the time interval.
- [timeZone](clktimeintervaltextprovider/timezone.md): Deprecated. The time zone used to format time values.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.
