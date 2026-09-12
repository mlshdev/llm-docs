> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeimage/init(gaugeprovider:imageprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeimage/init(gaugeprovider:imageprovider:))

# init(gaugeProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with a closed circular gauge, and an image in the center.

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
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with a closed circular gauge, and an image in the center.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `imageProvider`: The image provider for the image at the center of the template. This template uses a full-color image.

## See Also

### Creating the Tempate

- [templateWithGaugeProvider:imageProvider:](templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template with a closed circular gauge, and an image in the center.
