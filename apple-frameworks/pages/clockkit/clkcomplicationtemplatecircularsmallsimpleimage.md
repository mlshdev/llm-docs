> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallsimpleimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallsimpleimage)

# CLKComplicationTemplateCircularSmallSimpleImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallSimpleImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the small simple image complication. This diagram shows three examples, each displaying a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933735@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 32 pixels | 32 pixels |
| 40 mm | 36 pixels | 36 pixels |
| 41 mm | 38 pixels | 38 pixels |
| 42 mm | 36 pixels | 36 pixels |
| 44 mm | 40 pixels | 40 pixels |
| 45 mm | 43 pixels | 43 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplatecircularsmallsimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatecircularsmallsimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

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
- [CLKComplicationTemplateCircularSmallStackImage](clkcomplicationtemplatecircularsmallstackimage.md): Deprecated. A template for displaying an image with a line of text below it.

# CLKComplicationTemplateCircularSmallSimpleImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a single image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallSimpleImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the small simple image complication. This diagram shows three examples, each displaying a single, small image.](https://developer.apple.com/images/com.apple.clockkit/media-2933735@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 32 pixels | 32 pixels |
| 40 mm | 36 pixels | 36 pixels |
| 41 mm | 38 pixels | 38 pixels |
| 42 mm | 36 pixels | 36 pixels |
| 44 mm | 40 pixels | 40 pixels |
| 45 mm | 43 pixels | 43 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplatecircularsmallsimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.
- [templateWithImageProvider:](clkcomplicationtemplatecircularsmallsimpleimage/templatewithimageprovider_.md): Deprecated. Returns a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplatecircularsmallsimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateCircularSmallRingImage](clkcomplicationtemplatecircularsmallringimage.md): Deprecated. A template for displaying a single image surrounded by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallStackImage](clkcomplicationtemplatecircularsmallstackimage.md): Deprecated. A template for displaying an image with a line of text below it.
