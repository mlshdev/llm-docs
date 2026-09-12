> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/bitmapinfo](https://developer.apple.com/documentation/coregraphics/cgimage/bitmapinfo)

# bitmapInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bitmap information for a bitmap image.

## Declaration

```swift
var bitmapInfo: CGBitmapInfo { get }
```

<a id="Discussion"></a>

## Discussion

This function returns a constant that specifies:

- The type of bitmap data—floating point or integer. You use the constant [floatComponents](../cgbitmapinfo/floatcomponents.md) to extract this information.
- Whether an alpha channel is in the data, and if so, how the alpha data is stored. You use the constant [alphaInfoMask](../cgbitmapinfo/alphainfomask.md) to extract the alpha information. Alpha information is specified as one of the constants listed in [CGImageAlphaInfo](../cgimagealphainfo.md).

You can extract the alpha information

## See Also

### Examining an image

- [isMask](ismask.md): Returns whether a bitmap image is an image mask.
- [width](width.md): Returns the width of a bitmap image, in pixels.
- [height](height.md): Returns the height of a bitmap image.
- [bitsPerComponent](bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [bitsPerPixel](bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [bytesPerRow](bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [colorSpace](colorspace.md): Return the color space for a bitmap image.
- [alphaInfo](alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](../cgimagealphainfo.md): Storage options for alpha component data.
- [dataProvider](dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [decode](decode.md): Returns the decode array for a bitmap image.
- [shouldInterpolate](shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [renderingIntent](renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [utType](uttype.md): The Universal Type Identifier for the image.

# CGImageGetBitmapInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bitmap information for a bitmap image.

## Declaration

```objectivec
extern CGBitmapInfo CGImageGetBitmapInfo(CGImageRef image);
```

## Parameters

- `image`: An image.

<a id="return-value"></a>

## Return Value

The bitmap information associated with an image.

<a id="Discussion"></a>

## Discussion

This function returns a constant that specifies:

- The type of bitmap data—floating point or integer. You use the constant [kCGBitmapFloatComponents](../cgbitmapinfo/floatcomponents.md) to extract this information.
- Whether an alpha channel is in the data, and if so, how the alpha data is stored. You use the constant [alphaInfoMask](../cgbitmapinfo/alphainfomask.md) to extract the alpha information. Alpha information is specified as one of the constants listed in [CGImageAlphaInfo](../cgimagealphainfo.md).

You can extract the alpha information

## See Also

### Examining an image

- [CGImageIsMask](ismask.md): Returns whether a bitmap image is an image mask.
- [CGImageGetWidth](width.md): Returns the width of a bitmap image, in pixels.
- [CGImageGetHeight](height.md): Returns the height of a bitmap image.
- [CGImageGetBitsPerComponent](bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [CGImageGetBitsPerPixel](bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [CGImageGetBytesPerRow](bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [CGImageGetColorSpace](colorspace.md): Return the color space for a bitmap image.
- [CGImageGetAlphaInfo](alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](../cgimagealphainfo.md): Storage options for alpha component data.
- [CGImageGetDataProvider](dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [CGImageGetDecode](decode.md): Returns the decode array for a bitmap image.
- [CGImageGetShouldInterpolate](shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [CGImageGetRenderingIntent](renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](uttype.md): The Universal Type Identifier for the image.
