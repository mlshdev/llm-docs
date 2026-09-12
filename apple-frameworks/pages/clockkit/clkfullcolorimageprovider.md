> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkfullcolorimageprovider](https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider)

# CLKFullColorImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A full-color image displayed by a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKFullColorImageProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

All graphic complications support full-color images; however, some watch faces display these images as tinted images. Tinted images are black and white images with a highlight color that matches the watch face. If you don’t provide a tinted image provider, ClockKit automatically desaturates the full-color image to create the tinted image.

The template also often masks these image to produce circular images or rounded rectangles.

For information about the image sizes and masks, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## Topics

### Creating an Image Provider

- [init(fullColorImage:)](clkfullcolorimageprovider/init%28fullcolorimage_%29.md): Deprecated. Creates an image provider with the specified full-color image.
- [init(fullColorImage:tintedImageProvider:)](clkfullcolorimageprovider/init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.

### Getting the Image Data

- [image](clkfullcolorimageprovider/image.md): Deprecated. The full-color image to display.
- [tintedImageProvider](clkfullcolorimageprovider/tintedimageprovider.md): Deprecated. An image provider that produces alternative images for tinted graphic complications.

### Setting the Accessibility Label

- [accessibilityLabel](clkfullcolorimageprovider/accessibilitylabel.md): Deprecated. A succinct label that identifies the purpose of the image.

### Creating Empty Image Providers

- [init()](clkfullcolorimageprovider/init%28%29.md): Deprecated. Creates an empty full color image provider.
- [new()](clkfullcolorimageprovider/new%28%29.md): Deprecated. Creates an empty full color image provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image providers

- [CLKImageProvider](clkimageprovider.md): Deprecated. An image displayed by a complication.

# CLKFullColorImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A full-color image displayed by a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKFullColorImageProvider : NSObject
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

All graphic complications support full-color images; however, some watch faces display these images as tinted images. Tinted images are black and white images with a highlight color that matches the watch face. If you don’t provide a tinted image provider, ClockKit automatically desaturates the full-color image to create the tinted image.

The template also often masks these image to produce circular images or rounded rectangles.

For information about the image sizes and masks, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## Topics

### Creating an Image Provider

- [providerWithFullColorImage:](clkfullcolorimageprovider/init%28fullcolorimage_%29.md): Deprecated. Creates an image provider with the specified full-color image.
- [initWithFullColorImage:](clkfullcolorimageprovider/initwithfullcolorimage_.md): Deprecated. Creates an image provider with the specified full-color image.
- [providerWithFullColorImage:tintedImageProvider:](clkfullcolorimageprovider/init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.
- [initWithFullColorImage:tintedImageProvider:](clkfullcolorimageprovider/initwithfullcolorimage_tintedimageprovider_.md): Deprecated. Creates an image provider that produces full-color and tinted images.

### Getting the Image Data

- [image](clkfullcolorimageprovider/image.md): Deprecated. The full-color image to display.
- [tintedImageProvider](clkfullcolorimageprovider/tintedimageprovider.md): Deprecated. An image provider that produces alternative images for tinted graphic complications.

### Setting the Accessibility Label

- [accessibilityLabel](clkfullcolorimageprovider/accessibilitylabel.md): Deprecated. A succinct label that identifies the purpose of the image.

### Creating Empty Image Providers

- [init](clkfullcolorimageprovider/init%28%29.md): Deprecated. Creates an empty full color image provider.
- [new](clkfullcolorimageprovider/new%28%29.md): Deprecated. Creates an empty full color image provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Image providers

- [CLKImageProvider](clkimageprovider.md): Deprecated. An image displayed by a complication.
