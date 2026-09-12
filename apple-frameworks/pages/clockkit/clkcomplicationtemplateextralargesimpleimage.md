> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargesimpleimage](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargesimpleimage)

# CLKComplicationTemplateExtraLargeSimpleImage (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeSimpleImage
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large image complication. The diagram show a single, large image.](https://developer.apple.com/images/com.apple.clockkit/media-2880769@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 182 pixels | 182 pixels |
| 40 mm | 203 pixels | 203 pixels |
| 41 mm | 215 pixels | 215 pixels |
| 42 mm | 203 pixels | 203 pixels |
| 44 mm | 224 pixels | 224 pixels |
| 45 mm | 242 pixels | 242 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(imageProvider:)](clkcomplicationtemplateextralargesimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateextralargesimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

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
- [CLKComplicationTemplateExtraLargeStackImage](clkcomplicationtemplateextralargestackimage.md): Deprecated. A template for displaying a single image with a short line of text below it.

# CLKComplicationTemplateExtraLargeSimpleImage (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying an image.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeSimpleImage : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large image complication. The diagram show a single, large image.](https://developer.apple.com/images/com.apple.clockkit/media-2880769@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 182 pixels | 182 pixels |
| 40 mm | 203 pixels | 203 pixels |
| 41 mm | 215 pixels | 215 pixels |
| 42 mm | 203 pixels | 203 pixels |
| 44 mm | 224 pixels | 224 pixels |
| 45 mm | 242 pixels | 242 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithImageProvider:](clkcomplicationtemplateextralargesimpleimage/init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.
- [templateWithImageProvider:](clkcomplicationtemplateextralargesimpleimage/templatewithimageprovider_.md): Deprecated. Returns a new template from the provided image.

### Setting the Complication Data

- [imageProvider](clkcomplicationtemplateextralargesimpleimage/imageprovider.md): Deprecated. The image to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Image templates

- [CLKComplicationTemplateExtraLargeRingImage](clkcomplicationtemplateextralargeringimage.md): Deprecated. A template for displaying an image encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeStackImage](clkcomplicationtemplateextralargestackimage.md): Deprecated. A template for displaying a single image with a short line of text below it.
