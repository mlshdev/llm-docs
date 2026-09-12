> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularstackimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularstackimage)

# CLKComplicationTemplateGraphicCircularStackImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

A template for displaying a full-color circular image and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularStackImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family.

![Diagram showing the layout of a circular template containing an image and text.](https://developer.apple.com/images/com.apple.clockkit/media-3262157@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 56 pixels | 28 pixels |
| 41 mm | 59 pixels | 30 pixels |
| 44 mm | 62 pixels | 32 pixels |
| 45 mm | 67 pixels | 33 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(line1ImageProvider:line2TextProvider:)](clkcomplicationtemplategraphiccircularstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a template that has an image and a small amount of text.

### Setting the Complicaiton Data

- [line1ImageProvider](clkcomplicationtemplategraphiccircularstackimage/line1imageprovider.md): Deprecated. The image to display.
- [line2TextProvider](clkcomplicationtemplategraphiccircularstackimage/line2textprovider.md): Deprecated. The text to display below the image.

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

### Text and images

- [CLKComplicationTemplateGraphicCircularImage](clkcomplicationtemplategraphiccircularimage.md): Deprecated. A template for displaying a full-color circular image.
- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md): Deprecated. A template for displaying a circular view.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
- [CLKComplicationTemplateGraphicCircularStackText](clkcomplicationtemplategraphiccircularstacktext.md): Deprecated. A template for displaying two rows of text.

# CLKComplicationTemplateGraphicCircularStackImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

A template for displaying a full-color circular image and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularStackImage : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family.

![Diagram showing the layout of a circular template containing an image and text.](https://developer.apple.com/images/com.apple.clockkit/media-3262157@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 56 pixels | 28 pixels |
| 41 mm | 59 pixels | 30 pixels |
| 44 mm | 62 pixels | 32 pixels |
| 45 mm | 67 pixels | 33 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplategraphiccircularstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a template that has an image and a small amount of text.
- [templateWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplategraphiccircularstackimage/templatewithline1imageprovider_line2textprovider_.md): Deprecated. Returns a template that has an image and a small amount of text.

### Setting the Complicaiton Data

- [line1ImageProvider](clkcomplicationtemplategraphiccircularstackimage/line1imageprovider.md): Deprecated. The image to display.
- [line2TextProvider](clkcomplicationtemplategraphiccircularstackimage/line2textprovider.md): Deprecated. The text to display below the image.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicCircularImage](clkcomplicationtemplategraphiccircularimage.md): Deprecated. A template for displaying a full-color circular image.
- [CLKComplicationTemplateGraphicCircularStackText](clkcomplicationtemplategraphiccircularstacktext.md): Deprecated. A template for displaying two rows of text.
