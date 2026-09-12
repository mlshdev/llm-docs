> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugerangetext/templatewithgaugeprovider:leadingtextprovider:trailingtextprovider:centertextprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugerangetext/templatewithgaugeprovider:leadingtextprovider:trailingtextprovider:centertextprovider:)

# templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has an open circular gauge with leading and trailing text, and a center text element.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider leadingTextProvider:(CLKTextProvider *) leadingTextProvider trailingTextProvider:(CLKTextProvider *) trailingTextProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the trailing text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open circular gauge with leading and trailing text, and a center text element.
