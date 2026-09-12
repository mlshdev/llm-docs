> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/textureusage](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/textureusage)

# textureUsage (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify the intended usage of the texture.

## Declaration

```swift
static let textureUsage: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLTextureUsage](../../../metal/mtltextureusage.md) value.

If this key is not specified, the default value is determined by the default [usage](../../../metal/mtltexturedescriptor/usage.md) value of the [MTLTextureDescriptor](../../../metal/mtltexturedescriptor.md) class. When you create a texture, determine the specific ways in which it will be used, and set the texture usage to contain just those options. Do not set usage options that you don’t intend to use. Metal uses these flags to determine how the texture is allocated and configured; setting them correctly can significantly improve your app’s performance..

## See Also

### Specifying Resource Options

- [textureCPUCacheMode](texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [textureStorageMode](texturestoragemode.md): A key used to specify the storage mode for the texture.

# MTKTextureLoaderOptionTextureUsage (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A key used to specify the intended usage of the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionTextureUsage;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a [MTLTextureUsage](../../../metal/mtltextureusage.md) value.

If this key is not specified, the default value is determined by the default [usage](../../../metal/mtltexturedescriptor/usage.md) value of the [MTLTextureDescriptor](../../../metal/mtltexturedescriptor.md) class. When you create a texture, determine the specific ways in which it will be used, and set the texture usage to contain just those options. Do not set usage options that you don’t intend to use. Metal uses these flags to determine how the texture is allocated and configured; setting them correctly can significantly improve your app’s performance..

## See Also

### Specifying Resource Options

- [MTKTextureLoaderOptionTextureCPUCacheMode](texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [MTKTextureLoaderOptionTextureStorageMode](texturestoragemode.md): A key used to specify the storage mode for the texture.
