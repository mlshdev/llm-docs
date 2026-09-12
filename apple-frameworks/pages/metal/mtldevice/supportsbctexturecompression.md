> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsbctexturecompression](https://developer.apple.com/documentation/metal/mtldevice/supportsbctexturecompression)

# supportsBCTextureCompression (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 11.0+ · tvOS 16.4+ · visionOS 1.0+

A Boolean value that indicates whether you can use textures that use BC compression.

## Declaration

```swift
var supportsBCTextureCompression: Bool { get }
```

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [isDepth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.

# supportsBCTextureCompression (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 11.0+ · tvOS 16.4+ · visionOS 1.0+

A Boolean value that indicates whether you can use textures that use BC compression.

## Declaration

```objectivec
@property (readonly) BOOL supportsBCTextureCompression;
```

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [depth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.
