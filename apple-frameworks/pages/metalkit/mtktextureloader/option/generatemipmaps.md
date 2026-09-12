> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/generatemipmaps](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/generatemipmaps)

# generateMipmaps (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify whether the texture loader should generate mipmaps for the texture.

## Declaration

```swift
static let generateMipmaps: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a boolean value.

If the value is [true](https://developer.apple.com/documentation/swift/true), the resulting texture will be created with mipmaps. If the file being loaded contains data for mipmaps (such as in a PVR or KTX file), specifying this option will overwrite the existing mipmap data in the loaded texture.

This option can be used only if the pixel format of the texture is filterable and color-renderable; see the [Pixel Format Capabilities](https://developer.apple.com/metal/capabilities/) for more information.

This option also implies that [allocateMipmaps](allocatemipmaps.md) is [true](https://developer.apple.com/documentation/swift/true). Specifying this option causes the [MTKTextureLoader](../../mtktextureloader.md) object to submit work to the GPU on your behalf.

## See Also

### Specifying Mipmap Options

- [allocateMipmaps](allocatemipmaps.md): A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.

# MTKTextureLoaderOptionGenerateMipmaps (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify whether the texture loader should generate mipmaps for the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionGenerateMipmaps;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a boolean value.

If the value is [true](https://developer.apple.com/documentation/swift/true), the resulting texture will be created with mipmaps. If the file being loaded contains data for mipmaps (such as in a PVR or KTX file), specifying this option will overwrite the existing mipmap data in the loaded texture.

This option can be used only if the pixel format of the texture is filterable and color-renderable; see the [Pixel Format Capabilities](https://developer.apple.com/metal/capabilities/) for more information.

This option also implies that [MTKTextureLoaderOptionAllocateMipmaps](allocatemipmaps.md) is [true](https://developer.apple.com/documentation/swift/true). Specifying this option causes the [MTKTextureLoader](../../mtktextureloader.md) object to submit work to the GPU on your behalf.

## See Also

### Specifying Mipmap Options

- [MTKTextureLoaderOptionAllocateMipmaps](allocatemipmaps.md): A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.
