> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimagealphainfo](https://developer.apple.com/documentation/coregraphics/cgimagealphainfo)

# CGImageAlphaInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Storage options for alpha component data.

## Declaration

```swift
enum CGImageAlphaInfo
```

<a id="overview"></a>

## Overview

A [CGImageAlphaInfo](cgimagealphainfo.md) constant specifies (1) whether a bitmap contains an alpha channel, (2) where the alpha bits are located in the image data, and (3) whether the alpha value is premultiplied. You can obtain a [CGImageAlphaInfo](cgimagealphainfo.md) constant for an image by calling the [alphaInfo](cgimage/alphainfo.md) function. (You provide a [CGBitmapInfo](cgbitmapinfo.md) constant to the function [init(width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](cgimage/init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md), part of which is a [CGImageAlphaInfo](cgimagealphainfo.md) constant.)

Alpha blending is accomplished by combining the color components of the source image with the color components of the destination image using the linear interpolation formula, where “source” is one color component of one pixel of the new paint and “destination” is one color component of the background image.

Core Graphics supports premultiplied alpha only for images. You should not premultiply any other color values specified in Core Graphics.

## Topics

### Constants

- [CGImageAlphaInfo.first](cgimagealphainfo/first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [CGImageAlphaInfo.last](cgimagealphainfo/last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [CGImageAlphaInfo.none](cgimagealphainfo/none.md): There is no alpha channel.
- [CGImageAlphaInfo.noneSkipFirst](cgimagealphainfo/noneskipfirst.md): There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.
- [CGImageAlphaInfo.alphaOnly](cgimagealphainfo/alphaonly.md): There is no color data, only an alpha channel.
- [CGImageAlphaInfo.noneSkipLast](cgimagealphainfo/noneskiplast.md): There is no alpha channel.
- [CGImageAlphaInfo.premultipliedFirst](cgimagealphainfo/premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [CGImageAlphaInfo.premultipliedLast](cgimagealphainfo/premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.

### Initializers

- [init(rawValue:)](cgimagealphainfo/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Examining an image

- [isMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [width](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [height](cgimage/height.md): Returns the height of a bitmap image.
- [bitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [bitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [bytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [colorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [alphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [dataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [decode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [shouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [renderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [bitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [utType](cgimage/uttype.md): The Universal Type Identifier for the image.

# CGImageAlphaInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Storage options for alpha component data.

## Declaration

```objectivec
enum CGImageAlphaInfo : uint32_t;
```

<a id="overview"></a>

## Overview

A [CGImageAlphaInfo](cgimagealphainfo.md) constant specifies (1) whether a bitmap contains an alpha channel, (2) where the alpha bits are located in the image data, and (3) whether the alpha value is premultiplied. You can obtain a [CGImageAlphaInfo](cgimagealphainfo.md) constant for an image by calling the [CGImageGetAlphaInfo](cgimage/alphainfo.md) function. (You provide a [CGBitmapInfo](cgbitmapinfo.md) constant to the function [CGImageCreate](cgimage/init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md), part of which is a [CGImageAlphaInfo](cgimagealphainfo.md) constant.)

Alpha blending is accomplished by combining the color components of the source image with the color components of the destination image using the linear interpolation formula, where “source” is one color component of one pixel of the new paint and “destination” is one color component of the background image.

Core Graphics supports premultiplied alpha only for images. You should not premultiply any other color values specified in Core Graphics.

## Topics

### Constants

- [kCGImageAlphaFirst](cgimagealphainfo/first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [kCGImageAlphaLast](cgimagealphainfo/last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [kCGImageAlphaNone](cgimagealphainfo/none.md): There is no alpha channel.
- [kCGImageAlphaNoneSkipFirst](cgimagealphainfo/noneskipfirst.md): There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.
- [kCGImageAlphaOnly](cgimagealphainfo/alphaonly.md): There is no color data, only an alpha channel.
- [kCGImageAlphaNoneSkipLast](cgimagealphainfo/noneskiplast.md): There is no alpha channel.
- [kCGImageAlphaPremultipliedFirst](cgimagealphainfo/premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [kCGImageAlphaPremultipliedLast](cgimagealphainfo/premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.

## See Also

### Examining an image

- [CGImageIsMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [CGImageGetWidth](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [CGImageGetHeight](cgimage/height.md): Returns the height of a bitmap image.
- [CGImageGetBitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [CGImageGetBitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [CGImageGetBytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [CGImageGetColorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [CGImageGetAlphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageGetDataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [CGImageGetDecode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [CGImageGetShouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [CGImageGetRenderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGImageGetBitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](cgimage/uttype.md): The Universal Type Identifier for the image.
