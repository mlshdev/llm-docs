> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeimage)

# CLKComplicationTemplateGraphicCircularOpenGaugeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularOpenGaugeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugeimage.md#3030686) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text with an open gauge and an image.](https://developer.apple.com/images/com.apple.clockkit/media-3030686@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 22 pixels | 22 pixels |
| 41 mm | 23 pixels | 23 pixels |
| 44 mm | 24 pixels | 24 pixels |
| 45 mm | 26 pixels | 26 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(gaugeProvider:bottomImageProvider:centerTextProvider:)](clkcomplicationtemplategraphiccircularopengaugeimage/init%28gaugeprovider_bottomimageprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.

### Setting the Complication Data

- [bottomImageProvider](clkcomplicationtemplategraphiccircularopengaugeimage/bottomimageprovider.md): Deprecated. The image to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugeimage/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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

- [CLKComplicationTemplateGraphicCircularOpenGaugeView](clkcomplicationtemplategraphiccircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.

# CLKComplicationTemplateGraphicCircularOpenGaugeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularOpenGaugeImage : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugeimage.md#3030686) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text with an open gauge and an image.](https://developer.apple.com/images/com.apple.clockkit/media-3030686@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 22 pixels | 22 pixels |
| 41 mm | 23 pixels | 23 pixels |
| 44 mm | 24 pixels | 24 pixels |
| 45 mm | 26 pixels | 26 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithGaugeProvider:bottomImageProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugeimage/init%28gaugeprovider_bottomimageprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.
- [templateWithGaugeProvider:bottomImageProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugeimage/templatewithgaugeprovider_bottomimageprovider_centertextprovider_.md): Deprecated. Returns a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.

### Setting the Complication Data

- [bottomImageProvider](clkcomplicationtemplategraphiccircularopengaugeimage/bottomimageprovider.md): Deprecated. The image to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugeimage/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.
