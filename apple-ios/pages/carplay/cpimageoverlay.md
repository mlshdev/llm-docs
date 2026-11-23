> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay

# CPImageOverlay (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A type that manages content you layer on top of a thumbnail image.

## Declaration

```swift
@MainActor class CPImageOverlay
```

<a id="overview"></a>

## Overview

Use a `CPImageOverlay` object to place text or a small image on top of the main image in a [CPThumbnailImage](cpthumbnailimage.md) object. Add text content when you want to display a badge on one of the thumbnail images you display in a list interface. Add an image to display an icon or other indicator on top of the thumbnail image instead. Because overlay content is separate from the thumbnail image, you can update it periodically. For example, you might update the badge value when someone reads some messages or plays some songs.

You can add a `CPImageOverlay` object to a thumbnail image at creation time or any time later. Configure the content for the overlay and specify how you want to align the content. Overlays appear inside the top edge of the thumbnail image and with the alignment you specify.

## Topics

### Creating an image overlay

- [init(image:alignment:)](cpimageoverlay/init%28image_alignment_%29.md): Creates an overlay that displays an image.
- [init(text:textColor:backgroundColor:alignment:)](cpimageoverlay/init%28text_textcolor_backgroundcolor_alignment_%29.md): Creates an overlay that displays text in a colored badge.
- [init(coder:)](cpimageoverlay/init%28coder_%29.md)

### Getting the overlay details

- [image](cpimageoverlay/image.md): The image to display at top of the thumbnail.
- [text](cpimageoverlay/text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](cpimageoverlay/textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](cpimageoverlay/backgroundcolor.md): The color to display behind the badge’s text.

### Getting the overlay position

- [alignment](cpimageoverlay/alignment-swift.property.md): The alignment of the overlay inside the top edge of the thumbnail.
- [CPImageOverlay.Alignment](cpimageoverlay/alignment-swift.enum.md): Constants that specify the placement of overlay images in a thumbnail.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Element overlays

- [CPSportsOverlay](cpsportsoverlay.md): A type that displays sporting event details on top of a thumbnail image.

# CPImageOverlay (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A type that manages content you layer on top of a thumbnail image.

## Declaration

```objectivec
@interface CPImageOverlay : NSObject
```

<a id="overview"></a>

## Overview

Use a `CPImageOverlay` object to place text or a small image on top of the main image in a [CPThumbnailImage](cpthumbnailimage.md) object. Add text content when you want to display a badge on one of the thumbnail images you display in a list interface. Add an image to display an icon or other indicator on top of the thumbnail image instead. Because overlay content is separate from the thumbnail image, you can update it periodically. For example, you might update the badge value when someone reads some messages or plays some songs.

You can add a `CPImageOverlay` object to a thumbnail image at creation time or any time later. Configure the content for the overlay and specify how you want to align the content. Overlays appear inside the top edge of the thumbnail image and with the alignment you specify.

## Topics

### Creating an image overlay

- [initWithImage:alignment:](cpimageoverlay/init%28image_alignment_%29.md): Creates an overlay that displays an image.
- [initWithText:textColor:backgroundColor:alignment:](cpimageoverlay/init%28text_textcolor_backgroundcolor_alignment_%29.md): Creates an overlay that displays text in a colored badge.

### Getting the overlay details

- [image](cpimageoverlay/image.md): The image to display at top of the thumbnail.
- [text](cpimageoverlay/text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](cpimageoverlay/textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](cpimageoverlay/backgroundcolor.md): The color to display behind the badge’s text.

### Getting the overlay position

- [alignment](cpimageoverlay/alignment-swift.property.md): The alignment of the overlay inside the top edge of the thumbnail.
- [CPImageOverlayAlignment](cpimageoverlay/alignment-swift.enum.md): Constants that specify the placement of overlay images in a thumbnail.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Element overlays

- [CPSportsOverlay](cpsportsoverlay.md): A type that displays sporting event details on top of a thumbnail image.
