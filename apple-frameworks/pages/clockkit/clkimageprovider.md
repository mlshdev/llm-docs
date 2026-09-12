> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider](https://developer.apple.com/documentation/clockkit/clkimageprovider)

# CLKImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An image displayed by a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKImageProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

You create an image provider with at least one image, and you may specify two additional images to use under certain conditions. The specified images are *template images*, with a color applied to them prior to display. The clock face displaying the complication determines how the images are composited together and which tint color is applied.

Every image provider must contain a *one-piece image*, composed of a single template image. In multicolor classic complications, ClockKit applies the color in the [tintColor](clkimageprovider/tintcolor.md) property to your template image and displays the results in your complication. If you don’t specify a value for the [tintColor](clkimageprovider/tintcolor.md) property, the image provider applies the tint color associated with the underlying template or white if the template doesn’t specify a color. In tinted graphic complications, ClockKit ignores the [tintColor](clkimageprovider/tintcolor.md) property, and applies the color associated with the watch face.

In addition to the one-piece image, you may optionally specify two additional images to composite together in order to create a single final image. A two-piece image consists of a foreground image layered on top of a background image. Both images are template images. For classic complications, ClockKit applies the color in the [tintColor](clkimageprovider/tintcolor.md) property to the background image, falling back to the color in the underlying template or white if the template doesn’t specify a color. For tinted graphic complications, the system determines the color according to the user’s color selection. In classic complications, two-piece images take priority over one-piece images. In tinted graphic complications, the system can choose either the one-piece or two-piece image, based on the complication and watch face.

For information about image sizes to use in different templates, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## Topics

### Creating an Image Provider

- [init(onePieceImage:)](clkimageprovider/init%28onepieceimage_%29.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [init(onePieceImage:twoPieceImageBackground:twoPieceImageForeground:)](clkimageprovider/init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.

### Getting the Image Data

- [onePieceImage](clkimageprovider/onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [tintColor](clkimageprovider/tintcolor.md): Deprecated. The tint color to apply to the image in a multicolor clock face.
- [twoPieceImageBackground](clkimageprovider/twopieceimagebackground.md): Deprecated. The background image in a two-piece image.
- [twoPieceImageForeground](clkimageprovider/twopieceimageforeground.md): Deprecated. The foreground image in a two-piece image.

### Setting the Accessibility Label

- [accessibilityLabel](clkimageprovider/accessibilitylabel.md): Deprecated. A succinct label that succinctly identifies the purpose of the image.

### Creating Empty Image Providers

- [new()](clkimageprovider/new%28%29.md): Deprecated. Creates an empty image provider.
- [init()](clkimageprovider/init%28%29.md): Deprecated. Creates an empty image provider.

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

- [CLKFullColorImageProvider](clkfullcolorimageprovider.md): Deprecated. A full-color image displayed by a complication.

# CLKImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An image displayed by a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKImageProvider : NSObject
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

You create an image provider with at least one image, and you may specify two additional images to use under certain conditions. The specified images are *template images*, with a color applied to them prior to display. The clock face displaying the complication determines how the images are composited together and which tint color is applied.

Every image provider must contain a *one-piece image*, composed of a single template image. In multicolor classic complications, ClockKit applies the color in the [tintColor](clkimageprovider/tintcolor.md) property to your template image and displays the results in your complication. If you don’t specify a value for the [tintColor](clkimageprovider/tintcolor.md) property, the image provider applies the tint color associated with the underlying template or white if the template doesn’t specify a color. In tinted graphic complications, ClockKit ignores the [tintColor](clkimageprovider/tintcolor.md) property, and applies the color associated with the watch face.

In addition to the one-piece image, you may optionally specify two additional images to composite together in order to create a single final image. A two-piece image consists of a foreground image layered on top of a background image. Both images are template images. For classic complications, ClockKit applies the color in the [tintColor](clkimageprovider/tintcolor.md) property to the background image, falling back to the color in the underlying template or white if the template doesn’t specify a color. For tinted graphic complications, the system determines the color according to the user’s color selection. In classic complications, two-piece images take priority over one-piece images. In tinted graphic complications, the system can choose either the one-piece or two-piece image, based on the complication and watch face.

For information about image sizes to use in different templates, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## Topics

### Creating an Image Provider

- [imageProviderWithOnePieceImage:](clkimageprovider/init%28onepieceimage_%29.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [initWithOnePieceImage:](clkimageprovider/initwithonepieceimage_.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [imageProviderWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](clkimageprovider/init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.
- [initWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](clkimageprovider/initwithonepieceimage_twopieceimagebackground_twopieceimageforeground_.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.

### Getting the Image Data

- [onePieceImage](clkimageprovider/onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [tintColor](clkimageprovider/tintcolor.md): Deprecated. The tint color to apply to the image in a multicolor clock face.
- [twoPieceImageBackground](clkimageprovider/twopieceimagebackground.md): Deprecated. The background image in a two-piece image.
- [twoPieceImageForeground](clkimageprovider/twopieceimageforeground.md): Deprecated. The foreground image in a two-piece image.

### Setting the Accessibility Label

- [accessibilityLabel](clkimageprovider/accessibilitylabel.md): Deprecated. A succinct label that succinctly identifies the purpose of the image.

### Creating Empty Image Providers

- [new](clkimageprovider/new%28%29.md): Deprecated. Creates an empty image provider.
- [init](clkimageprovider/init%28%29.md): Deprecated. Creates an empty image provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Image providers

- [CLKFullColorImageProvider](clkfullcolorimageprovider.md): Deprecated. A full-color image displayed by a complication.
