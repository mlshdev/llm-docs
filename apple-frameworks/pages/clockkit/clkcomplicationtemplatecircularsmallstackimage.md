> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallstackimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallstackimage)

# CLKComplicationTemplateCircularSmallStackImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image with a line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallStackImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small stack image complication. The diagram shows a small image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933736@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 32 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 14 pixels |
| 40 mm | 34 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 16 pixels |
| 41 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 17 pixels |
| 42 mm | 34 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 16 pixels |
| 44 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 18 pixels |
| 45 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 19 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(line1ImageProvider:line2TextProvider:)](clkcomplicationtemplatecircularsmallstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplatecircularsmallstackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatecircularsmallstackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

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

- [CLKComplicationTemplateCircularSmallRingImage](clkcomplicationtemplatecircularsmallringimage.md): Deprecated. A template for displaying a single image surrounded by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallSimpleImage](clkcomplicationtemplatecircularsmallsimpleimage.md): Deprecated. A template for displaying a single image.

# CLKComplicationTemplateCircularSmallStackImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image with a line of text below it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallStackImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small stack image complication. The diagram shows a small image positioned above a short line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933736@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 32 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 14 pixels |
| 40 mm | 34 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 16 pixels |
| 41 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 17 pixels |
| 42 mm | 34 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 16 pixels |
| 44 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 18 pixels |
| 45 mm | 38 pixels maximum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) (You may specify images with a smaller width.) | 19 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplatecircularsmallstackimage/init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.
- [templateWithLine1ImageProvider:line2TextProvider:](clkcomplicationtemplatecircularsmallstackimage/templatewithline1imageprovider_line2textprovider_.md): Deprecated. Returns a new template from the provided image and text.

### Setting the Complication Data

- [line1ImageProvider](clkcomplicationtemplatecircularsmallstackimage/line1imageprovider.md): Deprecated. The image to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatecircularsmallstackimage/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateCircularSmallRingImage](clkcomplicationtemplatecircularsmallringimage.md): Deprecated. A template for displaying a single image surrounded by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallSimpleImage](clkcomplicationtemplatecircularsmallsimpleimage.md): Deprecated. A template for displaying a single image.
