> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargestackimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargestackimage)

# CLKComplicationTemplateExtraLargeStackImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying a single image with a short line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeStackImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large stack image complication. The diagram shows an image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880768@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 156 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 84 pixels |
| 40 mm | 174 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 90 pixels |
| 41 mm | 192 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 95 pixels |
| 42 mm | 174 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 90 pixels |
| 44 mm | 192 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 102 pixels |
| 45 mm | 207 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 107 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(line1ImageProvider:line2TextProvider:)](clkcomplicationtemplateextralargestackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.

### Setting the Complication Data

- [highlightLine2](clkcomplicationtemplateextralargestackimage/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1ImageProvider](clkcomplicationtemplateextralargestackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplateextralargestackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

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

### Image templates

- [CLKComplicationTemplateExtraLargeRingImage](clkcomplicationtemplateextralargeringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleImage](clkcomplicationtemplateextralargesimpleimage.md): Deprecated. A template for displaying an image.

# CLKComplicationTemplateExtraLargeStackImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying a single image with a short line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeStackImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large stack image complication. The diagram shows an image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880768@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 156 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 84 pixels |
| 40 mm | 174 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 90 pixels |
| 41 mm | 192 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 95 pixels |
| 42 mm | 174 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 90 pixels |
| 44 mm | 192 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 102 pixels |
| 45 mm | 207 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 107 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplateextralargestackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.
- [templateWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplateextralargestackimage/templatewithline1imageprovider_line2textprovider_.md): Deprecated. Returns a new template from the provided image and text.

### Setting the Complication Data

- [highlightLine2](clkcomplicationtemplateextralargestackimage/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1ImageProvider](clkcomplicationtemplateextralargestackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplateextralargestackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateExtraLargeRingImage](clkcomplicationtemplateextralargeringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleImage](clkcomplicationtemplateextralargesimpleimage.md): Deprecated. A template for displaying an image.
