> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option](https://developer.apple.com/documentation/metalkit/mtktextureloader/option)

# MTKTextureLoader.Option (Swift)

**Framework:** MetalKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Keys and values used to specify loading options.

## Declaration

```swift
struct Option
```

## Topics

### Creating Texture Loading Options

- [init(rawValue:)](option/init%28rawvalue_%29.md): Creates a texture loader option from a raw string value.

### Specifying Mipmap Options

- [allocateMipmaps](option/allocatemipmaps.md): A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.
- [generateMipmaps](option/generatemipmaps.md): A key used to specify whether the texture loader should generate mipmaps for the texture.

### Specifying Resource Options

- [textureCPUCacheMode](option/texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [textureStorageMode](option/texturestoragemode.md): A key used to specify the storage mode for the texture.
- [textureUsage](option/textureusage.md): A key used to specify the intended usage of the texture.

### Specifying Origin Information

- [origin](option/origin.md): A key used to specify when to flip the pixel coordinates of the texture.
- [MTKTextureLoader.Origin](origin.md): Options for specifying when to flip the pixel coordinates of the texture.

### Specifying Cube Layout

- [cubeLayout](option/cubelayout.md): A key used to specify how cube texture data is arranged in the source image.
- [MTKTextureLoader.CubeLayout](cubelayout.md): Options for specifying how cube texture data is arranged in the source image.

### Specifying sRGB Options

- [SRGB](option/srgb.md): A key used to specify whether the texture data is stored as sRGB image data.

### Type Properties

- [loadAsArray](option/loadasarray.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTKTextureLoaderOption (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Keys and values used to specify loading options.

## Declaration

```objectivec
typedef NSString * MTKTextureLoaderOption;
```

## Topics

### Specifying Mipmap Options

- [MTKTextureLoaderOptionAllocateMipmaps](option/allocatemipmaps.md): A key used to specify whether the texture loader should allocate memory for mipmaps in the texture.
- [MTKTextureLoaderOptionGenerateMipmaps](option/generatemipmaps.md): A key used to specify whether the texture loader should generate mipmaps for the texture.

### Specifying Resource Options

- [MTKTextureLoaderOptionTextureCPUCacheMode](option/texturecpucachemode.md): A key used to specify the CPU cache mode for the texture.
- [MTKTextureLoaderOptionTextureStorageMode](option/texturestoragemode.md): A key used to specify the storage mode for the texture.
- [MTKTextureLoaderOptionTextureUsage](option/textureusage.md): A key used to specify the intended usage of the texture.

### Specifying Origin Information

- [MTKTextureLoaderOptionOrigin](option/origin.md): A key used to specify when to flip the pixel coordinates of the texture.
- [MTKTextureLoaderOrigin](origin.md): Options for specifying when to flip the pixel coordinates of the texture.

### Specifying Cube Layout

- [MTKTextureLoaderOptionCubeLayout](option/cubelayout.md): A key used to specify how cube texture data is arranged in the source image.
- [MTKTextureLoaderCubeLayout](cubelayout.md): Options for specifying how cube texture data is arranged in the source image.

### Specifying sRGB Options

- [MTKTextureLoaderOptionSRGB](option/srgb.md): A key used to specify whether the texture data is stored as sRGB image data.

### Type Properties

- [MTKTextureLoaderOptionLoadAsArray](option/loadasarray.md)
