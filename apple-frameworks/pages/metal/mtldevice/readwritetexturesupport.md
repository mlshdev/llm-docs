> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/readwritetexturesupport](https://developer.apple.com/documentation/metal/mtldevice/readwritetexturesupport)

# readWriteTextureSupport (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU device’s texture support tier.

## Declaration

```swift
var readWriteTextureSupport: MTLReadWriteTextureTier { get }
```

## Topics

### Read-write texture tiers

- [MTLReadWriteTextureTier](../mtlreadwritetexturetier.md): The support level for read-write texture formats.

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [isDepth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.

# readWriteTextureSupport (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU device’s texture support tier.

## Declaration

```objectivec
@property (readonly) MTLReadWriteTextureTier readWriteTextureSupport;
```

## Topics

### Read-write texture tiers

- [MTLReadWriteTextureTier](../mtlreadwritetexturetier.md): The support level for read-write texture formats.

## See Also

### Checking texture and sampler support

- [supports32BitFloatFiltering](supports32bitfloatfiltering.md): A Boolean value that indicates whether the GPU can filter a texture with a 32-bit floating-point format.
- [supportsBCTextureCompression](supportsbctexturecompression.md): A Boolean value that indicates whether you can use textures that use BC compression.
- [depth24Stencil8PixelFormatSupported](isdepth24stencil8pixelformatsupported.md): Deprecated. A Boolean value that indicates whether a device supports a packed depth-and-stencil pixel format.
- [supportsQueryTextureLOD](supportsquerytexturelod.md): A Boolean value that indicates whether you can query the texture level of detail from within a shader.
