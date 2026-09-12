> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(width:height:pixelformat:commandbuffer:mtltextureprovider:)](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(width:height:pixelformat:commandbuffer:mtltextureprovider:))

# init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Metal texture with specified pixel format.

## Declaration

```swift
init(width: Int, height: Int, pixelFormat: MTLPixelFormat, commandBuffer: (any MTLCommandBuffer)?, mtlTextureProvider block: (() -> any MTLTexture)? = nil)
```

## Parameters

- `width`: Width of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `height`: Height of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `pixelFormat`: Pixel format of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `commandBuffer`: An optional [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) used for rendering to the [MTLTexture](../../metal/mtltexture.md).
- `block`: [MTLTexture](../../metal/mtltexture.md)-rendering provider block to be called lazily when the destination is rendered to.  The block must return a texture of [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType.type2D](../../metal/mtltexturetype/type2d.md).

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a Metal texture.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created with [sRGB](../../coregraphics/cgcolorspace/srgb.md), [extendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [genericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [init(ioSurface:)](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [init(mtlTexture:commandBuffer:)](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [init(glTexture:target:width:height:)](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [init(bitmapData:width:height:bytesPerRow:format:)](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.

# initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Metal texture with specified pixel format.

## Declaration

```objectivec
- (instancetype) initWithWidth:(NSUInteger) width height:(NSUInteger) height pixelFormat:(MTLPixelFormat) pixelFormat commandBuffer:(id<MTLCommandBuffer>) commandBuffer mtlTextureProvider:(id<MTLTexture> (^)()) block;
```

## Parameters

- `width`: Width of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `height`: Height of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `pixelFormat`: Pixel format of the [MTLTexture](../../metal/mtltexture.md) that will be returned by block.
- `commandBuffer`: An optional [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) used for rendering to the [MTLTexture](../../metal/mtltexture.md).
- `block`: [MTLTexture](../../metal/mtltexture.md)-rendering provider block to be called lazily when the destination is rendered to.  The block must return a texture of [MTLTextureType](../../metal/mtltexturetype.md) of [MTLTextureType2D](../../metal/mtltexturetype/type2d.md).

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a Metal texture.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created with [kCGColorSpaceSRGB](../../coregraphics/cgcolorspace/srgb.md), [kCGColorSpaceExtendedSRGB](../../coregraphics/cgcolorspace/extendedsrgb.md), or [kCGColorSpaceGenericGrayGamma2_2](../../coregraphics/cgcolorspace/genericgraygamma2_2.md).

## See Also

### Creating a Render Destination

- [initWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [initWithIOSurface:](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [initWithMTLTexture:commandBuffer:](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [initWithGLTexture:target:width:height:](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [initWithBitmapData:width:height:bytesPerRow:format:](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.
