> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/render(_:tobitmap:rowbytes:bounds:format:colorspace:)](https://developer.apple.com/documentation/coreimage/cicontext/render(_:tobitmap:rowbytes:bounds:format:colorspace:))

# render(\_:toBitmap:rowBytes:bounds:format:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Renders to the given bitmap.

## Declaration

```swift
func render(_ image: CIImage, toBitmap data: UnsafeMutableRawPointer, rowBytes: Int, bounds: CGRect, format: CIFormat, colorSpace: CGColorSpace?)
```

## Parameters

- `image`: A Core Image image object.
- `data`: Storage for the bitmap data.
- `rowBytes`: The bytes per row.
- `bounds`: The bounds of the bitmap data.
- `format`: The format of the bitmap data.
- `colorSpace`: The color space for the data. Pass `NULL` if you want to use the output color space of the context.

## See Also

### Rendering Images

- [createCGImage(\_:from:)](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage(\_:from:format:colorSpace:)](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage(\_:from:format:colorSpace:deferred:)](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render(\_:to:)](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render(\_:to:commandBuffer:bounds:colorSpace:)](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

# render:toBitmap:rowBytes:bounds:format:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Renders to the given bitmap.

## Declaration

```objectivec
- (void) render:(CIImage *) image toBitmap:(void *) data rowBytes:(ptrdiff_t) rowBytes bounds:(CGRect) bounds format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `image`: A Core Image image object.
- `data`: Storage for the bitmap data.
- `rowBytes`: The bytes per row.
- `bounds`: The bounds of the bitmap data.
- `format`: The format of the bitmap data.
- `colorSpace`: The color space for the data. Pass `NULL` if you want to use the output color space of the context.

## See Also

### Rendering Images

- [createCGImage:fromRect:](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage:fromRect:format:colorSpace:](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage:fromRect:format:colorSpace:deferred:](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render:toCVPixelBuffer:](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render:toCVPixelBuffer:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render:toIOSurface:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render:toMTLTexture:commandBuffer:bounds:colorSpace:](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.
