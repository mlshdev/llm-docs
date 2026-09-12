> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeimage)

# CLKComplicationTemplateGraphicCornerGaugeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying an image and a gauge in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCornerGaugeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornergaugeimage.md#3030693) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of an image and a gauge with trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030693@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 40 pixels | 40 pixels |
| 41 mm | 42 pixels | 42 pixels |
| 44 mm | 44 pixels | 44 pixels |
| 45 mm | 48 pixels | 48 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(gaugeProvider:imageProvider:)](clkcomplicationtemplategraphiccornergaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge and an image.
- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:)](clkcomplicationtemplategraphiccornergaugeimage/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge with leading and trailing text and an image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccornergaugeimage/imageprovider.md): Deprecated. The image to display.
- [gaugeProvider](clkcomplicationtemplategraphiccornergaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccornergaugeimage/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphiccornergaugeimage/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Gauges

- [CLKComplicationTemplateGraphicCornerGaugeView](clkcomplicationtemplategraphiccornergaugeview.md): Deprecated. A template for displaying a SwiftUI view and a gauge in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerGaugeText](clkcomplicationtemplategraphiccornergaugetext.md): Deprecated. A template for displaying text and a gauge in the clock face’s corner.

# CLKComplicationTemplateGraphicCornerGaugeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying an image and a gauge in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCornerGaugeImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornergaugeimage.md#3030693) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of an image and a gauge with trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030693@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 40 pixels | 40 pixels |
| 41 mm | 42 pixels | 42 pixels |
| 44 mm | 44 pixels | 44 pixels |
| 45 mm | 48 pixels | 48 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphiccornergaugeimage/init%28gaugeprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge and an image.
- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](clkcomplicationtemplategraphiccornergaugeimage/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a gauge with leading and trailing text and an image.
- [templateWithGaugeProvider:imageProvider:](clkcomplicationtemplategraphiccornergaugeimage/templatewithgaugeprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge and an image.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:imageProvider:](clkcomplicationtemplategraphiccornergaugeimage/templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a gauge with leading and trailing text and an image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccornergaugeimage/imageprovider.md): Deprecated. The image to display.
- [gaugeProvider](clkcomplicationtemplategraphiccornergaugeimage/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccornergaugeimage/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphiccornergaugeimage/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Gauges

- [CLKComplicationTemplateGraphicCornerGaugeText](clkcomplicationtemplategraphiccornergaugetext.md): Deprecated. A template for displaying text and a gauge in the clock face’s corner.
