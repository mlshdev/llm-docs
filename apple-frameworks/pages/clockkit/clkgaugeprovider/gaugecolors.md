> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkgaugeprovider/gaugecolors](https://developer.apple.com/documentation/clockkit/clkgaugeprovider/gaugecolors)

# gaugeColors (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The colors of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var gaugeColors: [UIColor]? { get }
```

<a id="Discussion"></a>

## Discussion

A gauge with more than one color appears as a gradient. The provider specifies the location of the colors using the [gaugeColorLocations](gaugecolorlocations.md) property. The [gaugeColors](gaugecolors.md) and [gaugeColorLocations](gaugecolorlocations.md) properties must have the same number of elements.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user. The gauge colors have no affect on the appearance of these complications.

## See Also

### Setting the Gauge’s Appearance

- [gaugeColorLocations](gaugecolorlocations.md): Deprecated. The location of each color in a multicolor gauge’s gradient.
- [style](style.md): Deprecated. The style that defines the gauge’s appearance.

# gaugeColors (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The colors of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UIColor *> * gaugeColors;
```

<a id="Discussion"></a>

## Discussion

A gauge with more than one color appears as a gradient. The provider specifies the location of the colors using the [gaugeColorLocations](gaugecolorlocations.md) property. The [gaugeColors](gaugecolors.md) and [gaugeColorLocations](gaugecolorlocations.md) properties must have the same number of elements.

> **Note**

>  Tinted graphic complications display gauges using a solid color chosen by the user. The gauge colors have no affect on the appearance of these complications.

## See Also

### Setting the Gauge’s Appearance

- [gaugeColorLocations](gaugecolorlocations.md): Deprecated. The location of each color in a multicolor gauge’s gradient.
- [style](style.md): Deprecated. The style that defines the gauge’s appearance.
