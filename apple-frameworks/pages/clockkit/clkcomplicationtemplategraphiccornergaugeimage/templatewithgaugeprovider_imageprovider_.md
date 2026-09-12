> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/templatewithgaugeprovider:imageprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/templatewithgaugeprovider:imageprovider:)

# templateWithGaugeProvider:imageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has a gauge and an image.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:imageProvider:](init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge and an image.
- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge with leading and trailing text and an image.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge with leading and trailing text and an image.
