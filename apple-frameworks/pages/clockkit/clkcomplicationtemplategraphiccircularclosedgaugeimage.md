> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeimage)

# CLKComplicationTemplateGraphicCircularClosedGaugeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image and a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularClosedGaugeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularclosedgaugeimage.md#3034028) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of a circular image with a closed gauge.](https://developer.apple.com/images/com.apple.clockkit/media-3034028@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 54 pixels | 54 pixels |
| 41 mm | 57 pixels | 57 pixels |
| 44 mm | 62 pixels | 62 pixels |
| 45 mm | 64 pixels | 64 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Tempate

- [init(gaugeProvider:imageProvider:)](clkcomplicationtemplategraphiccircularclosedgaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge, and an image in the center.

### Setting the Complication Data

- [gaugeProvider](clkcomplicationtemplategraphiccircularclosedgaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [imageProvider](clkcomplicationtemplategraphiccircularclosedgaugeimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeView](clkcomplicationtemplategraphiccircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.

# CLKComplicationTemplateGraphicCircularClosedGaugeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image and a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularClosedGaugeImage : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularclosedgaugeimage.md#3034028) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of a circular image with a closed gauge.](https://developer.apple.com/images/com.apple.clockkit/media-3034028@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 54 pixels | 54 pixels |
| 41 mm | 57 pixels | 57 pixels |
| 44 mm | 62 pixels | 62 pixels |
| 45 mm | 64 pixels | 64 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Tempate

- [initWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphiccircularclosedgaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge, and an image in the center.
- [templateWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphiccircularclosedgaugeimage/templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template with a closed circular gauge, and an image in the center.

### Setting the Complication Data

- [gaugeProvider](clkcomplicationtemplategraphiccircularclosedgaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [imageProvider](clkcomplicationtemplategraphiccircularclosedgaugeimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.
