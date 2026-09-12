> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/height](https://developer.apple.com/documentation/coregraphics/cgcontext/height)

# height (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height in pixels of a bitmap context.

## Declaration

```swift
var height: Int { get }
```

## See Also

### Managing a Bitmap Graphics Context

- [bitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [alphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [bitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [bytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [colorSpace](colorspace.md): Returns the color space of a bitmap context.
- [data](data.md): Returns a pointer to the image data associated with a bitmap context.
- [width](width.md): Returns the width in pixels of a bitmap context.
- [makeImage()](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.

# CGBitmapContextGetHeight (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height in pixels of a bitmap context.

## Declaration

```objectivec
extern size_t CGBitmapContextGetHeight(CGContextRef context);
```

## Parameters

- `context`: The bitmap context to examine.

<a id="return-value"></a>

## Return Value

The height in pixels of the specified context, or `0` if the context is not a bitmap context.

## See Also

### Managing a Bitmap Graphics Context

- [CGBitmapContextGetBitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [CGBitmapContextGetAlphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [CGBitmapContextGetBitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [CGBitmapContextGetBitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [CGBitmapContextGetBytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [CGBitmapContextGetColorSpace](colorspace.md): Returns the color space of a bitmap context.
- [CGBitmapContextGetData](data.md): Returns a pointer to the image data associated with a bitmap context.
- [CGBitmapContextGetWidth](width.md): Returns the width in pixels of a bitmap context.
- [CGBitmapContextCreateImage](makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.
