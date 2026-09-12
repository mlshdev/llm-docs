> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularimage)

# CLKComplicationTemplateGraphicExtraLargeCircularImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularimage.md#3667238) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the image provider.](https://developer.apple.com/images/com.apple.clockkit/media-3667238@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 240 pixels | 240 pixels |
| 41 mm | 254 pixels | 254 pixels |
| 44 mm | 264 pixels | 264 pixels |
| 45 mm | 286 pixels | 286 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplategraphicextralargecircularimage/init%28imageprovider_%29.md): Deprecated. Creates a template with a circular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphicextralargecircularimage/imageprovider.md): Deprecated. The image to display.

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

- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md): Deprecated. A template for displaying a circular SwiftUI view.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackImage](clkcomplicationtemplategraphicextralargecircularstackimage.md): Deprecated. A template for displaying an extra-large, full-color circular image and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackText](clkcomplicationtemplategraphicextralargecircularstacktext.md): Deprecated. A template for displaying two rows of text in an extra-large, circular complication.

# CLKComplicationTemplateGraphicExtraLargeCircularImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large, full-color circular image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularImage : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularimage.md#3667238) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the image provider.](https://developer.apple.com/images/com.apple.clockkit/media-3667238@2x.png)

The table below lists the dimensions of the image you use in this template. Use @2x images for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 240 pixels | 240 pixels |
| 41 mm | 254 pixels | 254 pixels |
| 44 mm | 264 pixels | 264 pixels |
| 45 mm | 286 pixels | 286 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplategraphicextralargecircularimage/init%28imageprovider_%29.md): Deprecated. Creates a template with a circular image.
- [templateWithImageProvider:](clkcomplicationtemplategraphicextralargecircularimage/templatewithimageprovider_.md): Deprecated. Returns a template with a circular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphicextralargecircularimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicExtraLargeCircularStackImage](clkcomplicationtemplategraphicextralargecircularstackimage.md): Deprecated. A template for displaying an extra-large, full-color circular image and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackText](clkcomplicationtemplategraphicextralargecircularstacktext.md): Deprecated. A template for displaying two rows of text in an extra-large, circular complication.
