> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/createcgimage(_:from:format:colorspace:)](https://developer.apple.com/documentation/coreimage/cicontext/createcgimage(_:from:format:colorspace:))

# createCGImage(\_:from:format:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.

## Declaration

```swift
func createCGImage(_ image: CIImage, from fromRect: CGRect, format: CIFormat, colorSpace: CGColorSpace?) -> CGImage?
```

## Parameters

- `image`: A [CIImage](../ciimage.md) image instance for which to create a `CGImage`.
- `fromRect`: The `CGRect` region of the `image` to use. This region relative to the cartesean coordinate system of `image`. This region will be intersected with integralized and intersected with `image.extent`.
- `format`: A [CIFormat](../ciformat.md) to specify the pixel format of the created `CGImage`. For example, if `kCIFormatRGBX16` is specified, then the created `CGImage` will be 16 bits-per-component and opaque.
- `colorSpace`: The `CGColorSpace` for the output image. This color space must have either `CGColorSpaceModel.rgb` or `CGColorSpaceModel.monochrome` and be compatible with the specified pixel format.

<a id="return-value"></a>

## Return Value

 Returns a new `CGImage` instance. You are responsible for releasing the returned image when you no longer need it. The returned value will be `null` if the extent is empty or too big.

## See Also

### Rendering Images

- [createCGImage(\_:from:)](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage(\_:from:format:colorSpace:deferred:)](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render(\_:toBitmap:rowBytes:bounds:format:colorSpace:)](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render(\_:to:)](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render(\_:to:commandBuffer:bounds:colorSpace:)](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

# createCGImage:fromRect:format:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.

## Declaration

```objectivec
- (CGImageRef) createCGImage:(CIImage *) image fromRect:(CGRect) fromRect format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `image`: A [CIImage](../ciimage.md) image instance for which to create a `CGImage`.
- `fromRect`: The `CGRect` region of the `image` to use. This region relative to the cartesean coordinate system of `image`. This region will be intersected with integralized and intersected with `image.extent`.
- `format`: A [CIFormat](../ciformat.md) to specify the pixel format of the created `CGImage`. For example, if `kCIFormatRGBX16` is specified, then the created `CGImage` will be 16 bits-per-component and opaque.
- `colorSpace`: The `CGColorSpace` for the output image. This color space must have either `CGColorSpaceModel.rgb` or `CGColorSpaceModel.monochrome` and be compatible with the specified pixel format.

<a id="return-value"></a>

## Return Value

 Returns a new `CGImage` instance. You are responsible for releasing the returned image when you no longer need it. The returned value will be `null` if the extent is empty or too big.

## See Also

### Rendering Images

- [createCGImage:fromRect:](createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage:fromRect:format:colorSpace:deferred:](createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render:toBitmap:rowBytes:bounds:format:colorSpace:](render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render:toCVPixelBuffer:](render%28__to_%29.md): Renders an image into a pixel buffer.
- [render:toCVPixelBuffer:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render:toIOSurface:bounds:colorSpace:](render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render:toMTLTexture:commandBuffer:bounds:colorSpace:](render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.
