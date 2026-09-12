> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitarianlargeflat](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitarianlargeflat)

# CLKComplicationTemplateUtilitarianLargeFlat (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image and string in a single long line.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateUtilitarianLargeFlat
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.utilitarianLarge](clkcomplicationfamily/utilitarianlarge.md) family.

![Diagram showing the layout of a row containing an image and text.](https://developer.apple.com/images/com.apple.clockkit/media-2933763@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of each image must be between the specified minimum and maximum (inclusive).

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

- [init(textProvider:)](clkcomplicationtemplateutilitarianlargeflat/init%28textprovider_%29.md): Deprecated. Creates a new template that has a long line of text.
- [init(textProvider:imageProvider:)](clkcomplicationtemplateutilitarianlargeflat/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a long line of text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplateutilitarianlargeflat/textprovider.md): Deprecated. The text to display.
- [imageProvider](clkcomplicationtemplateutilitarianlargeflat/imageprovider.md): Deprecated. The image to display.

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

# CLKComplicationTemplateUtilitarianLargeFlat (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image and string in a single long line.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateUtilitarianLargeFlat : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyUtilitarianLarge](clkcomplicationfamily/utilitarianlarge.md) family.

![Diagram showing the layout of a row containing an image and text.](https://developer.apple.com/images/com.apple.clockkit/media-2933763@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of each image must be between the specified minimum and maximum (inclusive).

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

- [initWithTextProvider:](clkcomplicationtemplateutilitarianlargeflat/init%28textprovider_%29.md): Deprecated. Creates a new template that has a long line of text.
- [initWithTextProvider:imageProvider:](clkcomplicationtemplateutilitarianlargeflat/init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a long line of text.
- [templateWithTextProvider:](clkcomplicationtemplateutilitarianlargeflat/templatewithtextprovider_.md): Deprecated. Returns a new template that has a long line of text.
- [templateWithTextProvider:imageProvider:](clkcomplicationtemplateutilitarianlargeflat/templatewithtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a single row with an image and a long line of text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplateutilitarianlargeflat/textprovider.md): Deprecated. The text to display.
- [imageProvider](clkcomplicationtemplateutilitarianlargeflat/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)
