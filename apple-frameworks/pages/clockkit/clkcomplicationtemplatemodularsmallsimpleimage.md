> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallsimpleimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallsimpleimage)

# CLKComplicationTemplateModularSmallSimpleImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularSmallSimpleImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small simple image complication. The diagram shows a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933752@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch size | Width | Height |
| --- | --- | --- |
| 38 mm | 52 pixels | 52 pixels |
| 40 mm | 58 pixels | 58 pixels |
| 41 mm | 61 pixels | 61 pixels |
| 42 mm | 58 pixels | 58 pixels |
| 44 mm | 64 pixels | 64 pixels |
| 45 mm | 69 pixels | 69 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplatemodularsmallsimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatemodularsmallsimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

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
- [CLKComplicationTemplateModularSmallStackImage](clkcomplicationtemplatemodularsmallstackimage.md): Deprecated. A template for displaying a single image with a short line of text below it.

# CLKComplicationTemplateModularSmallSimpleImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularSmallSimpleImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small simple image complication. The diagram shows a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933752@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch size | Width | Height |
| --- | --- | --- |
| 38 mm | 52 pixels | 52 pixels |
| 40 mm | 58 pixels | 58 pixels |
| 41 mm | 61 pixels | 61 pixels |
| 42 mm | 58 pixels | 58 pixels |
| 44 mm | 64 pixels | 64 pixels |
| 45 mm | 69 pixels | 69 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplatemodularsmallsimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.
- [templateWithImageProvider:](clkcomplicationtemplatemodularsmallsimpleimage/templatewithimageprovider_.md): Deprecated. Returns a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatemodularsmallsimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateModularSmallRingImage](clkcomplicationtemplatemodularsmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallStackImage](clkcomplicationtemplatemodularsmallstackimage.md): Deprecated. A template for displaying a single image with a short line of text below it.
