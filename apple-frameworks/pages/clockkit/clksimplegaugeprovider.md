> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimplegaugeprovider](https://developer.apple.com/documentation/clockkit/clksimplegaugeprovider)

# CLKSimpleGaugeProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A gauge that shows a fractional value.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKSimpleGaugeProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

A simple gauge provider displays values that map to a `0.0` to `1.0` range. For example, you could use the gauge to show the percentage of a task that has been completed, or the current temperature within a specified temperature range.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user.

For time intervals, use the [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md).

## Topics

### Creating a Simple Gauge Provider

- [init(style:gaugeColor:fillFraction:)](clksimplegaugeprovider/init%28style_gaugecolor_fillfraction_%29.md): Deprecated. Creates a solid-color gauge.
- [init(style:gaugeColors:gaugeColorLocations:fillFraction:)](clksimplegaugeprovider/init%28style_gaugecolors_gaugecolorlocations_fillfraction_%29.md): Deprecated. Creates a multicolor gauge.

### Getting Information About the Gauge

- [fillFraction](clksimplegaugeprovider/fillfraction.md): Deprecated. The value displayed by the gauge.

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

- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.

# CLKSimpleGaugeProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A gauge that shows a fractional value.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKSimpleGaugeProvider : CLKGaugeProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

A simple gauge provider displays values that map to a `0.0` to `1.0` range. For example, you could use the gauge to show the percentage of a task that has been completed, or the current temperature within a specified temperature range.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user.

For time intervals, use the [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md).

## Topics

### Creating a Simple Gauge Provider

- [gaugeProviderWithStyle:gaugeColor:fillFraction:](clksimplegaugeprovider/init%28style_gaugecolor_fillfraction_%29.md): Deprecated. Creates a solid-color gauge.
- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:fillFraction:](clksimplegaugeprovider/init%28style_gaugecolors_gaugecolorlocations_fillfraction_%29.md): Deprecated. Creates a multicolor gauge.

### Getting Information About the Gauge

- [fillFraction](clksimplegaugeprovider/fillfraction.md): Deprecated. The value displayed by the gauge.

## Relationships

### Inherits From

- [CLKGaugeProvider](clkgaugeprovider.md)

## See Also

### Gauge providers

- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.
