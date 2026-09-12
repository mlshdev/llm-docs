> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/init(gaugeprovider:leadingtextprovider:trailingtextprovider:imageprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/init(gaugeprovider:leadingtextprovider:trailingtextprovider:imageprovider:))

# init(gaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a gauge with leading and trailing text and an image.

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, leadingTextProvider: CLKTextProvider?, trailingTextProvider: CLKTextProvider?, imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the gauge’s leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the gauge’s trailing text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [init(gaugeProvider:imageProvider:)](init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge and an image.

# initWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a gauge with leading and trailing text and an image.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider leadingTextProvider:(CLKTextProvider *) leadingTextProvider trailingTextProvider:(CLKTextProvider *) trailingTextProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the gauge’s leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the gauge’s trailing text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:imageProvider:](init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge and an image.
- [templateWithGaugeProvider:imageProvider:](templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge and an image.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge with leading and trailing text and an image.
