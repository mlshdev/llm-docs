> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervalgaugeprovider](https://developer.apple.com/documentation/clockkit/clktimeintervalgaugeprovider)

# CLKTimeIntervalGaugeProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A gauge that tracks time intervals.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKTimeIntervalGaugeProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use this gauge provider to visually show the amount of time that has elapsed within the specified time interval.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user.

## Topics

### Creating a Time Interval Gauge

- [init(style:gaugeColors:gaugeColorLocations:start:end:)](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_start_end_%29.md): Deprecated. Creates a time interval gauge that fills as time passes.
- [init(style:gaugeColors:gaugeColorLocations:start:startFillFraction:end:endFillFraction:)](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_start_startfillfraction_end_endfillfraction_%29.md): Deprecated. Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.

### Getting Information about the Gauge

- [startDate](clktimeintervalgaugeprovider/startdate.md): Deprecated. The starting time and date for the gauge’s time interval.
- [endDate](clktimeintervalgaugeprovider/enddate.md): Deprecated. The ending time and date for the gauge’s time interval.
- [startFillFraction](clktimeintervalgaugeprovider/startfillfraction.md): Deprecated. The position of the leading edge of the time bar within the specified time interval.
- [endFillFraction](clktimeintervalgaugeprovider/endfillfraction.md): Deprecated. The position of the trailing edge of the time bar within the specified time interval.

### Initializers

- [init(style:gaugeColors:gaugeColorLocations:startDate:endDate:)](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_startdate_enddate_%29.md): Deprecated.
- [init(style:gaugeColors:gaugeColorLocations:startDate:startFillFraction:endDate:endFillFraction:)](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_startdate_startfillfraction_enddate_endfillfraction_%29.md): Deprecated.

## Relationships

### Inherits From

- [CLKGaugeProvider](clkgaugeprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.

# CLKTimeIntervalGaugeProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A gauge that tracks time intervals.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKTimeIntervalGaugeProvider : CLKGaugeProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use this gauge provider to visually show the amount of time that has elapsed within the specified time interval.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user.

## Topics

### Creating a Time Interval Gauge

- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:endDate:](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_start_end_%29.md): Deprecated. Creates a time interval gauge that fills as time passes.
- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:startFillFraction:endDate:endFillFraction:](clktimeintervalgaugeprovider/init%28style_gaugecolors_gaugecolorlocations_start_startfillfraction_end_endfillfraction_%29.md): Deprecated. Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.

### Getting Information about the Gauge

- [startDate](clktimeintervalgaugeprovider/startdate.md): Deprecated. The starting time and date for the gauge’s time interval.
- [endDate](clktimeintervalgaugeprovider/enddate.md): Deprecated. The ending time and date for the gauge’s time interval.
- [startFillFraction](clktimeintervalgaugeprovider/startfillfraction.md): Deprecated. The position of the leading edge of the time bar within the specified time interval.
- [endFillFraction](clktimeintervalgaugeprovider/endfillfraction.md): Deprecated. The position of the trailing edge of the time bar within the specified time interval.

## Relationships

### Inherits From

- [CLKGaugeProvider](clkgaugeprovider.md)

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.
