> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeimage)

# CLKComplicationTemplateGraphicRectangularLargeImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a large rectangle containing header text and an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicRectangularLargeImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangularlargeimage.md#3034025) shows the layout of the image and where the template might appear on the clock face.

![Diagram of a watch face showing the layout of a rectangular large image template.](https://developer.apple.com/images/com.apple.clockkit/media-3034025@2x.png)

The table below lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 300 pixels | 94 pixels |
| 41 mm | 318 pixels | 100 pixels |
| 44 mm | 342 pixels | 108 pixels |
| 45 mm | 357 pixels | 112 pixels |

This template supports full-color images. The image provider automatically masks the image to a rounded rectangle with a 8-pixel corner radius.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(textProvider:imageProvider:)](clkcomplicationtemplategraphicrectangularlargeimage/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template with a text provider and an image provider.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplategraphicrectangularlargeimage/textprovider.md): Deprecated. The header text to display in the complication.
- [imageProvider](clkcomplicationtemplategraphicrectangularlargeimage/imageprovider.md): Deprecated. The image to display.

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

### Large Images and Views

- [CLKComplicationTemplateGraphicRectangularLargeView](clkcomplicationtemplategraphicrectangularlargeview.md): Deprecated. A template for displaying a large rectangle containing header text and a SwiftUI view.
- [CLKComplicationTemplateGraphicRectangularFullImage](clkcomplicationtemplategraphicrectangularfullimage.md): Deprecated. A template for displaying a full-color image that fills the complication.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.

# CLKComplicationTemplateGraphicRectangularLargeImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a large rectangle containing header text and an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicRectangularLargeImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangularlargeimage.md#3034025) shows the layout of the image and where the template might appear on the clock face.

![Diagram of a watch face showing the layout of a rectangular large image template.](https://developer.apple.com/images/com.apple.clockkit/media-3034025@2x.png)

The table below lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 300 pixels | 94 pixels |
| 41 mm | 318 pixels | 100 pixels |
| 44 mm | 342 pixels | 108 pixels |
| 45 mm | 357 pixels | 112 pixels |

This template supports full-color images. The image provider automatically masks the image to a rounded rectangle with a 8-pixel corner radius.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithTextProvider:imageProvider:](clkcomplicationtemplategraphicrectangularlargeimage/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template with a text provider and an image provider.
- [templateWithTextProvider:imageProvider:](clkcomplicationtemplategraphicrectangularlargeimage/templatewithtextprovider_imageprovider_.md): Deprecated. Creates a new template with a text provider and an image provider.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplategraphicrectangularlargeimage/textprovider.md): Deprecated. The header text to display in the complication.
- [imageProvider](clkcomplicationtemplategraphicrectangularlargeimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Large Images and Views

- [CLKComplicationTemplateGraphicRectangularFullImage](clkcomplicationtemplategraphicrectangularfullimage.md): Deprecated. A template for displaying a full-color image that fills the complication.
