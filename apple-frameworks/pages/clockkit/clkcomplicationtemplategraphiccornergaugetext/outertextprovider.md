> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/outertextprovider

# outerTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The outer text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var outerTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the outer text as white.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gague.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

# outerTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The outer text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * outerTextProvider;
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the outer text as white.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gague.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.
