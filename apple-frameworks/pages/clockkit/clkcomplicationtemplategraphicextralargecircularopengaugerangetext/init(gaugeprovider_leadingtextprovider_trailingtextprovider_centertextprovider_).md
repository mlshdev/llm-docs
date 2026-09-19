> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugerangetext/init(gaugeprovider:leadingtextprovider:trailingtextprovider:centertextprovider:)

# init(gaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has an open, circular gauge with leading and trailing text, and a central text element.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, leadingTextProvider: CLKTextProvider, trailingTextProvider: CLKTextProvider, centerTextProvider: CLKTextProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the trailing text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

# initWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has an open, circular gauge with leading and trailing text, and a central text element.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider leadingTextProvider:(CLKTextProvider *) leadingTextProvider trailingTextProvider:(CLKTextProvider *) trailingTextProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the trailing text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_.md): Deprecated. Returns a new template that has an open, circular gauge with leading and trailing text, and a central text element.
