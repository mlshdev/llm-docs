> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/templatewithgaugeprovider:leadingtextprovider:trailingtextprovider:outertextprovider:

# templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a template that has a gauge with leading and trailing text, and an outer text element.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider leadingTextProvider:(CLKTextProvider *) leadingTextProvider trailingTextProvider:(CLKTextProvider *) trailingTextProvider outerTextProvider:(CLKTextProvider *) outerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the gauge’s leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the gauge’s trailing text. The template supports multicolored text from this text provider.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithGaugeProvider:outerTextProvider:](init%28gaugeprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge and an outer text element.
- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.
- [templateWithGaugeProvider:outerTextProvider:](templatewithgaugeprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge and an outer text element.
