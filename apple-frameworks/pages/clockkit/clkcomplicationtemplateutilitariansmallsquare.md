> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitariansmallsquare](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallsquare)

# CLKComplicationTemplateUtilitarianSmallSquare (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single square image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateUtilitarianSmallSquare
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.utilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small square complication. The diagram shows a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933762@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 40 pixels | 40 pixels |
| 40 mm | 44 pixels | 44 pixels |
| 41 mm | 47 pixels | 47 pixels |
| 42 mm | 44 pixels | 44 pixels |
| 44 mm | 50 pixels | 50 pixels |
| 45 mm | 52 pixels | 52 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplateutilitariansmallsquare/init%28imageprovider_%29.md): Deprecated. Creates a new template that has a square image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallsquare/imageprovider.md): Deprecated. The image to display.

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
- [CLKComplicationTemplateUtilitarianSmallRingImage](clkcomplicationtemplateutilitariansmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.

# CLKComplicationTemplateUtilitarianSmallSquare (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single square image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateUtilitarianSmallSquare : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyUtilitarianSmall](clkcomplicationfamily/utilitariansmall.md) family.

![A diagram showing the layout of the utilitarian small square complication. The diagram shows a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933762@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 40 pixels | 40 pixels |
| 40 mm | 44 pixels | 44 pixels |
| 41 mm | 47 pixels | 47 pixels |
| 42 mm | 44 pixels | 44 pixels |
| 44 mm | 50 pixels | 50 pixels |
| 45 mm | 52 pixels | 52 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplateutilitariansmallsquare/init%28imageprovider_%29.md): Deprecated. Creates a new template that has a square image.
- [templateWithImageProvider:](clkcomplicationtemplateutilitariansmallsquare/templatewithimageprovider_.md): Deprecated. Returns a new template that has a square image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateutilitariansmallsquare/imageprovider.md): Deprecated. The image to display.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Utilitarian small

- [CLKComplicationTemplateUtilitarianSmallFlat](clkcomplicationtemplateutilitariansmallflat.md): Deprecated. A template for displaying an image and text in a single line.
- [CLKComplicationTemplateUtilitarianSmallRingImage](clkcomplicationtemplateutilitariansmallringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring
- [CLKComplicationTemplateUtilitarianSmallRingText](clkcomplicationtemplateutilitariansmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
