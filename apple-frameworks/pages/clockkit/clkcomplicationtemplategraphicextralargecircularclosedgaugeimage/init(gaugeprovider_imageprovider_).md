> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/init(gaugeprovider:imageprovider:)

# init(gaugeProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a closed circular gauge and an image in the center.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: The image provider for the image at the center of the template. This template uses a full-color image.

# initWithGaugeProvider:imageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a closed circular gauge and an image in the center.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: The image provider for the image at the center of the template. This template uses a full-color image.

## See Also

### Creating the Template

- [templateWithGaugeProvider:imageProvider:](templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template with a closed circular gauge and an image in the center.
