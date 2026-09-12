> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervalgaugeprovider/init(style:gaugecolors:gaugecolorlocations:start:end:)](https://developer.apple.com/documentation/clockkit/clktimeintervalgaugeprovider/init(style:gaugecolors:gaugecolorlocations:start:end:))

# init(style:gaugeColors:gaugeColorLocations:start:end:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a time interval gauge that fills as time passes.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(style: CLKGaugeProviderStyle, gaugeColors: [UIColor]?, gaugeColorLocations: [NSNumber]?, start startDate: Date, end endDate: Date)
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `startDate`: The start time and date.
- `endDate`: The end time and date. This value must be later than or equal to the start date.

<a id="return-value"></a>

## Return Value

A newly instantiated time interval gauge provider.

<a id="Discussion"></a>

## Discussion

The gauge shows the amount of time that has elapsed, based on the current time relative to the specified start and end dates. The gauge fills as it counts up from the start time to the end time.

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Time Interval Gauge

- [init(style:gaugeColors:gaugeColorLocations:start:startFillFraction:end:endFillFraction:)](init%28style_gaugecolors_gaugecolorlocations_start_startfillfraction_end_endfillfraction_%29.md): Deprecated. Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.

# gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:endDate: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a time interval gauge that fills as time passes.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) gaugeProviderWithStyle:(CLKGaugeProviderStyle) style gaugeColors:(NSArray<UIColor *> *) gaugeColors gaugeColorLocations:(NSArray<NSNumber *> *) gaugeColorLocations startDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `startDate`: The start time and date.
- `endDate`: The end time and date. This value must be later than or equal to the start date.

<a id="return-value"></a>

## Return Value

A newly instantiated time interval gauge provider.

<a id="Discussion"></a>

## Discussion

The gauge shows the amount of time that has elapsed, based on the current time relative to the specified start and end dates. The gauge fills as it counts up from the start time to the end time.

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Time Interval Gauge

- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:startFillFraction:endDate:endFillFraction:](init%28style_gaugecolors_gaugecolorlocations_start_startfillfraction_end_endfillfraction_%29.md): Deprecated. Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.
