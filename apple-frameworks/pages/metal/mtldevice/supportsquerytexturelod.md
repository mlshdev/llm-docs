> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsquerytexturelod](https://developer.apple.com/documentation/metal/mtldevice/supportsquerytexturelod)

# supportsQueryTextureLOD (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can query the texture level of detail from within a shader.

## Declaration

```swift
var supportsQueryTextureLOD: Bool { get }
```

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [isDepth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.

# supportsQueryTextureLOD (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can query the texture level of detail from within a shader.

## Declaration

```objectivec
@property (readonly) BOOL supportsQueryTextureLOD;
```

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [depth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.
