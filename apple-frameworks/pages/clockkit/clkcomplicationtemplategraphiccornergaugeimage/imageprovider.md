> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/imageprovider

# imageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var imageProvider: CLKFullColorImageProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

# imageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKFullColorImageProvider * imageProvider;
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.
