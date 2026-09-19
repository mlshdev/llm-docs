> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugerangetext/leadingtextprovider

# leadingTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The text to display on the leading edge of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var leadingTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

# leadingTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The text to display on the leading edge of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * leadingTextProvider;
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.
