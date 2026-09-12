> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitariansmallflat](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallflat)

# CLKComplicationTemplateUtilitarianSmallFlat (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image and text in a single line.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateUtilitarianSmallFlat
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.utilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small flat complication. The diagram shows a single row containing an image and a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933759@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 18 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 42 pixels maximum | 18 pixels |
| 40 mm | 20 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 44 pixels maximum | 20 pixels |
| 41 mm | 21 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 47 pixels maximum | 21 pixels |
| 42 mm | 20 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 44 pixels maximum | 20 pixels |
| 44 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 49 pixels maximum | 22 pixels |
| 45 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 52 pixels maximum | 24 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(textProvider:)](clkcomplicationtemplateutilitariansmallflat/init%28textprovider_%29.md): Deprecated. Creates a new template that has a single line of text.
- [init(textProvider:imageProvider:)](clkcomplicationtemplateutilitariansmallflat/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a line of text.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallflat/imageprovider.md): Deprecated. The image to display.
- [textProvider](clkcomplicationtemplateutilitariansmallflat/textprovider.md): Deprecated. The text to display.

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

### Utilitarian small

- [CLKComplicationTemplateUtilitarianSmallRingImage](clkcomplicationtemplateutilitariansmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateUtilitarianSmallSquare](clkcomplicationtemplateutilitariansmallsquare.md): Deprecated. A template for displaying a single square image.

# CLKComplicationTemplateUtilitarianSmallFlat (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image and text in a single line.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateUtilitarianSmallFlat : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyUtilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small flat complication. The diagram shows a single row containing an image and a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933759@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 18 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 42 pixels maximum | 18 pixels |
| 40 mm | 20 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 44 pixels maximum | 20 pixels |
| 41 mm | 21 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 47 pixels maximum | 21 pixels |
| 42 mm | 20 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 44 pixels maximum | 20 pixels |
| 44 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 49 pixels maximum | 22 pixels |
| 45 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 52 pixels maximum | 24 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithTextProvider:](clkcomplicationtemplateutilitariansmallflat/init%28textprovider_%29.md): Deprecated. Creates a new template that has a single line of text.
- [initWithTextProvider:imageProvider:](clkcomplicationtemplateutilitariansmallflat/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a line of text.
- [templateWithTextProvider:](clkcomplicationtemplateutilitariansmallflat/templatewithtextprovider_.md): Deprecated. Returns a new template that has a single line of text.
- [templateWithTextProvider:imageProvider:](clkcomplicationtemplateutilitariansmallflat/templatewithtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a single row with an image and a line of text.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallflat/imageprovider.md): Deprecated. The image to display.
- [textProvider](clkcomplicationtemplateutilitariansmallflat/textprovider.md): Deprecated. The text to display.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Utilitarian small

- [CLKComplicationTemplateUtilitarianSmallRingImage](clkcomplicationtemplateutilitariansmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateUtilitarianSmallSquare](clkcomplicationtemplateutilitariansmallsquare.md): Deprecated. A template for displaying a single square image.
