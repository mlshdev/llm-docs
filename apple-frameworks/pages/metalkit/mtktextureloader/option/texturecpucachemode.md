> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/texturecpucachemode](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/texturecpucachemode)

# textureCPUCacheMode (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify the CPU cache mode for the texture.

## Declaration

```swift
static let textureCPUCacheMode: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLCPUCacheMode](../../../metal/mtlcpucachemode.md) value.

If this key is not specified, the default value is the value associated with [MTLCPUCacheMode.defaultCache](../../../metal/mtlcpucachemode/defaultcache.md).

## See Also

### Specifying Resource Options

- [textureStorageMode](texturestoragemode.md): A key used to specify the storage mode for the texture.
- [textureUsage](textureusage.md): A key used to specify the intended usage of the texture.

# MTKTextureLoaderOptionTextureCPUCacheMode (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify the CPU cache mode for the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionTextureCPUCacheMode;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLCPUCacheMode](../../../metal/mtlcpucachemode.md) value.

If this key is not specified, the default value is the value associated with [MTLCPUCacheModeDefaultCache](../../../metal/mtlcpucachemode/defaultcache.md).

## See Also

### Specifying Resource Options

- [MTKTextureLoaderOptionTextureStorageMode](texturestoragemode.md): A key used to specify the storage mode for the texture.
- [MTKTextureLoaderOptionTextureUsage](textureusage.md): A key used to specify the intended usage of the texture.
