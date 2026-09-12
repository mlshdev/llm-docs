> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/texturestoragemode](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/texturestoragemode)

# textureStorageMode (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify the storage mode for the texture.

## Declaration

```swift
static let textureStorageMode: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLStorageMode](../../../metal/mtlstoragemode.md) value.

If this option is omitted, the texture is created with the default storage mode for Metal textures: [MTLStorageMode.shared](../../../metal/mtlstoragemode/shared.md) on iOS and tvOS, and [MTLStorageMode.managed](../../../metal/mtlstoragemode/managed.md) in macOS. Specifying the [MTLStorageMode.private](../../../metal/mtlstoragemode/private.md) option causes the [MTKTextureLoader](../../mtktextureloader.md) object to submit work to the GPU on your behalf.

## See Also

### Specifying Resource Options

- [textureCPUCacheMode](texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [textureUsage](textureusage.md): A key used to specify the intended usage of the texture.

# MTKTextureLoaderOptionTextureStorageMode (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify the storage mode for the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionTextureStorageMode;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLStorageMode](../../../metal/mtlstoragemode.md) value.

If this option is omitted, the texture is created with the default storage mode for Metal textures: [MTLStorageModeShared](../../../metal/mtlstoragemode/shared.md) on iOS and tvOS, and [MTLStorageModeManaged](../../../metal/mtlstoragemode/managed.md) in macOS. Specifying the [MTLStorageModePrivate](../../../metal/mtlstoragemode/private.md) option causes the [MTKTextureLoader](../../mtktextureloader.md) object to submit work to the GPU on your behalf.

## See Also

### Specifying Resource Options

- [MTKTextureLoaderOptionTextureCPUCacheMode](texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [MTKTextureLoaderOptionTextureUsage](textureusage.md): A key used to specify the intended usage of the texture.
