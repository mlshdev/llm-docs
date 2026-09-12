> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/render(_:to:bounds:colorspace:)-2k8l2](https://developer.apple.com/documentation/coreimage/cicontext/render(_:to:bounds:colorspace:)-2k8l2)

# render(\_:to:bounds:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Renders a region of an image into a pixel buffer.

## Declaration

```swift
func render(_ image: CIImage, to buffer: CVPixelBuffer, bounds: CGRect, colorSpace: CGColorSpace?)
```

## Parameters

- `image`: A Core Image image object.
- `buffer`: The destination pixel buffer.
- `bounds`: The rectangle in the destination pixel buffer to draw into.
- `colorSpace`: The color space of the destination pixel buffer.

## See Also

### Rendering Images

- [createCGImage(\_:from:)](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage(\_:from:format:colorSpace:)](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage(\_:from:format:colorSpace:deferred:)](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render(\_:toBitmap:rowBytes:bounds:format:colorSpace:)](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render(\_:to:)](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render(\_:to:commandBuffer:bounds:colorSpace:)](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

# render:toCVPixelBuffer:bounds:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Renders a region of an image into a pixel buffer.

## Declaration

```objectivec
- (void) render:(CIImage *) image toCVPixelBuffer:(CVPixelBufferRef) buffer bounds:(CGRect) bounds colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `image`: A Core Image image object.
- `buffer`: The destination pixel buffer.
- `bounds`: The rectangle in the destination pixel buffer to draw into.
- `colorSpace`: The color space of the destination pixel buffer.

## See Also

### Rendering Images

- [createCGImage:fromRect:](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage:fromRect:format:colorSpace:](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage:fromRect:format:colorSpace:deferred:](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render:toBitmap:rowBytes:bounds:format:colorSpace:](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render:toCVPixelBuffer:](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render:toIOSurface:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render:toMTLTexture:commandBuffer:bounds:colorSpace:](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.
