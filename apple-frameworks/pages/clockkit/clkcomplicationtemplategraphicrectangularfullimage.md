> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularfullimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularfullimage)

# CLKComplicationTemplateGraphicRectangularFullImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a full-color image that fills the complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicRectangularFullImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family.

![A diagram of a graphic rectangular full complication. The diagram shows an image of the moon filling the complication.](https://developer.apple.com/images/com.apple.clockkit/media-3905732@2x.png)

The table below lists the dimensions of the image you use in this template. Use images with a [scale](../uikit/uiimage/scale.md) of `2.0` for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 324 pixels | 138 pixels |
| 41 mm | 343 pixels | 146 pixels |
| 44 mm | 368 pixels | 156 pixels |
| 45 mm | 386 pixels | 164 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplategraphicrectangularfullimage/init%28imageprovider_%29.md): Deprecated. Creates a template with a large rectangular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphicrectangularfullimage/imageprovider.md): Deprecated. The image to display.

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

- [CLKComplicationTemplateGraphicRectangularLargeImage](clkcomplicationtemplategraphicrectangularlargeimage.md): Deprecated. A template for displaying a large rectangle containing header text and an image.
- [CLKComplicationTemplateGraphicRectangularLargeView](clkcomplicationtemplategraphicrectangularlargeview.md): Deprecated. A template for displaying a large rectangle containing header text and a SwiftUI view.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.

# CLKComplicationTemplateGraphicRectangularFullImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a full-color image that fills the complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicRectangularFullImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicRectangular](clkcomplicationfamily/graphicrectangular.md) family.

![A diagram of a graphic rectangular full complication. The diagram shows an image of the moon filling the complication.](https://developer.apple.com/images/com.apple.clockkit/media-3905732@2x.png)

The table below lists the dimensions of the image you use in this template. Use images with a [scale](../uikit/uiimage/scale.md) of `2.0` for display on Apple Watch so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 324 pixels | 138 pixels |
| 41 mm | 343 pixels | 146 pixels |
| 44 mm | 368 pixels | 156 pixels |
| 45 mm | 386 pixels | 164 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplategraphicrectangularfullimage/init%28imageprovider_%29.md): Deprecated. Creates a template with a large rectangular image.
- [templateWithImageProvider:](clkcomplicationtemplategraphicrectangularfullimage/templatewithimageprovider_.md): Deprecated. Returns a template with a large rectangular image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplategraphicrectangularfullimage/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Large Images and Views

- [CLKComplicationTemplateGraphicRectangularLargeImage](clkcomplicationtemplategraphicrectangularlargeimage.md): Deprecated. A template for displaying a large rectangle containing header text and an image.
