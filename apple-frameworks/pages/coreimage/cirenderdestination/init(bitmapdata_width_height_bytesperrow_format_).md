> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(bitmapdata:width:height:bytesperrow:format:)](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(bitmapdata:width:height:bytesperrow:format:))

# init(bitmapData:width:height:bytesPerRow:format:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a client-managed buffer.

## Declaration

```swift
init(bitmapData data: UnsafeMutableRawPointer, width: Int, height: Int, bytesPerRow: Int, format: CIFormat)
```

## Parameters

- `data`: Pointer to raw bits of a client-managed buffer that is at least (`bytesPerRow` \* `height`) bytes in size.
- `width`: Width of the bitmap image in pixels.
- `height`: Height of the bitmap image in pixels.
- `bytesPerRow`: Number of bytes per row of data.
- `format`: Color format specifying how the colors are laid out in memory (for example, [RGBA8](../ciformat/rgba8.md)).

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a client-managed buffer.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](../ciimage/colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created with [sRGB](../../coregraphics/cgcolorspace/srgb.md), [extendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [genericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [init(ioSurface:)](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [init(mtlTexture:commandBuffer:)](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:)](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [init(glTexture:target:width:height:)](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.

# initWithBitmapData:width:height:bytesPerRow:format: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a client-managed buffer.

## Declaration

```objectivec
- (instancetype) initWithBitmapData:(void *) data width:(NSUInteger) width height:(NSUInteger) height bytesPerRow:(NSUInteger) bytesPerRow format:(CIFormat) format;
```

## Parameters

- `data`: Pointer to raw bits of a client-managed buffer that is at least (`bytesPerRow` \* `height`) bytes in size.
- `width`: Width of the bitmap image in pixels.
- `height`: Height of the bitmap image in pixels.
- `bytesPerRow`: Number of bytes per row of data.
- `format`: Color format specifying how the colors are laid out in memory (for example, [kCIFormatRGBA8](../ciformat/rgba8.md)).

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a client-managed buffer.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](../ciimage/colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created with [kCGColorSpaceSRGB](../../coregraphics/cgcolorspace/srgb.md), [kCGColorSpaceExtendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [kCGColorSpaceGenericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [initWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [initWithIOSurface:](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [initWithMTLTexture:commandBuffer:](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider:](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [initWithGLTexture:target:width:height:](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
