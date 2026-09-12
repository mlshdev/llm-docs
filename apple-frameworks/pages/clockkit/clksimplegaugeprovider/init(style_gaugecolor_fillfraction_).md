> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimplegaugeprovider/init(style:gaugecolor:fillfraction:)](https://developer.apple.com/documentation/clockkit/clksimplegaugeprovider/init(style:gaugecolor:fillfraction:))

# init(style:gaugeColor:fillFraction:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a solid-color gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(style: CLKGaugeProviderStyle, gaugeColor color: UIColor, fillFraction: Float)
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `color`: The gauge’s color.
- `fillFraction`: The value displayed by the gauge. Use a value between `0.0` and `1.0`. For an empty gauge, use [CLKSimpleGaugeProviderFillFractionEmpty](../clksimplegaugeproviderfillfractionempty.md).

<a id="return-value"></a>

## Return Value

A newly instantiated solid-color gauge.

## See Also

### Creating a Simple Gauge Provider

- [init(style:gaugeColors:gaugeColorLocations:fillFraction:)](init%28style_gaugecolors_gaugecolorlocations_fillfraction_%29.md): Deprecated. Creates a multicolor gauge.

# gaugeProviderWithStyle:gaugeColor:fillFraction: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a solid-color gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) gaugeProviderWithStyle:(CLKGaugeProviderStyle) style gaugeColor:(UIColor *) color fillFraction:(float) fillFraction;
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `color`: The gauge’s color.
- `fillFraction`: The value displayed by the gauge. Use a value between `0.0` and `1.0`. For an empty gauge, use [CLKSimpleGaugeProviderFillFractionEmpty](../clksimplegaugeproviderfillfractionempty.md).

<a id="return-value"></a>

## Return Value

A newly instantiated solid-color gauge.

## See Also

### Creating a Simple Gauge Provider

- [gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:fillFraction:](init%28style_gaugecolors_gaugecolorlocations_fillfraction_%29.md): Deprecated. Creates a multicolor gauge.
