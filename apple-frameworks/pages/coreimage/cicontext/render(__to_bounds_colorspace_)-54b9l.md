> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/render(_:to:bounds:colorspace:)-54b9l](https://developer.apple.com/documentation/coreimage/cicontext/render(_:to:bounds:colorspace:)-54b9l)

# render(\_:to:bounds:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+

Renders a region of an image into an IOSurface object.

## Declaration

```swift
func render(_ image: CIImage, to surface: IOSurfaceRef, bounds: CGRect, colorSpace: CGColorSpace?)
```

## Parameters

- `image`: A Core Image image object.
- `surface`: The destination IOSurface object.
- `bounds`: The rectangle in the destination IOSurface object to draw into.
- `colorSpace`: The color space of the destination IOSurface object.

## See Also

### Rendering Images

- [createCGImage(\_:from:)](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage(\_:from:format:colorSpace:)](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage(\_:from:format:colorSpace:deferred:)](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render(\_:toBitmap:rowBytes:bounds:format:colorSpace:)](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render(\_:to:)](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render(\_:to:commandBuffer:bounds:colorSpace:)](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

# render:toIOSurface:bounds:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+

Renders a region of an image into an IOSurface object.

## Declaration

```objectivec
- (void) render:(CIImage *) image toIOSurface:(IOSurfaceRef) surface bounds:(CGRect) bounds colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `image`: A Core Image image object.
- `surface`: The destination IOSurface object.
- `bounds`: The rectangle in the destination IOSurface object to draw into.
- `colorSpace`: The color space of the destination IOSurface object.

## See Also

### Rendering Images

- [createCGImage:fromRect:](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage:fromRect:format:colorSpace:](createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage:fromRect:format:colorSpace:deferred:](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render:toBitmap:rowBytes:bounds:format:colorSpace:](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render:toCVPixelBuffer:](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render:toCVPixelBuffer:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render:toMTLTexture:commandBuffer:bounds:colorSpace:](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.
