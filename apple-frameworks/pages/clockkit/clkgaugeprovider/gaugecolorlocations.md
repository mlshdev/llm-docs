> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkgaugeprovider/gaugecolorlocations](https://developer.apple.com/documentation/clockkit/clkgaugeprovider/gaugecolorlocations)

# gaugeColorLocations (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The location of each color in a multicolor gauge’s gradient.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var gaugeColorLocations: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies the location of each color in the [gaugeColors](gaugecolors.md) array. Each location must be a value between `0.0` and `1.0`.

A gauge with more than one color appears as a gradient. The provider specifies the colors using the [gaugeColors](gaugecolors.md) property. The [gaugeColors](gaugecolors.md) and [gaugeColorLocations](gaugecolorlocations.md) properties must have the same number of elements.

## See Also

### Setting the Gauge’s Appearance

- [gaugeColors](gaugecolors.md): Deprecated. The colors of the gauge.
- [style](style.md): Deprecated. The style that defines the gauge’s appearance.

# gaugeColorLocations (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The location of each color in a multicolor gauge’s gradient.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * gaugeColorLocations;
```

<a id="Discussion"></a>

## Discussion

This property specifies the location of each color in the [gaugeColors](gaugecolors.md) array. Each location must be a value between `0.0` and `1.0`.

A gauge with more than one color appears as a gradient. The provider specifies the colors using the [gaugeColors](gaugecolors.md) property. The [gaugeColors](gaugecolors.md) and [gaugeColorLocations](gaugecolorlocations.md) properties must have the same number of elements.

## See Also

### Setting the Gauge’s Appearance

- [gaugeColors](gaugecolors.md): Deprecated. The colors of the gauge.
- [style](style.md): Deprecated. The style that defines the gauge’s appearance.
