> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimetextprovider](https://developer.apple.com/documentation/clockkit/clktimetextprovider)

# CLKTimeTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted time value.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKTimeTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

This provider supports time values in either the 24-hour or 12-hour format and takes into account the user’s region and locale settings. As needed, the provider automatically shortens the string to fit the available space.

When formatting the time, the time text provider drops the morning/evening indicator if it can’t fit the entire time value. For example, a provider configured to display the time 10:09AM in the English-US locale would remove elements as follows until it encountered a string that fit the available space:

- `10:09AM`
- `10:09`

## Topics

### Creating a Text Provider

- [init(date:)](clktimetextprovider/init%28date_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [init(date:timeZone:)](clktimetextprovider/init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [date](clktimetextprovider/date.md): Deprecated. The date object containing the time value.
- [timeZone](clktimetextprovider/timezone.md): Deprecated. The time zone used to format time values.

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
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.

# CLKTimeTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A formatted time value.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKTimeTextProvider : CLKTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

This provider supports time values in either the 24-hour or 12-hour format and takes into account the user’s region and locale settings. As needed, the provider automatically shortens the string to fit the available space.

When formatting the time, the time text provider drops the morning/evening indicator if it can’t fit the entire time value. For example, a provider configured to display the time 10:09AM in the English-US locale would remove elements as follows until it encountered a string that fit the available space:

- `10:09AM`
- `10:09`

## Topics

### Creating a Text Provider

- [textProviderWithDate:](clktimetextprovider/init%28date_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [initWithDate:](clktimetextprovider/initwithdate_.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [textProviderWithDate:timeZone:](clktimetextprovider/init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [initWithDate:timeZone:](clktimetextprovider/initwithdate_timezone_.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [date](clktimetextprovider/date.md): Deprecated. The date object containing the time value.
- [timeZone](clktimetextprovider/timezone.md): Deprecated. The time zone used to format time values.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.
