> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervalgaugeprovider/init(style:gaugecolors:gaugecolorlocations:start:startfillfraction:end:endfillfraction:)](https://developer.apple.com/documentation/clockkit/clktimeintervalgaugeprovider/init(style:gaugecolors:gaugecolorlocations:start:startfillfraction:end:endfillfraction:))

# init(style:gaugeColors:gaugeColorLocations:start:startFillFraction:end:endFillFraction:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(style: CLKGaugeProviderStyle, gaugeColors: [UIColor]?, gaugeColorLocations: [NSNumber]?, start startDate: Date, startFillFraction: Float, end endDate: Date, endFillFraction: Float)
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `startDate`: The start time and date.
- `startFillFraction`: The starting position for the gague. This is a value between `0.0` and `1.0`.
- `endDate`: The end time and date. This value must be later than or equal to the start date.
- `endFillFraction`: The end position of the gague. This is a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

A newly instantiated time interval gauge provider.

<a id="Discussion"></a>

## Discussion

The gauge shows the amount of time that has elapsed, based on the current time relative to the specified start and end dates. You can specify whether the gauge counts up or counts down using the `startFillFraction` and `endFillFraction` parameters.

- If the `startFillFraction` is less than the `endFillFraction`, the gauge fills as it counts up from the start time to the end time.
- If the `startFillFraction` is greater than the `endFillFraction`, the gauge empties as it counts down from the start time to the end time.
- On circular gauges, the fill fractions also determine the position of the start and end points along the circle. `0.0` indicates the top of the circle. Values increase as you move around the circle clockwise, with `1.0` back at the top again.
- On corner gauges, you should always use the `0.0` and `1.0` as your fractional values, to ensure that you’re utilizing the whole gauge.

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Time Interval Gauge

- [init(style:gaugeColors:gaugeColorLocations:start:end:)](init%28style_gaugecolors_gaugecolorlocations_start_end_%29.md): Deprecated. Creates a time interval gauge that fills as time passes.

# gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:startFillFraction:endDate:endFillFraction: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a time interval gauge, letting you specify whether the gauge fills or empties as time passes.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) gaugeProviderWithStyle:(CLKGaugeProviderStyle) style gaugeColors:(NSArray<UIColor *> *) gaugeColors gaugeColorLocations:(NSArray<NSNumber *> *) gaugeColorLocations startDate:(NSDate *) startDate startFillFraction:(float) startFillFraction endDate:(NSDate *) endDate endFillFraction:(float) endFillFraction;
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `startDate`: The start time and date.
- `startFillFraction`: The starting position for the gague. This is a value between `0.0` and `1.0`.
- `endDate`: The end time and date. This value must be later than or equal to the start date.
- `endFillFraction`: The end position of the gague. This is a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

A newly instantiated time interval gauge provider.

<a id="Discussion"></a>

## Discussion

The gauge shows the amount of time that has elapsed, based on the current time relative to the specified start and end dates. You can specify whether the gauge counts up or counts down using the `startFillFraction` and `endFillFraction` parameters.

- If the `startFillFraction` is less than the `endFillFraction`, the gauge fills as it counts up from the start time to the end time.
- If the `startFillFraction` is greater than the `endFillFraction`, the gauge empties as it counts down from the start time to the end time.
- On circular gauges, the fill fractions also determine the position of the start and end points along the circle. `0.0` indicates the top of the circle. Values increase as you move around the circle clockwise, with `1.0` back at the top again.
- On corner gauges, you should always use the `0.0` and `1.0` as your fractional values, to ensure that you’re utilizing the whole gauge.

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Time Interval Gauge

- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:startDate:endDate:](init%28style_gaugecolors_gaugecolorlocations_start_end_%29.md): Deprecated. Creates a time interval gauge that fills as time passes.
