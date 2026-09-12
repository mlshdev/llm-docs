> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(gltexture:target:width:height:)-9ci8e](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(gltexture:target:width:height:)-9ci8e)

# init(glTexture:target:width:height:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on an OpenGL texture.

## Declaration

```swift
init(glTexture texture: UInt32, target: UInt32, width: Int, height: Int)
```

## Parameters

- `texture`: `GLTexture`-backed texture data.
- `target`: A value denoting the type of destination.  Use `GL_TEXTURE_2D` if your texture dimensions are a power of two, or `GL_TEXTURE_RECTANGLE_EXT` otherwise.
- `width`: Width of the texture in texels.
- `height`: Height of the texture in texels.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a `GLTexture` supported by `GLContext`-backed [CIContext](../cicontext.md).

<a id="Discussion"></a>

## Discussion

Rendering to a `GLTexture`-backed [CIRenderDestination](../cirenderdestination.md) is supported by only `GLContext`-backed [CIContext](../cicontext.md).

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created with [sRGB](../../coregraphics/cgcolorspace/srgb.md), [extendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [genericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [init(ioSurface:)](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [init(mtlTexture:commandBuffer:)](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:)](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [init(bitmapData:width:height:bytesPerRow:format:)](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.

# initWithGLTexture:target:width:height: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on an OpenGL texture.

## Declaration

```objectivec
- (instancetype) initWithGLTexture:(unsigned int) texture target:(unsigned int) target width:(NSUInteger) width height:(NSUInteger) height;
```

## Parameters

- `texture`: `GLTexture`-backed texture data.
- `target`: A value denoting the type of destination.  Use `GL_TEXTURE_2D` if your texture dimensions are a power of two, or `GL_TEXTURE_RECTANGLE_EXT` otherwise.
- `width`: Width of the texture in texels.
- `height`: Height of the texture in texels.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a `GLTexture` supported by `GLContext`-backed [CIContext](../cicontext.md).

<a id="Discussion"></a>

## Discussion

Rendering to a `GLTexture`-backed [CIRenderDestination](../cirenderdestination.md) is supported by only `GLContext`-backed [CIContext](../cicontext.md).

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created with [kCGColorSpaceSRGB](../../coregraphics/cgcolorspace/srgb.md), [kCGColorSpaceExtendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [kCGColorSpaceGenericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [initWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [initWithIOSurface:](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [initWithMTLTexture:commandBuffer:](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider:](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [initWithBitmapData:width:height:bytesPerRow:format:](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.
