> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallringimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallringimage)

# CLKComplicationTemplateCircularSmallRingImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image surrounded by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallRingImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of a circular small image complication. The diagram shows three versions, each with an image inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933734@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 40 pixels | 40 pixels |
| 40 mm | 44 pixels | 44 pixels |
| 41 mm | 47 pixels | 47 pixels |
| 42 mm | 44 pixels | 44 pixels |
| 44 mm | 48 pixels | 48 pixels |
| 45 mm | 52 pixels | 52 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:fillFraction:ringStyle:)](clkcomplicationtemplatecircularsmallringimage/init%28imageprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided image, fill fraction, and ring style.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatecircularsmallringimage/imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](clkcomplicationtemplatecircularsmallringimage/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatecircularsmallringimage/fillfraction.md): Deprecated. The fraction of the ring to fill.

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

- [CLKComplicationTemplateCircularSmallSimpleImage](clkcomplicationtemplatecircularsmallsimpleimage.md): Deprecated. A template for displaying a single image.
- [CLKComplicationTemplateCircularSmallStackImage](clkcomplicationtemplatecircularsmallstackimage.md): Deprecated. A template for displaying an image with a line of text below it.

# CLKComplicationTemplateCircularSmallRingImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image surrounded by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallRingImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of a circular small image complication. The diagram shows three versions, each with an image inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933734@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 40 pixels | 40 pixels |
| 40 mm | 44 pixels | 44 pixels |
| 41 mm | 47 pixels | 47 pixels |
| 42 mm | 44 pixels | 44 pixels |
| 44 mm | 48 pixels | 48 pixels |
| 45 mm | 52 pixels | 52 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:fillFraction:ringStyle:](clkcomplicationtemplatecircularsmallringimage/init%28imageprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided image, fill fraction, and ring style.
- [templateWithImageProvider:fillFraction:ringStyle:](clkcomplicationtemplatecircularsmallringimage/templatewithimageprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided image, fill fraction, and ring style.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatecircularsmallringimage/imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](clkcomplicationtemplatecircularsmallringimage/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatecircularsmallringimage/fillfraction.md): Deprecated. The fraction of the ring to fill.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateCircularSmallSimpleImage](clkcomplicationtemplatecircularsmallsimpleimage.md): Deprecated. A template for displaying a single image.
- [CLKComplicationTemplateCircularSmallStackImage](clkcomplicationtemplatecircularsmallstackimage.md): Deprecated. A template for displaying an image with a line of text below it.
