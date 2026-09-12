> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/leadingtextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/leadingtextprovider)

# leadingTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display on the leading edge of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var leadingTextProvider: CLKTextProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [imageProvider](imageprovider.md): Deprecated. The image to display.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

# leadingTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display on the leading edge of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKTextProvider * leadingTextProvider;
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [imageProvider](imageprovider.md): Deprecated. The image to display.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.
