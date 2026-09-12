> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallstackimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallstackimage)

# CLKComplicationTemplateModularSmallStackImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image with a short line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularSmallStackImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md) family.

![Diagram showing the layout of a small image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933753@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 52 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 28 pixels |
| 40 mm | 58 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 30 pixels |
| 41 mm | 61 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 32 pixels |
| 42 mm | 58 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 30 pixels |
| 44 mm | 64 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 34 pixels |
| 45 mm | 69 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 36 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(line1ImageProvider:line2TextProvider:)](clkcomplicationtemplatemodularsmallstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplatemodularsmallstackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatemodularsmallstackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.
- [highlightLine2](clkcomplicationtemplatemodularsmallstackimage/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.

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

- [CLKComplicationTemplateModularSmallRingImage](clkcomplicationtemplatemodularsmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallSimpleImage](clkcomplicationtemplatemodularsmallsimpleimage.md): Deprecated. A template for displaying an image.

# CLKComplicationTemplateModularSmallStackImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image with a short line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularSmallStackImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md) family.

![Diagram showing the layout of a small image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933753@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 52 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 28 pixels |
| 40 mm | 58 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 30 pixels |
| 41 mm | 61 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 32 pixels |
| 42 mm | 58 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 30 pixels |
| 44 mm | 64 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 34 pixels |
| 45 mm | 69 pixels ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 36 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplatemodularsmallstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.
- [templateWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplatemodularsmallstackimage/templatewithline1imageprovider_line2textprovider_.md): Deprecated. Returns a new template from the provided image and text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplatemodularsmallstackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatemodularsmallstackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.
- [highlightLine2](clkcomplicationtemplatemodularsmallstackimage/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateModularSmallRingImage](clkcomplicationtemplatemodularsmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallSimpleImage](clkcomplicationtemplatemodularsmallsimpleimage.md): Deprecated. A template for displaying an image.
