> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/isdepth24stencil8pixelformatsupported](https://developer.apple.com/documentation/metal/mtldevice/isdepth24stencil8pixelformatsupported)

# isDepth24Stencil8PixelFormatSupported (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.

> Never supported on Apple Silicon

## Declaration

```swift
var isDepth24Stencil8PixelFormatSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the device supports the [MTLPixelFormat.depth24Unorm_stencil8](../mtlpixelformat/depth24unorm_stencil8.md) pixel format.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.

# depth24Stencil8PixelFormatSupported (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.

> Never supported on Apple Silicon

## Declaration

```objectivec
@property (readonly, getter=isDepth24Stencil8PixelFormatSupported) BOOL depth24Stencil8PixelFormatSupported;
```

<a id="discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the device supports the [MTLPixelFormatDepth24Unorm_Stencil8](../mtlpixelformat/depth24unorm_stencil8.md) pixel format.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.
- [readWriteTextureSupport](readwritetexturesupport.md): The GPU device’s texture support tier.
