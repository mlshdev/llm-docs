> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeimage)

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md#3667237) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, text, and image providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667237@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 62 pixels | 62 pixels |
| 41 mm | 66 pixels | 66 pixels |
| 44 mm | 66 pixels | 66 pixels |
| 45 mm | 74 pixels | 74 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(gaugeProvider:bottomImageProvider:centerTextProvider:)](clkcomplicationtemplategraphicextralargecircularopengaugeimage/init%28gaugeprovider_bottomimageprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, an image at the bottom, and text in the center.

### Setting the Complication Data

- [bottomImageProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/bottomimageprovider.md): Deprecated. The image to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md#3667237) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, text, and image providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667237@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 62 pixels | 62 pixels |
| 41 mm | 66 pixels | 66 pixels |
| 44 mm | 66 pixels | 66 pixels |
| 45 mm | 74 pixels | 74 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithGaugeProvider:bottomImageProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugeimage/init%28gaugeprovider_bottomimageprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, an image at the bottom, and text in the center.
- [templateWithGaugeProvider:bottomImageProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugeimage/templatewithgaugeprovider_bottomimageprovider_centertextprovider_.md): Deprecated. Returns a new template with an open circular gauge, an image at the bottom, and text in the center.

### Setting the Complication Data

- [bottomImageProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/bottomimageprovider.md): Deprecated. The image to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.
