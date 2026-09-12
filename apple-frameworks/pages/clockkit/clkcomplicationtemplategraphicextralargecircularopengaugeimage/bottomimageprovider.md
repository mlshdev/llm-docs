> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeimage/bottomimageprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeimage/bottomimageprovider)

# bottomImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The image to display at the bottom of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var bottomImageProvider: CLKFullColorImageProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.

# bottomImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The image to display at the bottom of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKFullColorImageProvider * bottomImageProvider;
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
