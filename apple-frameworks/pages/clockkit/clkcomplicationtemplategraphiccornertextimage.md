> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornertextimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextimage)

# CLKComplicationTemplateGraphicCornerTextImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying an image and text in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCornerTextImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornertextimage.md#3030694) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text and an image.](https://developer.apple.com/images/com.apple.clockkit/media-3030694@2x.png)

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

- [init(textProvider:imageProvider:)](clkcomplicationtemplategraphiccornertextimage/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a template with a line of text and an image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccornertextimage/imageprovider.md): Deprecated. The image to display.
- [textProvider](clkcomplicationtemplategraphiccornertextimage/textprovider.md): Deprecated. The text to display in the complication.

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

### Text and image

- [CLKComplicationTemplateGraphicCornerCircularImage](clkcomplicationtemplategraphiccornercircularimage.md): Deprecated. A template for displaying an image in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerCircularView](clkcomplicationtemplategraphiccornercircularview.md): Deprecated. A template for displaying a SwiftUI view in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerStackText](clkcomplicationtemplategraphiccornerstacktext.md): Deprecated. A template for displaying stacked text in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextView](clkcomplicationtemplategraphiccornertextview.md): Deprecated. A template for displaying a SwiftUI view and text in the clock face’s corner.

# CLKComplicationTemplateGraphicCornerTextImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying an image and text in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCornerTextImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornertextimage.md#3030694) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text and an image.](https://developer.apple.com/images/com.apple.clockkit/media-3030694@2x.png)

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

- [initWithTextProvider:imageProvider:](clkcomplicationtemplategraphiccornertextimage/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a template with a line of text and an image.
- [templateWithTextProvider:imageProvider:](clkcomplicationtemplategraphiccornertextimage/templatewithtextprovider_imageprovider_.md): Deprecated. Creates a template with a line of text and an image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccornertextimage/imageprovider.md): Deprecated. The image to display.
- [textProvider](clkcomplicationtemplategraphiccornertextimage/textprovider.md): Deprecated. The text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text and image

- [CLKComplicationTemplateGraphicCornerCircularImage](clkcomplicationtemplategraphiccornercircularimage.md): Deprecated. A template for displaying an image in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerStackText](clkcomplicationtemplategraphiccornerstacktext.md): Deprecated. A template for displaying stacked text in the clock face’s corner.
