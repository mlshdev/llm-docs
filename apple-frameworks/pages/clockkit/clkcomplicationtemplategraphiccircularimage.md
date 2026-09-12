> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularimage)

# CLKComplicationTemplateGraphicCircularImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularimage.md#3030695) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of a circular image.](https://developer.apple.com/images/com.apple.clockkit/media-3030695@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 84 pixels | 84 pixels |
| 41 mm | 89 pixels | 89 pixels |
| 44 mm | 94 pixels | 94 pixels |
| 45 mm | 100 pixels | 100 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplategraphiccircularimage/init%28imageprovider_%29.md): Deprecated. Creates a template that has a circular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccircularimage/imageprovider.md): Deprecated. The image to display.

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

- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md): Deprecated. A template for displaying a circular view.
- [CLKComplicationTemplateGraphicCircularStackImage](clkcomplicationtemplategraphiccircularstackimage.md): Deprecated. A template for displaying a full-color circular image and text.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
- [CLKComplicationTemplateGraphicCircularStackText](clkcomplicationtemplategraphiccircularstacktext.md): Deprecated. A template for displaying two rows of text.

# CLKComplicationTemplateGraphicCircularImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a full-color circular image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularImage : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularimage.md#3030695) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of a circular image.](https://developer.apple.com/images/com.apple.clockkit/media-3030695@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 84 pixels | 84 pixels |
| 41 mm | 89 pixels | 89 pixels |
| 44 mm | 94 pixels | 94 pixels |
| 45 mm | 100 pixels | 100 pixels |

This template supports full-color images. The image provider automatically masks the image to a circle.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplategraphiccircularimage/init%28imageprovider_%29.md): Deprecated. Creates a template that has a circular image.
- [templateWithImageProvider:](clkcomplicationtemplategraphiccircularimage/templatewithimageprovider_.md): Deprecated. Returns a template that has a circular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphiccircularimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicCircularStackImage](clkcomplicationtemplategraphiccircularstackimage.md): Deprecated. A template for displaying a full-color circular image and text.
- [CLKComplicationTemplateGraphicCircularStackText](clkcomplicationtemplategraphiccircularstacktext.md): Deprecated. A template for displaying two rows of text.
