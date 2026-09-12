> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallringtext/templatewithtextprovider:fillfraction:ringstyle:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallringtext/templatewithtextprovider:fillfraction:ringstyle:)

# templateWithTextProvider:fillFraction:ringStyle:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template from the provided text, fill fraction, and ring style.

## Declaration

```objectivec
+ (instancetype) templateWithTextProvider:(CLKTextProvider *) textProvider fillFraction:(float) fillFraction ringStyle:(CLKComplicationRingStyle) ringStyle;
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

## See Also

### Creating the Template

- [initWithTextProvider:fillFraction:ringStyle:](init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.
