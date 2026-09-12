> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/decode](https://developer.apple.com/documentation/coregraphics/cgimage/decode)

# decode (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the decode array for a bitmap image.

## Declaration

```swift
var decode: UnsafePointer<CGFloat>? { get }
```

<a id="Discussion"></a>

## Discussion

For a bitmap image or image mask, for each color component in the source color space, the decode array contains a pair of values denoting the upper and lower limits of a range. When the image is rendered, a linear transform maps the original component value into a relative number, within the designated range, that is appropriate for the destination color space. If remapping of the image’s color values is not allowed, the returned value will be `NULL`.

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
- [shouldInterpolate](shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [renderingIntent](renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [bitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [utType](uttype.md): The Universal Type Identifier for the image.

# CGImageGetDecode (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the decode array for a bitmap image.

## Declaration

```objectivec
extern const CGFloat *CGImageGetDecode(CGImageRef image);
```

## Parameters

- `image`: The image to examine.

<a id="return-value"></a>

## Return Value

The decode array for a bitmap image (or image mask). See the discussion for a description of possible return values.

<a id="Discussion"></a>

## Discussion

For a bitmap image or image mask, for each color component in the source color space, the decode array contains a pair of values denoting the upper and lower limits of a range. When the image is rendered, a linear transform maps the original component value into a relative number, within the designated range, that is appropriate for the destination color space. If remapping of the image’s color values is not allowed, the returned value will be `NULL`.

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
- [CGImageGetShouldInterpolate](shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [CGImageGetRenderingIntent](renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGImageGetBitmapInfo](bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](../cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](uttype.md): The Universal Type Identifier for the image.
