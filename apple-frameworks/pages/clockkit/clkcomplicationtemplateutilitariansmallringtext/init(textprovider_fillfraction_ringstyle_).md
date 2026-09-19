> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallringtext/init(textprovider:fillfraction:ringstyle:)

# init(textProvider:fillFraction:ringStyle:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided text, fill fraction, and ring style.

## Declaration

```swift
init(textProvider: CLKTextProvider, fillFraction: Float, ringStyle: CLKComplicationRingStyle)
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

# initWithTextProvider:fillFraction:ringStyle: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided text, fill fraction, and ring style.

## Declaration

```objectivec
- (instancetype) initWithTextProvider:(CLKTextProvider *) textProvider fillFraction:(float) fillFraction ringStyle:(CLKComplicationRingStyle) ringStyle;
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

## See Also

### Creating the Template

- [templateWithTextProvider:fillFraction:ringStyle:](templatewithtextprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided text, fill fraction, and ring style.
