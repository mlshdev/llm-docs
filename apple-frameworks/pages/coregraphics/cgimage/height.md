> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/height](https://developer.apple.com/documentation/coregraphics/cgimage/height)

# height (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height of a bitmap image.

## Declaration

```swift
var height: Int { get }
```

## See Also

### Examining an image

- [isMask](ismask.md): Returns whether a bitmap image is an image mask.
- [width](width.md): Returns the width of a bitmap image, in pixels.
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
- [bitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [utType](uttype.md): The Universal Type Identifier for the image.

# CGImageGetHeight (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height of a bitmap image.

## Declaration

```objectivec
extern size_t CGImageGetHeight(CGImageRef image);
```

## Parameters

- `image`: The image to examine.

<a id="return-value"></a>

## Return Value

The height in pixels of the bitmap image (or image mask).

## See Also

### Examining an image

- [CGImageIsMask](ismask.md): Returns whether a bitmap image is an image mask.
- [CGImageGetWidth](width.md): Returns the width of a bitmap image, in pixels.
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
- [CGImageGetBitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](uttype.md): The Universal Type Identifier for the image.
