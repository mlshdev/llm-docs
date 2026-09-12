> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/templatewithgaugeprovider:outertextprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/templatewithgaugeprovider:outertextprovider:)

# templateWithGaugeProvider:outerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a template that has a gauge and an outer text element.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider outerTextProvider:(CLKTextProvider *) outerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithGaugeProvider:outerTextProvider:](init%28gaugeprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge and an outer text element.
- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge with leading and trailing text, and an outer text element.
