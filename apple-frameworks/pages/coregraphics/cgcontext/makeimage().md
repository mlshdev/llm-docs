> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/makeimage()](https://developer.apple.com/documentation/coregraphics/cgcontext/makeimage())

# makeImage() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a CGImage from the pixel data in a bitmap graphics context.

## Declaration

```swift
func makeImage() -> CGImage?
```

<a id="return-value"></a>

## Return Value

A CGImage object that contains a snapshot of the bitmap graphics context or `NULL` if the image is not created.

<a id="Discussion"></a>

## Discussion

The CGImage object returned by this function is created by a copy operation. Subsequent changes to the bitmap graphics context do not affect the contents of the returned image. In some cases the copy operation actually follows copy-on-write semantics, so that the actual physical copy of the bits occur only if the underlying data in the bitmap graphics context is modified. As a consequence, you may want to use the resulting image and release it before you perform additional drawing into the bitmap graphics context. In this way, you can avoid the actual physical copy of the data.

## See Also

### Managing a Bitmap Graphics Context

- [bitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [alphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [bitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [bytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [colorSpace](colorspace.md): Returns the color space of a bitmap context.
- [data](data.md): Returns a pointer to the image data associated with a bitmap context.
- [height](height.md): Returns the height in pixels of a bitmap context.
- [width](width.md): Returns the width in pixels of a bitmap context.

# CGBitmapContextCreateImage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a CGImage from the pixel data in a bitmap graphics context.

## Declaration

```objectivec
extern CGImageRefCGBitmapContextCreateImage(CGContextRef context);
```

## Parameters

- `context`: A bitmap graphics context.

<a id="return-value"></a>

## Return Value

A CGImage object that contains a snapshot of the bitmap graphics context or `NULL` if the image is not created.

<a id="Discussion"></a>

## Discussion

The CGImage object returned by this function is created by a copy operation. Subsequent changes to the bitmap graphics context do not affect the contents of the returned image. In some cases the copy operation actually follows copy-on-write semantics, so that the actual physical copy of the bits occur only if the underlying data in the bitmap graphics context is modified. As a consequence, you may want to use the resulting image and release it before you perform additional drawing into the bitmap graphics context. In this way, you can avoid the actual physical copy of the data.

## See Also

### Managing a Bitmap Graphics Context

- [CGBitmapContextGetBitmapInfo](bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [CGBitmapContextGetAlphaInfo](alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [CGBitmapContextGetBitsPerComponent](bitspercomponent.md): Returns the bits per component of a bitmap context.
- [CGBitmapContextGetBitsPerPixel](bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [CGBitmapContextGetBytesPerRow](bytesperrow.md): Returns the bytes per row of a bitmap context.
- [CGBitmapContextGetColorSpace](colorspace.md): Returns the color space of a bitmap context.
- [CGBitmapContextGetData](data.md): Returns a pointer to the image data associated with a bitmap context.
- [CGBitmapContextGetHeight](height.md): Returns the height in pixels of a bitmap context.
- [CGBitmapContextGetWidth](width.md): Returns the width in pixels of a bitmap context.
