> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(pixelbuffer:)](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(pixelbuffer:))

# init(pixelBuffer:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Core Video pixel buffer.

## Declaration

```swift
init(pixelBuffer: CVPixelBuffer)
```

## Parameters

- `pixelBuffer`: The [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) render target.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a [CVPixelBuffer](../../corevideo/cvpixelbuffer.md).

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created by querying the [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) object’s attributes.

## See Also

### Creating a Render Destination

- [init(ioSurface:)](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [init(mtlTexture:commandBuffer:)](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:)](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [init(glTexture:target:width:height:)](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [init(bitmapData:width:height:bytesPerRow:format:)](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.

# initWithPixelBuffer: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on a Core Video pixel buffer.

## Declaration

```objectivec
- (instancetype) initWithPixelBuffer:(CVPixelBufferRef) pixelBuffer;
```

## Parameters

- `pixelBuffer`: The [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md) render target.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to a [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md).

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created by querying the [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md) object’s attributes.

## See Also

### Creating a Render Destination

- [initWithIOSurface:](init%28iosurface_%29-1hfcq.md): Creates a render destination based on an `IOSurface` object.
- [initWithMTLTexture:commandBuffer:](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider:](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [initWithGLTexture:target:width:height:](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [initWithBitmapData:width:height:bytesPerRow:format:](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.
