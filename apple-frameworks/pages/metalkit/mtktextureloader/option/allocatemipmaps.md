> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/allocatemipmaps](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/allocatemipmaps)

# allocateMipmaps (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.

## Declaration

```swift
static let allocateMipmaps: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a boolean value.

This option applies only if the texture being loaded does not contain mipmap data. When loading such a texture, if the value is [false](https://developer.apple.com/documentation/swift/false), only the texture is loaded and its mipmap contents are undefined. If the value is [true](https://developer.apple.com/documentation/swift/true), a full set of mipmap levels are allocated for the texture when the texture is loaded, and it is your responsibility to generate the mipmap contents. If this key is not specified and the image being loaded contains data for mipmaps, the mipmap memory is allocated and the image data is loaded.

> **Note**

>  This option only allocates mipmap memory for the texture. To generate the actual mipmaps for the texture, use the [generateMipmaps](generatemipmaps.md) option and set it to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying Mipmap Options

- [generateMipmaps](generatemipmaps.md): A key used to specify whether the texture loader should generate mipmaps for the texture.

# MTKTextureLoaderOptionAllocateMipmaps (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionAllocateMipmaps;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a boolean value.

This option applies only if the texture being loaded does not contain mipmap data. When loading such a texture, if the value is [false](https://developer.apple.com/documentation/swift/false), only the texture is loaded and its mipmap contents are undefined. If the value is [true](https://developer.apple.com/documentation/swift/true), a full set of mipmap levels are allocated for the texture when the texture is loaded, and it is your responsibility to generate the mipmap contents. If this key is not specified and the image being loaded contains data for mipmaps, the mipmap memory is allocated and the image data is loaded.

> **Note**

>  This option only allocates mipmap memory for the texture. To generate the actual mipmaps for the texture, use the [MTKTextureLoaderOptionGenerateMipmaps](generatemipmaps.md) option and set it to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying Mipmap Options

- [MTKTextureLoaderOptionGenerateMipmaps](generatemipmaps.md): A key used to specify whether the texture loader should generate mipmaps for the texture.
