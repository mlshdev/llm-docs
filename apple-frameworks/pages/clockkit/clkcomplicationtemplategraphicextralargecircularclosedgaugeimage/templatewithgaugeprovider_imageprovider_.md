> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/templatewithgaugeprovider:imageprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/templatewithgaugeprovider:imageprovider:)

# templateWithGaugeProvider:imageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template with a closed circular gauge and an image in the center.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: The image provider for the image at the center of the template. This template uses a full-color image.

## See Also

### Creating the Template

- [initWithGaugeProvider:imageProvider:](init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge and an image in the center.
