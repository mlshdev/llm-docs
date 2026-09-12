> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/renderingintent](https://developer.apple.com/documentation/coregraphics/cgimage/renderingintent)

# renderingIntent (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the rendering intent setting for a bitmap image.

## Declaration

```swift
var renderingIntent: CGColorRenderingIntent { get }
```

<a id="discussion"></a>

## Discussion

Provides the `CGColorRenderingIntent` constant that specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context in which the image is drawn. If the image is an image mask, this function returns [CGColorRenderingIntent.defaultIntent](../cgcolorrenderingintent/defaultintent.md).

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
- [bitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [utType](uttype.md): The Universal Type Identifier for the image.

# CGImageGetRenderingIntent (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the rendering intent setting for a bitmap image.

## Declaration

```objectivec
extern CGColorRenderingIntent CGImageGetRenderingIntent(CGImageRef image);
```

## Parameters

- `image`: The image to examine.

<a id="discussion"></a>

## Discussion

Provides the `CGColorRenderingIntent` constant that specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context in which the image is drawn. If the image is an image mask, this function returns [kCGRenderingIntentDefault](../cgcolorrenderingintent/defaultintent.md).

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
- [CGImageGetBitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](uttype.md): The Universal Type Identifier for the image.
