> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/init(gaugeprovider:imageprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage/init(gaugeprovider:imageprovider:))

# init(gaugeProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a gauge and an image.

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:)](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge with leading and trailing text and an image.

# initWithGaugeProvider:imageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a gauge and an image.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](init%28gaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge with leading and trailing text and an image.
- [templateWithGaugeProvider:imageProvider:](templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge and an image.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge with leading and trailing text and an image.
