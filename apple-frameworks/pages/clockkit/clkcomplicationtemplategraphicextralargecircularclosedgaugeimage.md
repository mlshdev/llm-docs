> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage)

# CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md#3667236) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge and image providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667236@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 154 pixels | 154 pixels |
| 41 mm | 163 pixels | 163 pixels |
| 44 mm | 174 pixels | 174 pixels |
| 45 mm | 183 pixels | 183 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(gaugeProvider:imageProvider:)](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge and an image in the center.

### Setting the Complication Data

- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [imageProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

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

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.

# CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md#3667236) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge and image providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667236@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 154 pixels | 154 pixels |
| 41 mm | 163 pixels | 163 pixels |
| 44 mm | 174 pixels | 174 pixels |
| 45 mm | 183 pixels | 183 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge and an image in the center.
- [templateWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template with a closed circular gauge and an image in the center.

### Setting the Complication Data

- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [imageProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.
