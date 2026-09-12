> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/bitmapinfo](https://developer.apple.com/documentation/coregraphics/cgcontext/bitmapinfo)

# bitmapInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Obtains the bitmap information associated with a bitmap graphics context.

## Declaration

```swift
var bitmapInfo: CGBitmapInfo { get }
```

<a id="Discussion"></a>

## Discussion

The data returned by the function specifies whether the bitmap contains an alpha channel and how the alpha channel is generated, along with whether the components are floating-point or integer.

## See Also

### Managing a Bitmap Graphics Context

- [alphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [bitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [bytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [colorSpace](colorspace.md): Returns the color space of a bitmap context.
- [data](data.md): Returns a pointer to the image data associated with a bitmap context.
- [height](height.md): Returns the height in pixels of a bitmap context.
- [width](width.md): Returns the width in pixels of a bitmap context.
- [makeImage()](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.

# CGBitmapContextGetBitmapInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Obtains the bitmap information associated with a bitmap graphics context.

## Declaration

```objectivec
extern CGBitmapInfo CGBitmapContextGetBitmapInfo(CGContextRef context);
```

## Parameters

- `context`: A bitmap graphics context.

<a id="return-value"></a>

## Return Value

The bitmap info of the bitmap graphics context or `0` if `context` is not a bitmap graphics context. See [CGImageRef](../cgimage.md) for a description of the [CGBitmapInfo](../cgbitmapinfo.md) constants that can be returned.

<a id="Discussion"></a>

## Discussion

The data returned by the function specifies whether the bitmap contains an alpha channel and how the alpha channel is generated, along with whether the components are floating-point or integer.

## See Also

### Managing a Bitmap Graphics Context

- [CGBitmapContextGetAlphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [CGBitmapContextGetBitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [CGBitmapContextGetBitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [CGBitmapContextGetBytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [CGBitmapContextGetColorSpace](colorspace.md): Returns the color space of a bitmap context.
- [CGBitmapContextGetData](data.md): Returns a pointer to the image data associated with a bitmap context.
- [CGBitmapContextGetHeight](height.md): Returns the height in pixels of a bitmap context.
- [CGBitmapContextGetWidth](width.md): Returns the width in pixels of a bitmap context.
- [CGBitmapContextCreateImage](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.
