> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/init(gaugeprovider:outertextprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext/init(gaugeprovider:outertextprovider:))

# init(gaugeProvider:outerTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has a gauge and an outer text element.

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, outerTextProvider: CLKTextProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:)](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.

# initWithGaugeProvider:outerTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has a gauge and an outer text element.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider outerTextProvider:(CLKTextProvider *) outerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.
- [templateWithGaugeProvider:outerTextProvider:](templatewithgaugeprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge and an outer text element.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge with leading and trailing text, and an outer text element.
