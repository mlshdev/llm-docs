> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/alphainfo](https://developer.apple.com/documentation/coregraphics/cgcontext/alphainfo)

# alphaInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.

## Declaration

```swift
var alphaInfo: CGImageAlphaInfo { get }
```

<a id="Discussion"></a>

## Discussion

Every bitmap context contains an attribute that specifies whether the bitmap contains an alpha component, and how it is generated. The alpha component determines the opacity of a pixel when it is drawn.

## See Also

### Managing a Bitmap Graphics Context

- [bitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [bitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [bytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [colorSpace](colorspace.md): Returns the color space of a bitmap context.
- [data](data.md): Returns a pointer to the image data associated with a bitmap context.
- [height](height.md): Returns the height in pixels of a bitmap context.
- [width](width.md): Returns the width in pixels of a bitmap context.
- [makeImage()](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.

# CGBitmapContextGetAlphaInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.

## Declaration

```objectivec
extern CGImageAlphaInfo CGBitmapContextGetAlphaInfo(CGContextRef context);
```

## Parameters

- `context`: A bitmap context.

<a id="return-value"></a>

## Return Value

A bitmap information constant. If the specified context is not a bitmap context, [kCGImageAlphaNone](../cgimagealphainfo/none.md) is returned.

<a id="Discussion"></a>

## Discussion

Every bitmap context contains an attribute that specifies whether the bitmap contains an alpha component, and how it is generated. The alpha component determines the opacity of a pixel when it is drawn.

## See Also

### Managing a Bitmap Graphics Context

- [CGBitmapContextGetBitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [CGBitmapContextGetBitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [CGBitmapContextGetBitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [CGBitmapContextGetBytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [CGBitmapContextGetColorSpace](colorspace.md): Returns the color space of a bitmap context.
- [CGBitmapContextGetData](data.md): Returns a pointer to the image data associated with a bitmap context.
- [CGBitmapContextGetHeight](height.md): Returns the height in pixels of a bitmap context.
- [CGBitmapContextGetWidth](width.md): Returns the width in pixels of a bitmap context.
- [CGBitmapContextCreateImage](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.
