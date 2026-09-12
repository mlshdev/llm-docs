> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage)

# CLKComplicationTemplateGraphicExtraLargeCircularStackImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularStackImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularstackimage.md#3667231) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the image and text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667231@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 160 pixels | 80 pixels |
| 41 mm | 170 pixels | 84 pixels |
| 44 mm | 174 pixels | 88 pixels |
| 45 mm | 190 pixels | 96 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(line1ImageProvider:line2TextProvider:)](clkcomplicationtemplategraphicextralargecircularstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a template with an image and a small amount of text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplategraphicextralargecircularstackimage/line1imageprovider.md): Deprecated. The image to display.
- [line2TextProvider](clkcomplicationtemplategraphicextralargecircularstackimage/line2textprovider.md): Deprecated. The text to display below the image.

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

### Text and images

- [CLKComplicationTemplateGraphicExtraLargeCircularImage](clkcomplicationtemplategraphicextralargecircularimage.md): Deprecated. A template for displaying an extra-large, full-color circular image.
- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md): Deprecated. A template for displaying a circular SwiftUI view.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackText](clkcomplicationtemplategraphicextralargecircularstacktext.md): Deprecated. A template for displaying two rows of text in an extra-large, circular complication.

# CLKComplicationTemplateGraphicExtraLargeCircularStackImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularStackImage : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularstackimage.md#3667231) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the image and text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667231@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 160 pixels | 80 pixels |
| 41 mm | 170 pixels | 84 pixels |
| 44 mm | 174 pixels | 88 pixels |
| 45 mm | 190 pixels | 96 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplategraphicextralargecircularstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a template with an image and a small amount of text.
- [templateWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplategraphicextralargecircularstackimage/templatewithline1imageprovider_line2textprovider_.md): Deprecated. Creates a template with an image and a small amount of text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplategraphicextralargecircularstackimage/line1imageprovider.md): Deprecated. The image to display.
- [line2TextProvider](clkcomplicationtemplategraphicextralargecircularstackimage/line2textprovider.md): Deprecated. The text to display below the image.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicExtraLargeCircularImage](clkcomplicationtemplategraphicextralargecircularimage.md): Deprecated. A template for displaying an extra-large, full-color circular image.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackText](clkcomplicationtemplategraphicextralargecircularstacktext.md): Deprecated. A template for displaying two rows of text in an extra-large, circular complication.
