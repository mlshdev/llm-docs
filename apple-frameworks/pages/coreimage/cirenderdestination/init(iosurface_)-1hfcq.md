> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/init(iosurface:)-1hfcq](https://developer.apple.com/documentation/coreimage/cirenderdestination/init(iosurface:)-1hfcq)

# init(ioSurface:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on an `IOSurface` object.

## Declaration

```swift
init(ioSurface surface: IOSurface)
```

## Parameters

- `surface`: The `IOSurface` render target.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to an `IOSurface` object.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpace](../../coregraphics/cgcolorspace.md) created by querying the `IOSurface` object’s attributes.

## See Also

### Creating a Render Destination

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [init(mtlTexture:commandBuffer:)](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [init(width:height:pixelFormat:commandBuffer:mtlTextureProvider:)](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [init(glTexture:target:width:height:)](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [init(bitmapData:width:height:bytesPerRow:format:)](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.

# initWithIOSurface: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a render destination based on an `IOSurface` object.

## Declaration

```objectivec
- (instancetype) initWithIOSurface:(IOSurface *) surface;
```

## Parameters

- `surface`: The `IOSurface` render target.

<a id="return-value"></a>

## Return Value

A [CIRenderDestination](../cirenderdestination.md) object for rendering to an `IOSurface` object.

<a id="Discussion"></a>

## Discussion

The destination’s [colorSpace](colorspace.md) property will default to a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) created by querying the `IOSurface` object’s attributes.

## See Also

### Creating a Render Destination

- [initWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a render destination based on a Core Video pixel buffer.
- [initWithMTLTexture:commandBuffer:](init%28mtltexture_commandbuffer_%29-2iu5i.md): Creates a render destination based on a Metal texture.
- [initWithWidth:height:pixelFormat:commandBuffer:mtlTextureProvider:](init%28width_height_pixelformat_commandbuffer_mtltextureprovider_%29.md): Creates a render destination based on a Metal texture with specified pixel format.
- [initWithGLTexture:target:width:height:](init%28gltexture_target_width_height_%29-9ci8e.md): Creates a render destination based on an OpenGL texture.
- [initWithBitmapData:width:height:bytesPerRow:format:](init%28bitmapdata_width_height_bytesperrow_format_%29.md): Creates a render destination based on a client-managed buffer.
