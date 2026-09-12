> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(mtltexture:commandbuffer:)-2iu5i](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(mtltexture:commandbuffer:)-2iu5i)

# init(mtlTexture:commandBuffer:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Metal texture.

## Declaration

```swift
init(mtlTexture texture: any MTLTexture, commandBuffer: (any MTLCommandBuffer)?)
```

## Parameters

- `texture`: The [MTLTexture](../../metal/mtltexture.md) object for rendering with [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType.type2D](../../metal/mtltexturetype/type2d.md).
- `commandBuffer`: An optional [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) to use for rendering to the [MTLTexture](../../metal/mtltexture.md) destination.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a Metal buffer.

<a id="Discussion"></a>

## Discussion

Rendering to a [MTLTexture](../../metal/mtltexture.md)-backed [CIRenderDestination](../cirenderdestination.md) is supported by only [MTLTexture](../../metal/mtltexture.md)-backed [CIContext](../cicontext.md) objects.  The texture must have [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType.type2D](../../metal/mtltexturetype/type2d.md).

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created with [sRGB](../../coregraphics/cgcolorspace/srgb.md), [extendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [genericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [init(ioSurface:)](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:)](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [init(glTexture:target:width:height:)](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [init(bitmapData:width:height:bytesPerRow:format:)](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.

# initWithMTLTexture:commandBuffer: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Metal texture.

## Declaration

```objectivec
- (instancetype) initWithMTLTexture:(id<MTLTexture>) texture commandBuffer:(id<MTLCommandBuffer>) commandBuffer;
```

## Parameters

- `texture`: The [MTLTexture](../../metal/mtltexture.md) object for rendering with [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType2D](../../metal/mtltexturetype/type2d.md).
- `commandBuffer`: An optional [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) to use for rendering to the [MTLTexture](../../metal/mtltexture.md) destination.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a Metal buffer.

<a id="Discussion"></a>

## Discussion

Rendering to a [MTLTexture](../../metal/mtltexture.md)-backed [CIRenderDestination](../cirenderdestination.md) is supported by only [MTLTexture](../../metal/mtltexture.md)-backed [CIContext](../cicontext.md) objects.  The texture must have [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType2D](../../metal/mtltexturetype/type2d.md).

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created with [kCGColorSpaceSRGB](../../coregraphics/cgcolorspace/srgb.md), [kCGColorSpaceExtendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [kCGColorSpaceGenericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [initWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [initWithIOSurface:](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider:](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [initWithGLTexture:target:width:height:](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [initWithBitmapData:width:height:bytesPerRow:format:](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.
