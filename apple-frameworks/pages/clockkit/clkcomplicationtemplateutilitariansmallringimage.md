> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitariansmallringimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallringimage)

# CLKComplicationTemplateUtilitarianSmallRingImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image encircled by a configurable progress ring

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateUtilitarianSmallRingImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.utilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small ring image complication. The diagram shows an image inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933760@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 28 pixels | 28 pixels |
| 40 mm | 28 pixels | 28 pixels |
| 41 mm | 30  pixels | 30 pixels |
| 42 mm | 28 pixels | 28 pixels |
| 44 mm | 32 pixels | 32 pixels |
| 45 mm | 33 pixels | 33 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:fillFraction:ringStyle:)](clkcomplicationtemplateutilitariansmallringimage/init%28imageprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided image, fill fraction, and ring style.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallringimage/imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](clkcomplicationtemplateutilitariansmallringimage/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplateutilitariansmallringimage/fillfraction.md): Deprecated. The fraction of the ring to fill.

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

- [CLKComplicationTemplateUtilitarianSmallFlat](clkcomplicationtemplateutilitariansmallflat.md): Deprecated. A template for displaying an image and text in a single line.
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateUtilitarianSmallSquare](clkcomplicationtemplateutilitariansmallsquare.md): Deprecated. A template for displaying a single square image.

# CLKComplicationTemplateUtilitarianSmallRingImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image encircled by a configurable progress ring

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateUtilitarianSmallRingImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyUtilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small ring image complication. The diagram shows an image inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933760@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 28 pixels | 28 pixels |
| 40 mm | 28 pixels | 28 pixels |
| 41 mm | 30  pixels | 30 pixels |
| 42 mm | 28 pixels | 28 pixels |
| 44 mm | 32 pixels | 32 pixels |
| 45 mm | 33 pixels | 33 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:fillFraction:ringStyle:](clkcomplicationtemplateutilitariansmallringimage/init%28imageprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided image, fill fraction, and ring style.
- [templateWithImageProvider:fillFraction:ringStyle:](clkcomplicationtemplateutilitariansmallringimage/templatewithimageprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided image, fill fraction, and ring style.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallringimage/imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](clkcomplicationtemplateutilitariansmallringimage/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplateutilitariansmallringimage/fillfraction.md): Deprecated. The fraction of the ring to fill.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Utilitarian small

- [CLKComplicationTemplateUtilitarianSmallFlat](clkcomplicationtemplateutilitariansmallflat.md): Deprecated. A template for displaying an image and text in a single line.
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateUtilitarianSmallSquare](clkcomplicationtemplateutilitariansmallsquare.md): Deprecated. A template for displaying a single square image.
