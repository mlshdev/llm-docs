> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimplegaugeprovider/init(style:gaugecolors:gaugecolorlocations:fillfraction:)](https://developer.apple.com/documentation/clockkit/clksimplegaugeprovider/init(style:gaugecolors:gaugecolorlocations:fillfraction:))

# init(style:gaugeColors:gaugeColorLocations:fillFraction:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a multicolor gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(style: CLKGaugeProviderStyle, gaugeColors: [UIColor]?, gaugeColorLocations: [NSNumber]?, fillFraction: Float)
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `fillFraction`: The value displayed by the gauge. Use a value between `0.0` and `1.0`. For an empty gauge, use [CLKSimpleGaugeProviderFillFractionEmpty](../clksimplegaugeproviderfillfractionempty.md).

<a id="return-value"></a>

## Return Value

A newly instantiated multicolor gauge.

<a id="Discussion"></a>

## Discussion

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Simple Gauge Provider

- [init(style:gaugeColor:fillFraction:)](init%28style_gaugecolor_fillfraction_%29.md): Deprecated. Creates a solid-color gauge.

# gaugeProviderWithStyle:gaugeColors:gaugeColorLocations:fillFraction: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates a multicolor gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) gaugeProviderWithStyle:(CLKGaugeProviderStyle) style gaugeColors:(NSArray<UIColor *> *) gaugeColors gaugeColorLocations:(NSArray<NSNumber *> *) gaugeColorLocations fillFraction:(float) fillFraction;
```

## Parameters

- `style`: The style defining the gauge’s visual appearance. For a list of valid styles, see [CLKGaugeProviderStyle](../clkgaugeproviderstyle.md).
- `gaugeColors`: The gauge’s colors. These colors are displayed as a gradient.
- `gaugeColorLocations`: The location of each color along the gauge. Locations are values between `0.0` and `1.0`. If `nil`, the colors are evenly spaced along the gauge.
- `fillFraction`: The value displayed by the gauge. Use a value between `0.0` and `1.0`. For an empty gauge, use [CLKSimpleGaugeProviderFillFractionEmpty](../clksimplegaugeproviderfillfractionempty.md).

<a id="return-value"></a>

## Return Value

A newly instantiated multicolor gauge.

<a id="Discussion"></a>

## Discussion

If you provide both colors and locations, then the `gaugeColors` and `gaugeColorLocations` arrays must be the same length.

## See Also

### Creating a Simple Gauge Provider

- [gaugeProviderWithStyle:gaugeColor:fillFraction:](init%28style_gaugecolor_fillfraction_%29.md): Deprecated. Creates a solid-color gauge.
